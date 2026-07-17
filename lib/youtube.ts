import "server-only";

export type Vlog = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  channelTitle: string;
  viewCount: number | null;
  url: string;
};

type SearchItem = {
  id: { videoId?: string };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    channelTitle: string;
    thumbnails: {
      default?: { url: string };
      medium?: { url: string };
      high?: { url: string };
      standard?: { url: string };
      maxres?: { url: string };
    };
  };
};

type SearchResponse = {
  items?: SearchItem[];
  error?: { message?: string };
};

type StatsItem = {
  id: string;
  statistics?: { viewCount?: string };
};

type StatsResponse = {
  items?: StatsItem[];
  error?: { message?: string };
};

const DEFAULT_CHANNEL_ID = "UCypeLkg3Ne5-LIyiB41b1GQ";
const REVALIDATE_SECONDS = 60 * 60;

function decodeEntities(s: string): string {
  if (!s) return s;
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

export async function fetchLatestVlogs(maxResults = 4): Promise<Vlog[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID || DEFAULT_CHANNEL_ID;

  if (!apiKey) {
    console.warn(
      "[youtube] YOUTUBE_API_KEY is not set. Returning placeholder vlogs."
    );
    return placeholderVlogs(maxResults);
  }

  const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search");
  searchUrl.searchParams.set("key", apiKey);
  searchUrl.searchParams.set("channelId", channelId);
  searchUrl.searchParams.set("part", "snippet");
  searchUrl.searchParams.set("order", "date");
  searchUrl.searchParams.set("type", "video");
  searchUrl.searchParams.set("maxResults", String(maxResults));

  try {
    const searchRes = await fetch(searchUrl.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!searchRes.ok) {
      const body = (await searchRes.json().catch(() => ({}))) as SearchResponse;
      console.warn(
        `[youtube] search failed (${searchRes.status}): ${
          body.error?.message ?? "unknown error"
        }`
      );
      return placeholderVlogs(maxResults);
    }

    const searchData = (await searchRes.json()) as SearchResponse;
    const items = searchData.items ?? [];
    const videos = items
      .filter((i) => Boolean(i.id?.videoId))
      .map((i) => {
        const id = i.id.videoId as string;
        const thumbs = i.snippet.thumbnails;
        const thumbnail =
          thumbs.maxres?.url ||
          thumbs.standard?.url ||
          thumbs.high?.url ||
          thumbs.medium?.url ||
          thumbs.default?.url ||
          `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

        const vlog: Vlog = {
          id,
          title: decodeEntities(i.snippet.title),
          description: decodeEntities(i.snippet.description),
          publishedAt: i.snippet.publishedAt,
          channelTitle: i.snippet.channelTitle,
          thumbnail,
          viewCount: null,
          url: `https://www.youtube.com/watch?v=${id}`,
        };
        return vlog;
      });

    if (videos.length === 0) {
      return placeholderVlogs(maxResults);
    }

    // Second call: enrich with view counts.
    const statsUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
    statsUrl.searchParams.set("key", apiKey);
    statsUrl.searchParams.set("part", "statistics");
    statsUrl.searchParams.set("id", videos.map((v) => v.id).join(","));

    const statsRes = await fetch(statsUrl.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (statsRes.ok) {
      const statsData = (await statsRes.json()) as StatsResponse;
      const byId = new Map<string, number>();
      for (const s of statsData.items ?? []) {
        const v = s.statistics?.viewCount;
        if (v) byId.set(s.id, Number(v));
      }
      for (const v of videos) {
        v.viewCount = byId.get(v.id) ?? null;
      }
    } else {
      const body = (await statsRes.json().catch(() => ({}))) as StatsResponse;
      console.warn(
        `[youtube] stats failed (${statsRes.status}): ${
          body.error?.message ?? "unknown error"
        }`
      );
    }

    return videos;
  } catch (err) {
    console.error("[youtube] fetch error", err);
    return placeholderVlogs(maxResults);
  }
}

export function formatViewCount(n: number | null): string {
  if (n == null) return "—";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M views`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K views`;
  return `${n} views`;
}

export function formatPublishedAt(iso: string): string {
  try {
    const then = new Date(iso).getTime();
    const now = Date.now();
    const diff = Math.max(0, now - then);
    const day = 24 * 60 * 60 * 1000;
    const days = Math.floor(diff / day);
    if (days < 1) return "Today";
    if (days === 1) return "1 day ago";
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)}w ago`;
    if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
  } catch {
    return "";
  }
}

function placeholderVlogs(count: number): Vlog[] {
  const seeds = [
    {
      title: "Street food adventure with the family!",
      thumbnail:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "My morning skincare routine ft. Ivana Skin",
      thumbnail:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Behind the scenes of my latest photoshoot",
      thumbnail:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Sisters take Manila — a mini vlog",
      thumbnail:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  return seeds.slice(0, count).map((s, i) => ({
    id: `placeholder-${i}`,
    title: s.title,
    description: "Preview vlog — connect your YouTube API key to see live data.",
    publishedAt: new Date(Date.now() - i * 86400000 * 3).toISOString(),
    channelTitle: "Ivana Alawi",
    thumbnail: s.thumbnail,
    viewCount: 1_200_000 - i * 210_000,
    url: "https://www.youtube.com/@IvanaAlawi",
  }));
}
