import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Cases", href: "#cases" },
];

function scrollToHash(href) {
  if (!href.startsWith("#")) return;
  const el = document.querySelector(href);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ctaHref = useMemo(() => "#cta", []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        className={
          "border-b transition " +
          (scrolled
            ? "bg-white/82 backdrop-blur-2xl border-white/70 shadow-[0_18px_40px_rgba(7,27,46,0.08)]"
            : "bg-white/55 backdrop-blur-xl border-transparent")
        }
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.2, 0.9, 0.2, 1] }}
      >
        <div className="container-pad">
          <div className="flex items-center justify-between py-3">
            <a href="#" onClick={(e) => (e.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" }))}>
              <div className="flex items-center gap-3">
                <img
                  src="/brand/logo.svg"
                  alt="SAMARTH ASSOCIATE"
                  className="h-8 w-auto sm:h-9"
                  draggable={false}
                />
                <div className="hidden leading-tight sm:block">
                  <div className="font-heading text-sm font-semibold tracking-[-0.01em] text-brand-navy">
                    SAMARTH ASSOCIATE
                  </div>
                  <div className="text-[11px] font-semibold tracking-[0.22em] text-brand-royal/60">
                    REDEVELOPMENT ADVISORY
                  </div>
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
              {navItems.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHash(it.href);
                  }}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-navy/75 transition hover:bg-white/70 hover:text-brand-navy"
                >
                  {it.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={ctaHref}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(ctaHref);
                }}
                className="hidden items-center gap-2 md:inline-flex cta-primary"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-white/70 p-2.5 text-brand-navy shadow-sm transition hover:bg-white md:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {open ? (
          <div className="md:hidden">
            <div className="container-pad pb-4">
              <div className="surface glass p-3">
                <div className="grid gap-1">
                  {navItems.map((it) => (
                    <a
                      key={it.href}
                      href={it.href}
                      className="rounded-xl px-3 py-3 text-sm font-semibold text-brand-navy/85 transition hover:bg-white"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        scrollToHash(it.href);
                      }}
                    >
                      {it.label}
                    </a>
                  ))}
                  <a
                    href={ctaHref}
                    className="mt-1 inline-flex items-center justify-center gap-2 cta-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      scrollToHash(ctaHref);
                    }}
                  >
                    Book Consultation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </motion.div>
    </header>
  );
}
