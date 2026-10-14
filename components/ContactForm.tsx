"use client";

import { useActionState, useEffect, useState, type FormEvent } from "react";
import { content } from "@/content/site";
import { sendContact, type ContactState } from "@/app/actions";
import { SERVICE_SELECT_EVENT } from "@/lib/service-select";
import { readContactForm, validateContact, type ContactErrors } from "@/lib/validation";
import { buttonClass } from "@/lib/ui";

const initial: ContactState = { status: "idle" };
const field =
  "mt-1 block min-h-12 w-full rounded-sm border border-ink/60 bg-cream px-3 py-2 text-base text-ink";

export function ContactForm() {
  const { contact, services } = content;
  const l = contact.labels;
  const [state, formAction, pending] = useActionState(sendContact, initial);
  const [clientErrors, setClientErrors] = useState<ContactErrors>({});
  const [service, setService] = useState("");

  useEffect(() => {
    const onSelect = (e: Event): void => setService((e as CustomEvent<string>).detail);
    window.addEventListener(SERVICE_SELECT_EVENT, onSelect);
    return () => window.removeEventListener(SERVICE_SELECT_EVENT, onSelect);
  }, []);

  const errors: ContactErrors = { ...state.errors, ...clientErrors };
  const values = state.values;

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    const found = validateContact(readContactForm(new FormData(e.currentTarget)));
    setClientErrors(found);
    if (Object.keys(found).length > 0) e.preventDefault();
  };

  if (state.status === "success") {
    return (
      <p role="status" className="rounded-sm border-l-4 border-brand bg-cream-deep p-phi-3 text-phi-1">
        {l.success}
      </p>
    );
  }

  const err = (key: keyof ContactErrors): string | undefined => errors[key];
  const describe = (key: keyof ContactErrors): { "aria-invalid": boolean; "aria-describedby"?: string } => ({
    "aria-invalid": Boolean(err(key)),
    "aria-describedby": err(key) ? `${key}-error` : undefined,
  });
  const errorMsg = (k: keyof ContactErrors): React.ReactNode =>
    err(k) ? (
      <p id={`${k}-error`} className="mt-1 text-sm font-medium text-brand-ink">
        {err(k)}
      </p>
    ) : null;

  return (
    <form action={formAction} onSubmit={onSubmit} noValidate className="relative space-y-phi-2">
      <div aria-hidden className="absolute -left-[9999px]">
        <label>
          Nie wypełniaj tego pola
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="font-medium" htmlFor="name">{l.name}</label>
        <input id="name" name="name" type="text" autoComplete="name" required defaultValue={values?.name} className={field} {...describe("name")} />
        {errorMsg("name")}
      </div>
      <div>
        <label className="font-medium" htmlFor="email">{l.email}</label>
        <input id="email" name="email" type="email" autoComplete="email" required defaultValue={values?.email} className={field} {...describe("email")} />
        {errorMsg("email")}
      </div>
      <div>
        <label className="font-medium" htmlFor="phone">{l.phone}</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={values?.phone} className={field} {...describe("phone")} />
        {errorMsg("phone")}
      </div>
      <div>
        <label className="font-medium" htmlFor="service">{l.service}</label>
        <select
          id="service"
          name="service"
          required
          value={service || values?.service || ""}
          onChange={(e) => setService(e.target.value)}
          className={field}
          {...describe("service")}
        >
          <option value="">{l.servicePlaceholder}</option>
          {services.items.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="inne">{contact.otherServiceLabel}</option>
        </select>
        {errorMsg("service")}
      </div>
      <div>
        <label className="font-medium" htmlFor="date">{l.date}</label>
        <input id="date" name="date" type="date" defaultValue={values?.date} className={field} {...describe("date")} />
        {errorMsg("date")}
      </div>
      <div>
        <label className="font-medium" htmlFor="message">{l.message}</label>
        <textarea id="message" name="message" rows={5} required defaultValue={values?.message} className={field} {...describe("message")} />
        {errorMsg("message")}
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="consent" defaultChecked={values?.consent} className="mt-1 size-5 accent-brand-ink" {...describe("consent")} />
          <span>
            {l.consent}{" "}
            <a href="/polityka-prywatnosci" className="font-semibold text-brand-ink underline underline-offset-4">
              ({content.footer.privacy})
            </a>
          </span>
        </label>
        {errorMsg("consent")}
      </div>

      {state.status === "error" && !state.errors && (
        <p role="alert" className="font-medium text-brand-ink">
          {l.error}
        </p>
      )}

      <button type="submit" disabled={pending} className={`${buttonClass} w-full disabled:opacity-60 md:w-auto`}>
        {pending ? l.sending : l.submit}
      </button>
    </form>
  );
}
