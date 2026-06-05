import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Gem, Calendar } from "lucide-react";
import { h as heroImg } from "./router-DL4AqU1g.js";
import { g as gardenImg, a as corporateImg, c as celebrationImg } from "./event-celebration-orExBWXq.js";
import { d as detailImg } from "./event-detail-CQvnD1CQ.js";
import { S as SectionHeading } from "./SectionHeading-CQh4g071.js";
import "@tanstack/react-query";
import "react";
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[100svh] overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Elegant candlelit reception at twilight", width: 1920, height: 1280, className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 inline-flex items-center gap-3 animate-fade-up", children: [
          /* @__PURE__ */ jsx("span", { className: "gold-line" }),
          /* @__PURE__ */ jsx("span", { className: "eyebrow text-ink/70", children: "HUSTLE EVENTS" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "max-w-4xl font-display text-4xl leading-[0.98] text-ink md:text-6xl lg:text-8xl animate-fade-up delay-100", children: [
          "Beyond Events.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic text-[#FAEDCD]", children: "Beyond Expectations." }),
          /* @__PURE__ */ jsx("br", {}),
          "Delivering Excellence."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-xl text-lg leading-relaxed text-ink/80 animate-fade-up delay-200", children: "At Hustle Events, we don’t just plan occasions—we craft experiences that inspire, connect, and leave lasting impressions. From elegant weddings and grand celebrations to corporate gatherings, every event is designed with creativity, precision, and passion." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-5 animate-fade-up delay-300", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 bg-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-background transition-all hover:bg-gold hover:text-ink", children: [
            "Begin the Conversation",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "link-underline text-[11px] font-medium uppercase tracking-[0.28em] text-ink", children: "View Recent Work" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border py-24 md:py-36", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-5 animate-fade-up", children: /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Beyond Events. Beyond Expectations.", title: /* @__PURE__ */ jsx(Fragment, { children: "We craft experiences that inspire, connect, and leave lasting impressions." }), subtitle: "From elegant weddings and grand celebrations to corporate gatherings, every event is designed with creativity, precision, and passion." }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-6 md:col-start-7 animate-fade-up delay-100", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-ink/85", children: "At Hustle Events, we bring a personal touch to every event. With a passion for creativity and flawless execution, we design memorable experiences—from intimate weddings and grand celebrations to corporate events and live souvenir activations—ensuring every detail is expertly managed." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-relaxed text-muted-foreground", children: "Every event is unique. Every client is valued. Every detail matters. We work closely with you to transform your vision into an unforgettable celebration that reflects your style, personality, and purpose." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-background transition-all hover:bg-gold hover:text-ink", children: [
            "Let’s Create Together",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-3 rounded-full border border-border bg-background px-6 py-4 text-xs uppercase tracking-[0.28em] text-muted-foreground", children: "Dream Big. Celebrate Bold." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border py-24 md:py-32 bg-background", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4", children: [{
      title: "Innovative Event Concepts",
      description: "Creative direction and unforgettable storytelling for every experience."
    }, {
      title: "Premium Decor & Styling",
      description: "Luxury finishes and intentional details tailored to your vision."
    }, {
      title: "Professional Event Management",
      description: "A dedicated team executing every moment with precision."
    }, {
      title: "Personalized Planning & Execution",
      description: "An event crafted around your story, your identity, your moment."
    }].map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/30", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Our Promise" }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-ink", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: item.description })
    ] }, item.title)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-bone py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid gap-px bg-border md:grid-cols-3", children: [{
      icon: Sparkles,
      k: "01",
      t: "Crafting Extraordinary Celebrations",
      d: "Every event is designed to feel effortless, elegant, and deeply memorable."
    }, {
      icon: Gem,
      k: "02",
      t: "Where Memories Meet Perfection",
      d: "From concept to execution, every detail is curated for a refined guest experience."
    }, {
      icon: Calendar,
      k: "03",
      t: "Luxury Events, Timeless Memories",
      d: "Our team blends strategy, design, and logistics to create flawless celebrations."
    }].map(({
      icon: Icon,
      k,
      t,
      d
    }) => /* @__PURE__ */ jsxs("div", { className: "group bg-background p-10 transition-colors hover:bg-ink hover:text-background md:p-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsx(Icon, { size: 22, className: "text-gold" }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-2xl text-muted-foreground group-hover:text-gold", children: k })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-10 font-display text-3xl md:text-4xl", children: t }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground group-hover:text-background/70", children: d })
    ] }, k)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-36", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-16 flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Selected Work", title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "A few ",
          /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "recent" }),
          " evenings."
        ] }) }),
        /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "link-underline text-[11px] font-medium uppercase tracking-[0.28em] text-ink", children: "View All →" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-12 md:gap-8", children: [
        /* @__PURE__ */ jsxs("figure", { className: "group relative md:col-span-7 overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: gardenImg, alt: "Garden ceremony at golden hour", loading: "lazy", className: "h-[60vh] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }),
          /* @__PURE__ */ jsxs("figcaption", { className: "absolute bottom-6 left-6 right-6 flex items-end justify-between text-background", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "eyebrow text-background/70", children: "Ceremony" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-2xl", children: "The Olive Garden Vows" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-[0.24em]", children: "'25" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("figure", { className: "group relative md:col-span-5 overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: detailImg, alt: "Table setting with white rose", loading: "lazy", className: "h-[60vh] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }),
          /* @__PURE__ */ jsxs("figcaption", { className: "absolute bottom-6 left-6 right-6 text-ink", children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Tablescape" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-2xl", children: "A Quiet Place Setting" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("figure", { className: "group relative md:col-span-5 overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: corporateImg, alt: "Corporate gala", loading: "lazy", className: "h-[55vh] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }),
          /* @__PURE__ */ jsxs("figcaption", { className: "absolute bottom-6 left-6 right-6 text-background", children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow text-background/70", children: "Gala" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-2xl", children: "Annual Foundation Dinner" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("figure", { className: "group relative md:col-span-7 overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: celebrationImg, alt: "Birthday celebration", loading: "lazy", className: "h-[55vh] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }),
          /* @__PURE__ */ jsxs("figcaption", { className: "absolute bottom-6 left-6 right-6 text-ink", children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Celebration" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-2xl", children: "A Sixtieth, in Cream & Gold" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-ink py-28 text-background md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center md:px-10", children: [
      /* @__PURE__ */ jsx("span", { className: "gold-line" }),
      /* @__PURE__ */ jsxs("blockquote", { className: "mt-8 font-display text-3xl leading-[1.25] md:text-5xl", children: [
        '"They built the night around a single conversation we had over coffee.',
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: " Everything " }),
        'felt like ours."'
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 text-[11px] uppercase tracking-[0.32em] text-background/60", children: "Manasa — Wedding, Bengaluru" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center md:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 inline-flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "gold-line" }),
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Begin" }),
        /* @__PURE__ */ jsx("span", { className: "gold-line" })
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl leading-[1.05] text-ink md:text-7xl", children: [
        "Tell us about the",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "evening" }),
        " you've imagined."
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-12 inline-flex items-center gap-3 border border-ink px-10 py-5 text-[11px] font-medium uppercase tracking-[0.28em] text-ink transition-all hover:bg-ink hover:text-background", children: [
        "Plan an Event ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
