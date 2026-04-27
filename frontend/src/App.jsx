import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import TrustBar from "@/components/TrustBar.jsx";
import Services from "@/components/Services.jsx";
import Footer from "@/components/Footer.jsx";

function useCursorGlow(enabled) {
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${x}px`);
        document.documentElement.style.setProperty("--cursor-y", `${y}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);
}

function Loader({ show }) {
  const reduceMotion = useReducedMotion();
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          aria-label="Loading"
          role="status"
        >
          <div className="relative flex flex-col items-center gap-4">
            <div className="relative surface glass-strong p-5 sm:p-6">
              <img
                src="/brand/logo.svg"
                alt="SAMARTH ASSOCIATE"
                className="h-10 w-auto sm:h-12"
                draggable={false}
              />
              {!reduceMotion ? (
                <motion.div
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
                  initial={{ opacity: 0.65 }}
                  animate={{ opacity: [0.25, 0.65, 0.25] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div
                    className="absolute -inset-x-10 inset-y-0 opacity-60"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.18) 38%, rgba(0,201,167,0.20) 55%, transparent 100%)",
                      transform: "translateX(-40%)",
                      animation: "sheen 1.2s ease-out infinite",
                    }}
                  />
                </motion.div>
              ) : null}
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-navy/70">
              <Sparkles className="h-4 w-4 text-brand-teal" aria-hidden="true" />
              Preparing a premium experience
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const [booting, setBooting] = useState(true);
  useCursorGlow(!reduceMotion);

  useEffect(() => {
    const t = window.setTimeout(() => setBooting(false), 750);
    return () => window.clearTimeout(t);
  }, []);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(
      "Hi SAMARTH ASSOCIATE, I want a redevelopment advisory consultation. Please share next steps.",
    );
    return `https://wa.me/?text=${text}`;
  }, []);

  return (
    <div className="min-h-screen text-brand-ink">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(520px 520px at var(--cursor-x) var(--cursor-y), rgba(0,201,167,0.12), transparent 62%), radial-gradient(620px 520px at calc(var(--cursor-x) + 260px) calc(var(--cursor-y) + 80px), rgba(15,76,129,0.10), transparent 62%)",
        }}
        aria-hidden="true"
      />

      <Loader show={booting} />

      <div className={booting ? "pointer-events-none select-none blur-[0.5px]" : ""}>
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Services />

          <section id="cta" className="py-16 sm:py-20">
            <div className="container-pad">
              <div className="surface glass-strong overflow-hidden">
                <div className="grid items-stretch gap-8 p-6 sm:p-10 lg:grid-cols-[1.35fr_0.65fr]">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-brand-royal/70">FINAL CTA</p>
                    <h2 className="mt-3 font-heading text-2xl font-semibold text-brand-navy sm:text-3xl">
                      Bring structure, trust, and momentum into your next move.
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm text-brand-ink/70 sm:text-base">
                      Whether you’re evaluating offers or aligning stakeholders, get a clear strategy that protects
                      value and reduces risk.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a className="cta-primary" href={whatsappHref} target="_blank" rel="noreferrer">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Book Strategy Call
                      </a>
                      <a className="cta-secondary" href="#services">
                        Explore Services
                      </a>
                    </div>
                    <div className="mt-5 text-xs text-brand-navy/60">
                      Response within 24 hours • Confidential conversation • Pune / Maharashtra expertise
                    </div>
                  </div>

                  <div className="card-3d relative overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-5">
                    <div
                      className="absolute inset-0 opacity-90"
                      style={{
                        background:
                          "radial-gradient(320px 220px at 20% 15%, rgba(212,175,55,0.20), transparent 65%), radial-gradient(320px 220px at 85% 70%, rgba(0,201,167,0.18), transparent 68%)",
                      }}
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <div className="text-sm font-semibold text-brand-navy">What you get</div>
                      <ul className="mt-3 space-y-2 text-sm text-brand-ink/70">
                        <li>Offer comparison framework</li>
                        <li>Risk and compliance checkpoints</li>
                        <li>Stakeholder communication plan</li>
                        <li>Negotiation strategy support</li>
                      </ul>
                      <div className="mt-6 rounded-xl bg-white/70 p-3 text-xs text-brand-navy/70">
                        No generic templates. Clear, committee-ready recommendations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer whatsappHref={whatsappHref} />
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-lift transition hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-brand-teal/60"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(7,27,46,0.98) 0%, rgba(15,76,129,0.98) 50%, rgba(0,201,167,0.92) 120%)" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
