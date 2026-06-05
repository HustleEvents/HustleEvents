import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import gardenImg from "@/assets/event-garden.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import celebrationImg from "@/assets/event-celebration.jpg";
import concertImg from "@/assets/event-concert.jpg";
import detailImg from "@/assets/event-detail.jpg";

const services = [
  {
    k: "01",
    t: "Weddings",
    d: "From the first meeting to the last guest, weddings designed around a single feeling.",
    img: gardenImg,
    items: ["Concept & design", "Venue & vendor curation", "On-day direction"],
  },
  {
    k: "02",
    t: "Private Celebrations",
    d: "Birthday parties, anniversaries, intimate dinners — for evenings that should feel personal, not staged.",
    img: celebrationImg,
    items: ["Mood & styling", "Florals & tabletop", "Guest experience"],
  },
  {
    k: "03",
    t: "Corporate Events",
    d: "Crafting Corporate Experiences That Inspire, Engage and Leave a Lasting Impression.",
    img: corporateImg,
    items: ["Concept development", "Production design", "Run-of-show direction"],
  },
  // {
  //   k: "04",
  //   t: "Productions",
  //   d: "Stages, showcases and live evenings — full production, technical and creative under one roof.",
  //   img: concertImg,
  //   items: ["Stage & lighting", "AV & technical", "Artist liaison"],
  // },
  // {
  //   k: "04",
  //   t: "Bespoke Commissions",
  //   d: "If it doesn't fit a category, it usually means it's the most interesting brief on the desk. Bring it.",
  //   img: detailImg,
  //   items: ["Open scope", "Quiet collaborators", "By referral"],
  // },
];

const testimonials = [
  {
    quote: "Hustle Events made our wedding day absolutely perfect. From decoration to coordination, every detail was handled professionally. Highly recommended!",
    author: "Priya & Karthik",
  },
  {
    quote: "The team delivered exactly what they promised. Beautiful décor, on-time execution, and excellent service throughout the event.",
    author: "Rohit Kumar",
  },
  {
    quote: "We booked Hustle Events for our engagement ceremony and were amazed by their creativity. Guests are still talking about the decoration!",
    author: "Aishwarya S.",
  },
  {
    quote: "Professional, friendly, and budget-friendly. Hustle Events transformed our venue into something magical.",
    author: "Manjunath R.",
  },
  {
    quote: "Their live fridge magnet booth was a huge attraction at our event. Guests loved taking home personalized magnets as souvenirs.",
    author: "Deepak & Family",
  },
  {
    quote: "Excellent planning and flawless execution. Naveen and his team took care of everything, allowing us to enjoy our special day stress-free.",
    author: "Sneha & Arjun",
  },
  {
    quote: "The attention to detail and customer support were outstanding. One of the best event management teams we’ve worked with.",
    author: "Corporate Client, Bangalore",
  },
  {
    quote: "From the first meeting to the final event, Hustle Events exceeded our expectations. Truly memorable experience!",
    author: "Nithin Gowda",
  },
];

const videoReviews = [
  {
    label: "Instagram Reel review - Hustle Events",
    href: "https://www.instagram.com/reel/DY16xuvpxhg/?igsh=MXNoN3AycHk5aHdkMQ==",
  },
  {
    label: "Instagram Reel review - Hustle Events",
    href: "https://www.instagram.com/reel/DJHH-0npcfB/?igsh=MXJyNXhiMDM5YXJoaA==",
  },
  {
    label: "Instagram Reel review - Hustle Events",
    href: "https://www.instagram.com/reel/DZFdW4xpS0j/?igsh=eWJ3cWJ1dGZ0ZWgw",
  },
];

const premiumReview = {
  quote: "At Hustle Events, they don’t just organize events—they create memories. Their creativity, dedication, and professionalism made our celebration unforgettable. We couldn’t have asked for a better team.",
  author: "Happy Client ⭐⭐⭐⭐⭐",
};

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={<>Creative Minds.<br /> <span className="italic text-gold">Flawless Design.</span> <br />Epic Celebrations.</>}
        subtitle="From Event planning and luxury décor to corporate conferences, private celebrations, engagements, and brand experiences — every event is designed with creativity, precision, and passion."
      />

      <section className="border-t border-border bg-bone py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* <SectionHeading/>
            eyebrow="Our Services"
            // title={<>Event Planning & Management. Luxury Event Decor. Corporate Events & Conferences.</>}
            // subtitle="We also specialize in birthday and private celebrations, engagements and receptions, brand launches, and social gatherings."
          /> */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Event Planning & Management",
              "Weddings & Event Decor",
              "Corporate Events",
              "Birthday Parties & Private Celebrations",
              "Engagements & Receptions",
              "Theme Based Events",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-border bg-background p-6 shadow-sm transition hover:-translate-y-1">
                <p className="text-xl font-bold uppercase tracking-[0.24em] text-muted-foreground">What We Do</p>
                <p className="mt-4 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="space-y-px bg-border">
            {services.map((s, i) => (
              <article
                key={s.k}
                className={`group grid items-stretch gap-0 bg-background md:grid-cols-12 ${i % 2 ? "md:[&>figure]:order-2" : ""}`}
              >
                <figure className="relative overflow-hidden md:col-span-5">
                  <img
                    src={s.img}
                    alt={s.t}
                    loading="lazy"
                    className="h-[40vh] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 md:h-full md:min-h-[440px]"
                  />
                </figure>
                <div className="flex flex-col justify-center px-6 py-12 md:col-span-7 md:px-16 md:py-20">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-3xl text-gold">{s.k}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">{s.t}</h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">{s.d}</p>
                  <ul className="mt-8 space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm text-ink/80">
                        <span className="h-px w-6 bg-gold" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            eyebrow="Testimonials"
            title={<>Trusted by couples, families, and people across Bangalore.</>}
            subtitle="Real feedback from clients who asked us to handle the details, design the celebration, and let them enjoy the moment."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(360px,1fr)_minmax(420px,420px)] lg:items-start">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-bone p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-ink">Video Reviews</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Real event moments and client reaction videos, surfaced first so visitors see social proof immediately.
                </p>
                <div className="mt-6 space-y-4">
                  {videoReviews.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-3xl border border-border bg-background px-5 py-4 text-sm font-medium text-ink transition hover:border-gold hover:bg-gold/5"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <article className="rounded-[2rem] border border-border bg-ink p-8 text-background shadow-sm">
                <p className="text-lg leading-8">
                  “{premiumReview.quote}”
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">{premiumReview.author}</p>
              </article>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {testimonials.map((item) => (
                <article key={item.author} className="rounded-[2rem] border border-border bg-bone p-7 shadow-sm">
                  <div className="flex items-center gap-1 text-gold text-sm">
                    {"★★★★★"}
                  </div>
                  <p className="mt-4 text-base leading-8 text-ink">“{item.quote}”</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">{item.author}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bone py-28 md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center md:px-10">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="gold-line" /><span className="eyebrow">Begin</span><span className="gold-line" />
          </div>
          <h2 className="font-display text-4xl text-ink md:text-6xl">
            One conversation is usually <span className="italic text-gold">enough</span>.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-ink px-10 py-5 text-[11px] font-medium uppercase tracking-[0.28em] text-background transition-all hover:bg-gold hover:text-ink"
          >
            Send us a note <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
