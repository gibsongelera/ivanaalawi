import * as React from "react";

type Props = {
  className?: string;
  size?: number;
};

export function Butterfly({ className, size = 24 }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4b5bd" />
          <stop offset="60%" stopColor="#fadadd" />
          <stop offset="100%" stopColor="#e8d28a" />
        </linearGradient>
      </defs>
      <g fill="url(#wing)" stroke="#d4af37" strokeWidth="0.6" strokeOpacity="0.55">
        <path d="M32 34c-4-10-14-18-22-14-3 1.6-4 5-2.5 8.5 2 4.5 8 8 14 8 4 0 8-1 10.5-2.5z" />
        <path d="M32 34c4-10 14-18 22-14 3 1.6 4 5 2.5 8.5-2 4.5-8 8-14 8-4 0-8-1-10.5-2.5z" />
        <path d="M32 34c-3 6-10 12-16 12-2.5 0-4-1.5-4-4 0-4 6-9 12-11 3-1 6-1 8 0z" />
        <path d="M32 34c3 6 10 12 16 12 2.5 0 4-1.5 4-4 0-4-6-9-12-11-3-1-6-1-8 0z" />
      </g>
      <ellipse cx="32" cy="34" rx="1.6" ry="7" fill="#2b2027" opacity="0.75" />
      <circle cx="32" cy="26" r="1.6" fill="#2b2027" opacity="0.8" />
      <path
        d="M32 25c-1-3-2-4-3.5-5M32 25c1-3 2-4 3.5-5"
        stroke="#2b2027"
        strokeWidth="0.7"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
