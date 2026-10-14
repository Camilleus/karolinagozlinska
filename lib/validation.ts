export const SERVICE_VALUES = ["sesje", "spiew", "modeling", "inne"] as const;
export type ServiceValue = (typeof SERVICE_VALUES)[number];

export interface ContactInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
  consent: boolean;
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{7,20}$/;

export function readContactForm(data: FormData): ContactInput {
  const str = (key: string): string => {
    const v = data.get(key);
    return typeof v === "string" ? v.trim() : "";
  };
  return {
    name: str("name"),
    email: str("email"),
    phone: str("phone"),
    service: str("service"),
    date: str("date"),
    message: str("message"),
    consent: data.get("consent") === "on",
  };
}

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};
  if (input.name.length < 2 || input.name.length > 100) errors.name = "Podaj imię (2–100 znaków).";
  if (!EMAIL_RE.test(input.email) || input.email.length > 200) errors.email = "Podaj poprawny adres e-mail.";
  if (input.phone && !PHONE_RE.test(input.phone)) errors.phone = "Podaj poprawny numer telefonu.";
  if (!(SERVICE_VALUES as readonly string[]).includes(input.service)) errors.service = "Wybierz rodzaj usługi.";
  if (input.date && (Number.isNaN(Date.parse(input.date)) || !/^\d{4}-\d{2}-\d{2}$/.test(input.date))) {
    errors.date = "Podaj poprawną datę.";
  }
  if (input.message.length < 10 || input.message.length > 2000) errors.message = "Wiadomość: 10–2000 znaków.";
  if (!input.consent) errors.consent = "Zgoda jest wymagana, aby wysłać zapytanie.";
  return errors;
}
