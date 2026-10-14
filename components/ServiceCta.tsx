"use client";

import type { ServiceId } from "@/content/site";
import { announceService } from "@/lib/service-select";
import { buttonClass } from "@/lib/ui";

export function ServiceCta({ id, label }: { id: ServiceId; label: string }) {
  return (
    <a href="#kontakt" onClick={() => announceService(id)} className={buttonClass}>
      {label}
    </a>
  );
}
