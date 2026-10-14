import type { ServiceId } from "@/content/site";

export const SERVICE_SELECT_EVENT = "service-select";

export function announceService(id: ServiceId): void {
  window.dispatchEvent(new CustomEvent<ServiceId>(SERVICE_SELECT_EVENT, { detail: id }));
}
