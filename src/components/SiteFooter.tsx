import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import HustleLogo from "../assets/Hustle_Logo.PNG?url";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={HustleLogo} alt="HustleEvents logo" width={48} height={48} className="h-25 w-25 rounded-full object-contain" />
              <div className="text-left">
                <div className="font-display text-2xl text-ink">
                  Hustle<span className="text-gold">Events</span>
                </div>
                <div className="text-sm tracking-[0.24em] text-muted-foreground lowercase">by Naveen</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Whether you’re planning a wedding, a corporate event, or a special celebration, our team is ready to bring your vision to life.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              <span className="gold-line" />
              Since 2020
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3 text-sm text-ink/80">
              <li><Link to="/" className="link-underline">Home</Link></li>
              <li><Link to="/about" className="link-underline">About</Link></li>
              <li><Link to="/services" className="link-underline">Services</Link></li>
              <li><Link to="/gallery" className="link-underline">Gallery</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Studio</p>
            <ul className="space-y-3 text-sm text-ink/80">
              <li className="flex items-center gap-3"><Mail size={14} className="text-gold" /> <a href="mailto:hustleevents1@gmail.com" className="link-underline">hustleevents1@gmail.com</a></li>
              <li className="flex items-center gap-3"><Phone size={14} className="text-gold" /> <a href="https://wa.me/917349700724" target="_blank" rel="noreferrer" className="link-underline">+91 73497 00724</a></li>
              <li className="flex items-center gap-3"><Instagram size={14} className="text-gold" /> <a href="https://www.instagram.com/_hustle_events_/?igsh=MWVqbTNiZzVtNjMxMg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="link-underline">@_hustle_events_</a></li>
              <li className="flex items-center gap-3"><Facebook size={14} className="text-gold" /> <a href="https://www.facebook.com/share/1DDs87esk5/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="link-underline">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} HustleEvents. All rights reserved.</span>
          <span>Crafted with intention.</span>
        </div>
      </div>
    </footer>
  );
}
