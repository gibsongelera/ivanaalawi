import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VlogGrid } from "@/components/VlogGrid";
import { InstagramFeed } from "@/components/InstagramFeed";
import { IvanaSkinShowcase } from "@/components/IvanaSkinShowcase";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VlogGrid />
        <InstagramFeed />
        <IvanaSkinShowcase />
      </main>
      <Footer />
    </>
  );
}
