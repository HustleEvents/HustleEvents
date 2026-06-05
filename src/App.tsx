import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import AboutPage from "./routes/about";
import ContactPage from "./routes/contact";
import GalleryPage from "./routes/gallery";
import HomePage from "./routes/index";
import ServicesPage from "./routes/services";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center text-ink md:px-10">
      <h1 className="text-5xl font-display">404</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        The page you’re looking for cannot be found.
      </p>
      <a href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.24em] text-background transition hover:bg-gold hover:text-ink">
        Return home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <SiteHeader />
      <ScrollToTop />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
