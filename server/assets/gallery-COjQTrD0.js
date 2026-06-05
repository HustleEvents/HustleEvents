import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { P as PageHero } from "./PageHero-C_1y5o1k.js";
import { h as heroImg } from "./router-DIyD3PGG.js";
import { g as gardenImg, c as celebrationImg, a as corporateImg } from "./event-celebration-orExBWXq.js";
import { d as detailImg } from "./event-detail-CQvnD1CQ.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "lucide-react";
const concert = "/assets/event-concert-dE5NEomO.jpg";
const items = [{
  src: heroImg,
  t: "Candlelit Reception",
  c: "Wedding · '25",
  span: "md:col-span-8 md:row-span-2",
  h: "h-[80vh]"
}, {
  src: detailImg,
  t: "A Single White Rose",
  c: "Tablescape · '25",
  span: "md:col-span-4",
  h: "h-[39vh]"
}, {
  src: gardenImg,
  t: "Olive Garden Vows",
  c: "Ceremony · '24",
  span: "md:col-span-4",
  h: "h-[39vh]"
}, {
  src: celebrationImg,
  t: "Cream & Gold",
  c: "60th · '25",
  span: "md:col-span-5",
  h: "h-[55vh]"
}, {
  src: corporateImg,
  t: "Foundation Dinner",
  c: "Gala · '24",
  span: "md:col-span-7",
  h: "h-[55vh]"
}, {
  src: concert,
  t: "House of Voices",
  c: "Production · '24",
  span: "md:col-span-12",
  h: "h-[80vh]"
}];
function GalleryPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "The Archive", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Bold Concepts.",
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsx("span", { className: "italic text-gold", children: "Hidden Details" }),
      ".",
      /* @__PURE__ */ jsx("br", {}),
      "Masterful Moments."
    ] }), subtitle: "A small selection from recent years. Each photograph is a real evening produced." }),
    /* @__PURE__ */ jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6", children: items.map((it, i) => /* @__PURE__ */ jsxs("figure", { className: `group relative overflow-hidden ${it.span}`, children: [
      /* @__PURE__ */ jsx("img", { src: it.src, alt: it.t, loading: "lazy", className: `w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105 ${it.h}` }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
      /* @__PURE__ */ jsxs("figcaption", { className: "absolute bottom-0 left-0 right-0 translate-y-2 p-6 text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-background/70", children: it.c }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-2xl", children: it.t })
      ] })
    ] }, i)) }) }) })
  ] });
}
export {
  GalleryPage as component
};
