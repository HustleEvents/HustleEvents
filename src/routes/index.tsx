import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Gem, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const heroImg = new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.20 PM.jpeg", import.meta.url).href;
const gardenImg = new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.09 PM.jpeg", import.meta.url).href;
const detailImg = new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.11 PM.jpeg", import.meta.url).href;
const corporateImg = new URL("../assets/event-corporate.jpg", import.meta.url).href;
const celebrationImg = new URL("../assets/hustle/WhatsApp Image 2026-06-06 at 7.13.13 PM.jpeg", import.meta.url).href;

export default function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Elegant candlelit reception at twilight"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28">
          <div className="mb-6 inline-flex items-center gap-3 animate-fade-up">
            <span className="gold-line" />
            <span className="eyebrow text-ink/70">HUSTLE EVENTS</span>
          </div>
          <h1 className="max-w-4xl font-display text-4xl leading-[0.98] text-ink md:text-6xl lg:text-8xl animate-fade-up delay-100">
            Beyond Events.
            <br />
            <span className="italic text-[#FAEDCD]">Beyond Expectations.</span>
            <br />
            Delivering Excellence.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80 animate-fade-up delay-200">
            At Hustle Events, we don’t just plan occasions—we craft experiences that inspire, connect, and leave lasting impressions. From elegant weddings and grand celebrations to corporate gatherings, every event is designed with creativity, precision, and passion.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5 animate-fade-up delay-300">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-background transition-all hover:bg-gold hover:text-ink"
            >
              Begin the Conversation
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              className="link-underline text-[11px] font-medium uppercase tracking-[0.28em] text-ink"
            >
              View Recent Work
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t border-border py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5 animate-fade-up">
            <SectionHeading
              eyebrow="Beyond Events. Beyond Expectations."
              title={<>We craft experiences that inspire, connect, and leave lasting impressions.</>}
              subtitle="From elegant weddings and grand celebrations to corporate gatherings, every event is designed with creativity, precision, and passion."
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 animate-fade-up delay-100">
            <p className="text-lg leading-relaxed text-ink/85">
              At Hustle Events, we bring a personal touch to every event. With a passion for creativity and flawless execution, we design memorable experiences—from intimate weddings and grand celebrations to corporate events and live souvenir activations—ensuring every detail is expertly managed.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Every event is unique. Every client is valued. Every detail matters. We work closely with you to transform your vision into an unforgettable celebration that reflects your style, personality, and purpose.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-background transition-all hover:bg-gold hover:text-ink"
              >
                Let’s Create Together
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-6 py-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Dream Big. Celebrate Bold.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="border-t border-border py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Innovative Event Concepts", description: "Creative direction and unforgettable storytelling for every experience." },
              { title: "Premium Decor & Styling", description: "Luxury finishes and intentional details tailored to your vision." },
              { title: "Professional Event Management", description: "A dedicated team executing every moment with precision." },
              { title: "Personalized Planning & Execution", description: "An event crafted around your story, your identity, your moment." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/30">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Promise</p>
                <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-border bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-px bg-border md:grid-cols-3">
            {[
              { icon: Sparkles, k: "01", t: "Crafting Extraordinary Celebrations", d: "Every event is designed to feel effortless, elegant, and deeply memorable." },
              { icon: Gem, k: "02", t: "Where Memories Meet Perfection", d: "From concept to execution, every detail is curated for a refined guest experience." },
              { icon: Calendar, k: "03", t: "Luxury Events, Timeless Memories", d: "Our team blends strategy, design, and logistics to create flawless celebrations." },
            ].map(({ icon: Icon, k, t, d }) => (
              <div key={k} className="group bg-background p-10 transition-colors hover:bg-ink hover:text-background md:p-14">
                <div className="flex items-start justify-between">
                  <Icon size={22} className="text-gold" />
                  <span className="font-display text-2xl text-muted-foreground group-hover:text-gold">{k}</span>
                </div>
                <h3 className="mt-10 font-display text-3xl md:text-4xl">{t}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground group-hover:text-background/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected Work"
              title={<>A few <span className="italic text-gold">recent</span> evenings.</>}
            />
            <Link to="/gallery" className="link-underline text-[11px] font-medium uppercase tracking-[0.28em] text-ink">
              View All →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <figure className="group relative md:col-span-7 overflow-hidden">
              <img src={gardenImg} alt="Garden ceremony at golden hour" loading="lazy" className="h-[60vh] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-background">
                <div>
                  <p className="eyebrow text-background/70">Naming Ceremony</p>
                  <p className="mt-1 font-display text-2xl">Bengaluru</p>
                </div>
                <span className="text-[11px] uppercase tracking-[0.24em]">'25</span>
              </figcaption>
            </figure>
            <figure className="group relative md:col-span-5 overflow-hidden">
              <img src={detailImg} alt="Table setting with white rose" loading="lazy" className="h-[60vh] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <figcaption className="absolute bottom-6 left-6 right-6 text-ink">
                <p className="eyebrow">Tablescape</p>
                <p className="mt-1 font-display text-2xl">A Quiet Place Setting</p>
              </figcaption>
            </figure>
            {/* <figure className="group relative md:col-span-5 overflow-hidden">
              <img src={corporateImg} alt="Corporate gala" loading="lazy" className="h-[55vh] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <figcaption className="absolute bottom-6 left-6 right-6 text-background">
                <p className="eyebrow text-background/70">Gala</p>
                <p className="mt-1 font-display text-2xl">Annual Foundation Dinner</p>
              </figcaption>
            </figure> */}
            <figure className="group relative md:col-span-7 overflow-hidden">
              <img src={celebrationImg} alt="Birthday celebration" loading="lazy" className="h-[55vh] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <figcaption className="absolute bottom-6 left-6 right-6 text-ink">
                <p className="eyebrow"></p>
                <p className="mt-1 font-display text-2xl">1st Birthday Celebration</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-y border-border bg-ink py-28 text-background md:py-40">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <span className="gold-line" />
          <blockquote className="mt-8 font-display text-3xl leading-[1.25] md:text-5xl">
            "They built the night around a single conversation we had over coffee.
            <span className="text-gold"> Everything </span>
            felt like ours."
          </blockquote>
          <p className="mt-10 text-[11px] uppercase tracking-[0.32em] text-background/60">
            Manasa — Wedding, Bengaluru
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="gold-line" /><span className="eyebrow">Begin</span><span className="gold-line" />
          </div>
          <h2 className="font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Tell us about the
            <br />
            <span className="italic text-gold">evening</span> you've imagined.
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 border border-ink px-10 py-5 text-[11px] font-medium uppercase tracking-[0.28em] text-ink transition-all hover:bg-ink hover:text-background"
          >
            Plan an Event <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
