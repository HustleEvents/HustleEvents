import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import hero from "@/assets/hero-wedding.jpg";
import garden from "@/assets/event-garden.jpg";
import corp from "@/assets/event-corporate.jpg";
import celeb from "@/assets/event-celebration.jpg";
import concert from "@/assets/event-concert.jpg";
import detail from "@/assets/event-detail.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — HustleEvents" },
      { name: "description", content: "Selected evenings, ceremonies, productions and private moments from the HustleEvents archive." },
      { property: "og:title", content: "Gallery HustleEvents" },
      { property: "og:description", content: "Selected evenings from the HustleEvents archive." },
      { property: "og:image", content: hero },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: hero, t: "Candlelit Reception", c: "Wedding · '25", span: "md:col-span-8 md:row-span-2", h: "h-[80vh]" },
  { src: detail, t: "A Single White Rose", c: "Tablescape · '25", span: "md:col-span-4", h: "h-[39vh]" },
  { src: garden, t: "Olive Garden Vows", c: "Ceremony · '24", span: "md:col-span-4", h: "h-[39vh]" },
  { src: celeb, t: "Cream & Gold", c: "60th · '25", span: "md:col-span-5", h: "h-[55vh]" },
  { src: corp, t: "Foundation Dinner", c: "Gala · '24", span: "md:col-span-7", h: "h-[55vh]" },
  { src: concert, t: "House of Voices", c: "Production · '24", span: "md:col-span-12", h: "h-[80vh]" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Archive"
        title={<>Bold Concepts.<br/> <span className="italic text-gold">Hidden Details</span>.<br/>Masterful Moments.</>}
        subtitle="A small selection from recent years. Each photograph is a real evening produced."
      />

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
            {items.map((it, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden ${it.span}`}
              >
                <img
                  src={it.src}
                  alt={it.t}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105 ${it.h}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-6 text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="eyebrow text-background/70">{it.c}</p>
                  <p className="mt-1 font-display text-2xl">{it.t}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
