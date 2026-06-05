import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Menu, Mail, Phone, Instagram, Facebook } from "lucide-react";
const appCss = "/assets/styles-BDudpP3d.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const HustleLogo = "/assets/Hustle_Logo-BkGf5rlv.PNG";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "group flex items-center gap-3", onClick: () => setOpen(false), children: [
            /* @__PURE__ */ jsx("img", { src: HustleLogo, alt: "HustleEvents logo", width: 180, height: 180, className: "h-25 w-25 rounded-full object-contain" }),
            /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxs("div", { className: "font-display text-xl tracking-wide text-ink", children: [
                "Hustle",
                /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Events" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[0.24em] text-muted-foreground lowercase", children: "by Naveen" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-10 md:flex", children: nav.map((n) => /* @__PURE__ */ jsx(
            Link,
            {
              to: n.to,
              className: "link-underline text-[12px] font-medium uppercase tracking-[0.22em] text-ink/80 hover:text-ink",
              activeProps: { className: "text-ink" },
              activeOptions: { exact: n.to === "/" },
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "hidden md:inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-ink transition-all hover:bg-ink hover:text-background",
              children: "Plan an Event"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "md:hidden text-ink",
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-border bg-background animate-fade-in", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col px-6 py-6", children: [
          nav.map((n) => /* @__PURE__ */ jsx(
            Link,
            {
              to: n.to,
              onClick: () => setOpen(false),
              className: "py-3 text-[12px] font-medium uppercase tracking-[0.24em] text-ink",
              activeProps: { className: "text-gold" },
              activeOptions: { exact: n.to === "/" },
              children: n.label
            },
            n.to
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              onClick: () => setOpen(false),
              className: "mt-4 inline-flex items-center justify-center border border-ink px-5 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-ink",
              children: "Plan an Event"
            }
          )
        ] }) })
      ]
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-bone", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-14 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: HustleLogo, alt: "HustleEvents logo", width: 48, height: 48, className: "h-25 w-25 rounded-full object-contain" }),
          /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxs("div", { className: "font-display text-2xl text-ink", children: [
              "Hustle",
              /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Events" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm tracking-[0.24em] text-muted-foreground lowercase", children: "by Naveen" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground", children: "Whether you’re planning a wedding, a corporate event, or a special celebration, our team is ready to bring your vision to life." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "gold-line" }),
          "Since 2020"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow mb-5", children: "Navigate" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-ink/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "link-underline", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "link-underline", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "link-underline", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "link-underline", children: "Gallery" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "link-underline", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow mb-5", children: "Studio" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-ink/80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { size: 14, className: "text-gold" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: "mailto:hustleevents1@gmail.com", className: "link-underline", children: "hustleevents1@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { size: 14, className: "text-gold" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/917349700724", target: "_blank", rel: "noreferrer", className: "link-underline", children: "+91 73497 00724" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Instagram, { size: 14, className: "text-gold" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/_hustle_events_/?igsh=MWVqbTNiZzVtNjMxMg%3D%3D&utm_source=qr", target: "_blank", rel: "noreferrer", className: "link-underline", children: "@_hustle_events_" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Facebook, { size: 14, className: "text-gold" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/share/1DDs87esk5/?mibextid=wwXIfr", target: "_blank", rel: "noreferrer", className: "link-underline", children: "Facebook" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " HustleEvents. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Crafted with intention." })
    ] })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HustleEvents — Boutique Event Design & Production" },
      { name: "description", content: "HustleEvents is a boutique event house crafting weddings, celebrations and productions with quiet luxury and considered detail." },
      { name: "author", content: "HustleEvents" },
      { property: "og:title", content: "HustleEvents — Boutique Event Design & Production" },
      { property: "og:description", content: "Weddings, celebrations and productions designed with quiet luxury and considered detail." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
const BASE_URL = "";
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/gallery", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" }
        ];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./services-Bmbifd2Z.js");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — HustleEvents"
    }, {
      name: "description",
      content: "Event planning, luxury event decor, corporate conferences, birthday celebrations, engagements, and brand launches — crafted with premium design and personalized execution."
    }, {
      property: "og:title",
      content: "Services — HustleEvents"
    }, {
      property: "og:description",
      content: "Hustle Events delivers premium weddings, corporate events, celebrations, engagements, and brand launches with thoughtful design and expert production."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const heroImg = "/assets/hero-wedding-Dq6tn04-.jpg";
const $$splitComponentImporter$3 = () => import("./gallery-COjQTrD0.js");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — HustleEvents"
    }, {
      name: "description",
      content: "Selected evenings, ceremonies, productions and private moments from the HustleEvents archive."
    }, {
      property: "og:title",
      content: "Gallery HustleEvents"
    }, {
      property: "og:description",
      content: "Selected evenings from the HustleEvents archive."
    }, {
      property: "og:image",
      content: heroImg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-BxgP7t5j.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — HustleEvents"
    }, {
      name: "description",
      content: "Tell us about the evening you've imagined. We accept up to twenty events a month — start the conversation early."
    }, {
      property: "og:title",
      content: "Contact — HustleEvents"
    }, {
      property: "og:description",
      content: "Tell us about the evening you've imagined."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about---aq1U_9.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — HustleEvents"
    }, {
      name: "description",
      content: "Hustle Events is a full-service event company dedicated to creating unforgettable experiences with innovative planning, elegant design, and flawless execution."
    }, {
      property: "og:title",
      content: "About — HustleEvents"
    }, {
      property: "og:description",
      content: "Hustle Events crafts unforgettable weddings, celebrations, corporate events and brand launches with precision and passion."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-g2Q_ACfK.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "HustleEvents — Creating Experiences, Preserving Memories"
    }, {
      name: "description",
      content: "Hustle Events is a full-service event company creating unforgettable weddings, celebrations, corporate events and branded experiences with elegant design and flawless execution."
    }, {
      property: "og:title",
      content: "HustleEvents — Creating Experiences, Preserving Memories"
    }, {
      property: "og:description",
      content: "Hustle Events creates unforgettable weddings, celebrations, corporate events and branded experiences with creative planning and flawless execution."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  heroImg as h,
  router as r
};
