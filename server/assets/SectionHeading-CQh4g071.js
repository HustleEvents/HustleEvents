import { jsxs, jsx } from "react/jsx-runtime";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left"
}) {
  return /* @__PURE__ */ jsxs("div", { className: align === "center" ? "text-center" : "", children: [
    eyebrow && /* @__PURE__ */ jsxs("div", { className: `mb-5 inline-flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`, children: [
      /* @__PURE__ */ jsx("span", { className: "gold-line" }),
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: eyebrow })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl", children: title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: `mt-6 max-w-xl text-base leading-relaxed text-muted-foreground ${align === "center" ? "mx-auto" : ""}`, children: subtitle })
  ] });
}
export {
  SectionHeading as S
};
