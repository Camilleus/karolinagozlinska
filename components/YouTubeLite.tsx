"use client";

import Image from "next/image";
import { useState } from "react";

interface YouTubeLiteProps {
  videoId: string;
  title: string;
  playLabel: string;
}

export function YouTubeLite({ videoId, title, playLabel }: YouTubeLiteProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-ink">
      {active ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`${playLabel}: ${title}`}
          className="group absolute inset-0 size-full"
        >
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1152px) 1100px, 100vw"
            className="object-cover"
            unoptimized
          />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors group-hover:bg-ink/10">
            <span className="flex size-20 items-center justify-center rounded-full bg-brand text-ink">
              <svg viewBox="0 0 24 24" className="ml-1 size-8" aria-hidden fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
