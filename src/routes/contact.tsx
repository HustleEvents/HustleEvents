import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HustleEvents" },
      { name: "description", content: "Tell us about the evening you've imagined. We accept up to twenty events a month — start the conversation early." },
      { property: "og:title", content: "Contact — HustleEvents" },
      { property: "og:description", content: "Tell us about the evening you've imagined." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [showWhatsAppWarning, setShowWhatsAppWarning] = useState(false);
  const whatsappNumber = "7349700724";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}`;

  const handleFieldFocus = () => {
    setShowWhatsAppWarning(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Let's Create Something Extraordinary"
        title={<>Pure Energy.<br /> <span className="italic text-gold">Total Dedication.</span> <br />Unforgettable Nights.</>}
        subtitle="Dream Big. Celebrate Bold. Hustle With Us. Share your vision, and we’ll shape every detail into an unforgettable experience." 
      />

      <section className="pb-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          {/* Contact details */}
          <aside className="md:col-span-4 space-y-10">
            <div>
              <p className="eyebrow mb-4">Studio</p>
              <ul className="space-y-4 text-base text-ink">
                <li className="flex items-start gap-4">
                  <Mail size={16} className="mt-1 text-gold" />
                  <a href="mailto:hustleevents1@gmail.com" className="link-underline">hustleevents1@gmail.com</a>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={16} className="mt-1 text-gold" />
                  <a href={whatsappUrl} className="link-underline">+91 73497 00724</a>
                </li>
                <li className="flex items-start gap-4">
                  <Instagram size={16} className="mt-1 text-gold" />
                  <a href="https://www.instagram.com/_hustle_events_/?igsh=MWVqbTNiZzVtNjMxMg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="link-underline">@_hustle_events_</a>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={16} className="mt-1 text-gold" />
                  <a href="https://www.facebook.com/share/1DDs87esk5/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="link-underline">Facebook</a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={16} className="mt-1 text-gold" />
                  <a href="https://maps.google.com/maps?q=12.9351726%2C77.5645621&z=17&hl=en" target="_blank" rel="noreferrer" className="link-underline">View location</a>
                </li>
              </ul>
            </div>
            <div className="border-t border-border pt-8">
              <p className="eyebrow mb-3">Capacity</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We take up to twenty events a month, eight to twelve weeks out. Earlier
                conversations are always better.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-8">
            <div className="rounded-[2rem] border border-border bg-bone p-8 shadow-sm">
              <p className="eyebrow mb-3">WhatsApp Contact Only</p>
              <p className="text-base leading-relaxed text-ink">
                Our event booking form is currently unavailable. Please contact us directly on WhatsApp for service inquiries.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-3 bg-ink px-10 py-5 text-[11px] font-medium uppercase tracking-[0.28em] text-background transition-all hover:bg-gold hover:text-ink"
              >
                Message on WhatsApp
                <ArrowRight size={14} />
              </a>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowWhatsAppWarning(true);
              }}
              className="space-y-8 mt-10"
            >
              <div className="rounded-[2rem] border border-border bg-background p-8 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-2">Event inquiry form</p>
                    <p className="text-sm text-muted-foreground">
                      The form is view-only. Tap any field to get the WhatsApp contact prompt.
                    </p>
                  </div>
                  <span className="rounded-full bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-gold">
                    Disabled
                  </span>
                </div>

                {showWhatsAppWarning && (
                  <div className="mt-6 rounded-3xl border border-rose-300 bg-rose-50 px-5 py-4 text-sm text-rose-700">
                    Please contact us through WhatsApp at <strong>+91 73497 00724</strong> instead of using this form.
                  </div>
                )}

                <div className="grid gap-8 md:grid-cols-2 mt-8">
                  <Field label="Your name" name="name" onFocus={handleFieldFocus} readOnly />
                  <Field label="Email" name="email" type="email" onFocus={handleFieldFocus} readOnly />
                  <Field label="Phone (optional)" name="phone" onFocus={handleFieldFocus} readOnly />
                  <Field label="Event type" name="type" placeholder="Wedding, gala, celebration…" onFocus={handleFieldFocus} readOnly />
                  <Field label="Approximate date" name="date" onFocus={handleFieldFocus} readOnly />
                  <Field label="Guest count (approx.)" name="guests" onFocus={handleFieldFocus} readOnly />
                </div>
                <div className="mt-8">
                  <label className="eyebrow mb-3 block">Tell us about it</label>
                  <textarea
                    name="message"
                    rows={6}
                    readOnly
                    onFocus={handleFieldFocus}
                    placeholder="The room you've imagined, the people in it, anything that's been on your mind…"
                    className="w-full border-b border-border bg-transparent py-4 text-base text-ink placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  readOnly,
  onFocus,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  readOnly?: boolean;
  onFocus?: () => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-3 block">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        className="w-full border-b border-border bg-transparent py-3 text-base text-ink placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
