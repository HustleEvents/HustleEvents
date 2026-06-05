import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <PageHero 
        eyebrow="About Hustle Events"
        title={<>Creating Experiences. <span className="italic text-gold">Preserving Memories.</span> Delivering Excellence.</>}
        subtitle="We bring a personal touch to every event, transforming your vision into a celebration that reflects your style, personality, and purpose."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <figure className="relative overflow-hidden">
            <img src={teamImg} alt="Team arranging florals in studio" width={1920} height={1080} className="h-[60vh] w-full object-cover md:h-[75vh]" />
          </figure>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <SectionHeading eyebrow="Why Hustle Events?" title={<>Every event is unique. Every moment matters.</>} subtitle="We combine creativity, attention to detail, and professional event management to deliver seamless experiences from concept to completion." />
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-base leading-relaxed text-ink/80">
            <p className="text-xl text-ink">
              At Hustle Events, we bring a personal touch to every event. With passion, precision and a commitment to excellence, we design memorable experiences for weddings, birthdays, corporate Events, and private celebrations.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Innovative Event Concepts",
                "Premium Decor & Styling",
                "Professional Event Management",
                "Personalized Planning & Execution",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Why Choose Us</p>
                  <p className="mt-4 font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              Our promise is simple: every event is unique, every client is valued, and every detail matters. We work closely with you to create an unforgettable celebration that feels distinctly yours.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-px bg-border md:grid-cols-4">
            {[
              ["999+", "Events Planned"],
              ["4.5", "Ratings/5"],
              ["20/mo", "Maximum we accept"],
              ["5+ yrs", "Quietly at it"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-10 md:p-12">
                <p className="font-display text-5xl text-ink md:text-6xl">{k}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading eyebrow="Process" title={<>How an event <span className="italic text-gold">is Executed</span>.</>} />
          <div className="mt-16 grid gap-12 md:grid-cols-4">
            {[
              ["01", "Conversation", "We meet, walk through what you've imagined, what you haven't, and what you'd rather skip."],
              ["02", "Concept", "A single direction written, sketched, sourced that everything else hangs from."],
              ["03", "Craft", "Vendors briefed, samples reviewed, the room walked. Quietly, weeks ahead."],
              ["04", "Direction", "On the day, one producer in your ear and ten hands you'll never see."],
            ].map(([k, t, d]) => (
              <div key={k}>
                <p className="font-display text-3xl text-gold">{k}</p>
                <div className="mt-3 h-px w-full bg-border" />
                <h3 className="mt-5 font-display text-2xl text-ink">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ink py-28 text-background md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center md:px-10">
          <SectionHeading
            align="center"
            eyebrow="Let's begin"
            title={<span className="text-background">Have an evening in mind?</span>}
          />
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 border border-background px-10 py-5 text-[11px] font-medium uppercase tracking-[0.28em] text-background transition-all hover:bg-gold hover:text-ink hover:border-gold"
          >
            Start Here <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
