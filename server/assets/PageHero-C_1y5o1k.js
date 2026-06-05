import { jsx, jsxs } from "react/jsx-runtime";
function PageHero({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsx("section", { className: "relative pt-40 pb-20 md:pt-48 md:pb-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 inline-flex items-center gap-3 animate-fade-up", children: [
      /* @__PURE__ */ jsx("span", { className: "gold-line" }),
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: eyebrow })
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-5xl leading-[1.02] text-ink md:text-7xl lg:text-8xl animate-fade-up delay-100", children: title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-up delay-200", children: subtitle })
  ] }) });
}
export {
  PageHero as P
};
