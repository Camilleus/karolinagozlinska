"use server";

import { Resend } from "resend";
import { content } from "@/content/site";
import {
  readContactForm,
  validateContact,
  type ContactErrors,
  type ContactInput,
} from "@/lib/validation";

export interface ContactState {
  status: "idle" | "success" | "error";
  errors?: ContactErrors;
  values?: ContactInput;
}

const serviceLabel = (value: string): string =>
  content.services.items.find((s) => s.id === value)?.title ?? content.contact.otherServiceLabel;

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  if (formData.get("website")) return { status: "success" };

  const values = readContactForm(formData);
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) return { status: "error", errors, values };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !to) return { status: "error", values };

  const from = process.env.CONTACT_FROM ?? `${content.brand.name} <onboarding@resend.dev>`;
  const text = [
    `Imię: ${values.name}`,
    `E-mail: ${values.email}`,
    `Telefon: ${values.phone || "—"}`,
    `Usługa: ${serviceLabel(values.service)}`,
    `Data wydarzenia: ${values.date || "—"}`,
    "",
    values.message,
  ].join("\n");

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `Zapytanie: ${serviceLabel(values.service)} — ${values.name}`,
      text,
    });
    if (error) return { status: "error", values };
  } catch {
    return { status: "error", values };
  }

  return { status: "success" };
}
