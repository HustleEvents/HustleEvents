import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import HustleLogo from "../assets/Hustle_Logo.PNG?url";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 md:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={HustleLogo} alt="HustleEvents logo" width={180} height={280} className="h-28 w-22 rounded-full object-contain" />
          <div className="text-left">
            <div className="font-display text-lg tracking-wide text-ink">
              Hustle<span className="text-gold">Events</span>
            </div>
            <div className="text-[10px] tracking-[0.24em] text-muted-foreground lowercase pl-16">by Naveen</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `link-underline text-[12px] font-medium uppercase tracking-[0.22em] text-ink/80 hover:text-ink ${
                  isActive ? "text-ink decoration-gold underline underline-offset-4" : ""
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-ink transition-all hover:bg-ink hover:text-background"
        >
          Plan an Event
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="flex flex-col px-6 py-6">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-[12px] font-medium uppercase tracking-[0.24em] ${
                    isActive ? "text-gold underline decoration-gold underline-offset-4" : "text-ink"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center border border-ink px-5 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-ink"
            >
              Plan an Event
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
