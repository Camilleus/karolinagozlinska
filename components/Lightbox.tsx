"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { PortfolioItem } from "@/content/site";

interface LightboxProps {
  items: PortfolioItem[];
  index: number | null;
  labels: { close: string; prev: string; next: string };
  onChange: (index: number | null) => void;
}

export function Lightbox({ items, index, labels, onChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (index === null) return;
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, items.length, onChange]);

  const item = index !== null ? items[index] : undefined;
  const navButton =
    "absolute top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-ink";

  return (
    <dialog
      ref={dialogRef}
      onClose={() => onChange(null)}
      onClick={(e) => {
        if (e.target === dialogRef.current) onChange(null);
      }}
      aria-label={item?.alt}
      className="m-auto size-full max-h-none max-w-none bg-transparent p-0 backdrop:bg-ink/90"
    >
      {item && (
        <div className="relative flex size-full items-center justify-center p-4 md:p-phi-4">
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="100vw"
            className="max-h-full w-auto max-w-full object-contain"
          />
          <button type="button" onClick={() => onChange(null)} aria-label={labels.close} className={`${navButton} right-3 top-7 md:right-6`}>
            <span aria-hidden className="text-2xl leading-none">×</span>
          </button>
          <button
            type="button"
            onClick={() => onChange((index! - 1 + items.length) % items.length)}
            aria-label={labels.prev}
            className={`${navButton} left-3 md:left-6`}
          >
            <span aria-hidden className="text-2xl leading-none">‹</span>
          </button>
          <button
            type="button"
            onClick={() => onChange((index! + 1) % items.length)}
            aria-label={labels.next}
            className={`${navButton} right-3 md:right-6`}
          >
            <span aria-hidden className="text-2xl leading-none">›</span>
          </button>
        </div>
      )}
    </dialog>
  );
}
