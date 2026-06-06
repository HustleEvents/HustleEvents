import { useState } from "react";
import { PageHero } from "@/components/PageHero";

const previewCount = 7;

const items = [
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.12.33 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.12.33 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.06 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.06 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.06 PM (2).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.06 PM (2)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.06 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.06 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.07 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.07 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.07 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.07 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.08 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.08 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.08 PM (2).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.08 PM (2)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.08 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.08 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.09 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.09 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.09 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.09 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.10 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.10 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.11 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.11 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.11 PM (2).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.11 PM (2)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.11 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.11 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.12 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.12 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.12 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.12 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.13 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.13 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.13 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.13 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.14 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.14 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.15 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.15 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.15 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.15 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.16 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.16 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.16 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.16 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.17 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.17 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.17 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.17 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.18 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.18 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.18 PM (2).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.18 PM (2)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.18 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.18 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.19 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.19 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.19 PM (2).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.19 PM (2)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.19 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.19 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.20 PM (1).jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.20 PM (1)",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.20 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.20 PM",
    caption: "Gallery · HustleEvents",
  },
  {
    src: new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.21 PM.jpeg", import.meta.url).href,
    title: "2026-06-06 at 7.13.21 PM",
    caption: "Gallery · HustleEvents",
  },
];

function imageGridClasses(index: number) {
  if (index === 0) return "md:col-span-8 md:row-span-2 h-[80vh]";
  if (index === 1) return "md:col-span-4 h-[39vh]";
  if (index === 2) return "md:col-span-4 h-[39vh]";
  if (index === 3) return "md:col-span-5 h-[55vh]";
  if (index === 4) return "md:col-span-7 h-[55vh]";
  if (index === 5) return "md:col-span-4 h-[45vh]";
  if (index === 6) return "md:col-span-4 h-[45vh]";
  return "md:col-span-4 h-[45vh]";
}

function GalleryPage() {
  const images = items;
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? images : images.slice(0, previewCount);

  return (
    <>
      <PageHero
        eyebrow="The Archive"
        title={<>Bold Concepts.<br /> <span className="italic text-gold">Hidden Details</span>.<br />Masterful Moments.</>}
        subtitle="A fresh gallery of recent work from Hustle. View the curated preview and open the full archive with a single tap."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
            {displayedImages.map((it, i) => (
              <figure key={it.src} className={`group relative overflow-hidden ${imageGridClasses(i)}`}>
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-6 text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="eyebrow text-background/70">{it.caption}</p>
                  <p className="mt-1 font-display text-2xl">{it.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {images.length > previewCount && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-full border border-ink px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-ink transition hover:bg-ink hover:text-background"
              >
                {showAll ? "Show less" : `View more (${images.length - previewCount})`}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
