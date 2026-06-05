import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Mail, Phone, Instagram, MapPin, ArrowRight } from "lucide-react";
import { P as PageHero } from "./PageHero-C_1y5o1k.js";
function ContactPage() {
  const [showWhatsAppWarning, setShowWhatsAppWarning] = useState(false);
  const whatsappNumber = "7349700724";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}`;
  const handleFieldFocus = () => {
    setShowWhatsAppWarning(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Let's Create Something Extraordinary", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Pure Energy.",
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "Total Dedication." }),
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Unforgettable Nights."
    ] }), subtitle: "Dream Big. Celebrate Bold. Hustle With Us. Share your vision, and we’ll shape every detail into an unforgettable experience." }),
    /* @__PURE__ */ jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10", children: [
      /* @__PURE__ */ jsxs("aside", { className: "md:col-span-4 space-y-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow mb-4", children: "Studio" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-base text-ink", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(Mail, { size: 16, className: "mt-1 text-gold" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:hustleevents1@gmail.com", className: "link-underline", children: "hustleevents1@gmail.com" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(Phone, { size: 16, className: "mt-1 text-gold" }),
              /* @__PURE__ */ jsx("a", { href: whatsappUrl, className: "link-underline", children: "+91 73497 00724" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(Instagram, { size: 16, className: "mt-1 text-gold" }),
              /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/_hustle_events_/?igsh=MWVqbTNiZzVtNjMxMg%3D%3D&utm_source=qr", target: "_blank", rel: "noreferrer", className: "link-underline", children: "@_hustle_events_" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(Mail, { size: 16, className: "mt-1 text-gold" }),
              /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/share/1DDs87esk5/?mibextid=wwXIfr", target: "_blank", rel: "noreferrer", className: "link-underline", children: "Facebook" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 16, className: "mt-1 text-gold" }),
              /* @__PURE__ */ jsx("a", { href: "https://maps.google.com/maps?q=12.9351726%2C77.5645621&z=17&hl=en", target: "_blank", rel: "noreferrer", className: "link-underline", children: "View location" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-8", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow mb-3", children: "Capacity" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "We take up to twenty events a month, eight to twelve weeks out. Earlier conversations are always better." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] border border-border bg-bone p-8 shadow-sm", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow mb-3", children: "WhatsApp Contact Only" }),
          /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed text-ink", children: "Our event booking form is currently unavailable. Please contact us directly on WhatsApp for service inquiries." }),
          /* @__PURE__ */ jsxs("a", { href: whatsappUrl, target: "_blank", rel: "noreferrer", className: "mt-6 inline-flex items-center gap-3 bg-ink px-10 py-5 text-[11px] font-medium uppercase tracking-[0.28em] text-background transition-all hover:bg-gold hover:text-ink", children: [
            "Message on WhatsApp",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
          ] })
        ] }),
        /* @__PURE__ */ jsx("form", { onSubmit: (e) => {
          e.preventDefault();
          setShowWhatsAppWarning(true);
        }, className: "space-y-8 mt-10", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] border border-border bg-background p-8 shadow-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "eyebrow mb-2", children: "Event inquiry form" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "The form is view-only. Tap any field to get the WhatsApp contact prompt." })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "rounded-full bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-gold", children: "Disabled" })
          ] }),
          showWhatsAppWarning && /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-3xl border border-rose-300 bg-rose-50 px-5 py-4 text-sm text-rose-700", children: [
            "Please contact us through WhatsApp at ",
            /* @__PURE__ */ jsx("strong", { children: "+91 73497 00724" }),
            " instead of using this form."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-2 mt-8", children: [
            /* @__PURE__ */ jsx(Field, { label: "Your name", name: "name", onFocus: handleFieldFocus, readOnly: true }),
            /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", onFocus: handleFieldFocus, readOnly: true }),
            /* @__PURE__ */ jsx(Field, { label: "Phone (optional)", name: "phone", onFocus: handleFieldFocus, readOnly: true }),
            /* @__PURE__ */ jsx(Field, { label: "Event type", name: "type", placeholder: "Wedding, gala, celebration…", onFocus: handleFieldFocus, readOnly: true }),
            /* @__PURE__ */ jsx(Field, { label: "Approximate date", name: "date", onFocus: handleFieldFocus, readOnly: true }),
            /* @__PURE__ */ jsx(Field, { label: "Guest count (approx.)", name: "guests", onFocus: handleFieldFocus, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("label", { className: "eyebrow mb-3 block", children: "Tell us about it" }),
            /* @__PURE__ */ jsx("textarea", { name: "message", rows: 6, readOnly: true, onFocus: handleFieldFocus, placeholder: "The room you've imagined, the people in it, anything that's been on your mind…", className: "w-full border-b border-border bg-transparent py-4 text-base text-ink placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold" })
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  readOnly,
  onFocus
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "eyebrow mb-3 block", children: label }),
    /* @__PURE__ */ jsx("input", { id: name, name, type, placeholder, readOnly, onFocus, className: "w-full border-b border-border bg-transparent py-3 text-base text-ink placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold" })
  ] });
}
export {
  ContactPage as component
};
