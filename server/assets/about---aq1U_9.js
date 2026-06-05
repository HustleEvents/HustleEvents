import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { P as PageHero } from "./PageHero-C_1y5o1k.js";
import { S as SectionHeading } from "./SectionHeading-CQh4g071.js";
const teamImg = "/assets/about-team-CQwD4TuI.jpg";
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "About Hustle Events", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Creating Experiences. ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "Preserving Memories." }),
      " Delivering Excellence."
    ] }), subtitle: "We bring a personal touch to every event, transforming your vision into a celebration that reflects your style, personality, and purpose." }),
    /* @__PURE__ */ jsx("section", { className: "pb-24 md:pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsx("figure", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: teamImg, alt: "Team arranging florals in studio", width: 1920, height: 1080, className: "h-[60vh] w-full object-cover md:h-[75vh]" }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-4", children: /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Why Hustle Events?", title: /* @__PURE__ */ jsx(Fragment, { children: "Every event is unique. Every moment matters." }), subtitle: "We combine creativity, attention to detail, and professional event management to deliver seamless experiences from concept to completion." }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed text-ink/80", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl text-ink", children: "At Hustle Events, we bring a personal touch to every event. With passion, precision and a commitment to excellence, we design memorable experiences for weddings, birthdays, corporate Events, and private celebrations." }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: ["Innovative Event Concepts", "Premium Decor & Styling", "Professional Event Management", "Personalized Planning & Execution"].map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-background p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.28em] text-muted-foreground", children: "Why Choose Us" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 font-semibold text-ink", children: item })
        ] }, item)) }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Our promise is simple: every event is unique, every client is valued, and every detail matters. We work closely with you to create an unforgettable celebration that feels distinctly yours." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-bone py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid gap-px bg-border md:grid-cols-4", children: [["999+", "Events Planned"], ["4.5", "Ratings/5"], ["20/mo", "Maximum we accept"], ["5+ yrs", "Quietly at it"]].map(([k, v]) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-10 md:p-12", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-5xl text-ink md:text-6xl", children: k }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground", children: v })
    ] }, k)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Process", title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "How an event ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "is Executed" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-12 md:grid-cols-4", children: [["01", "Conversation", "We meet, walk through what you've imagined, what you haven't, and what you'd rather skip."], ["02", "Concept", "A single direction written, sketched, sourced that everything else hangs from."], ["03", "Craft", "Vendors briefed, samples reviewed, the room walked. Quietly, weeks ahead."], ["04", "Direction", "On the day, one producer in your ear and ten hands you'll never see."]].map(([k, t, d]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-gold", children: k }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 h-px w-full bg-border" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-2xl text-ink", children: t }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: d })
      ] }, k)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-ink py-28 text-background md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-5xl flex-col items-center px-6 text-center md:px-10", children: [
      /* @__PURE__ */ jsx(SectionHeading, { align: "center", eyebrow: "Let's begin", title: /* @__PURE__ */ jsx("span", { className: "text-background", children: "Have an evening in mind?" }) }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-3 border border-background px-10 py-5 text-[11px] font-medium uppercase tracking-[0.28em] text-background transition-all hover:bg-gold hover:text-ink hover:border-gold", children: [
        "Start Here ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
