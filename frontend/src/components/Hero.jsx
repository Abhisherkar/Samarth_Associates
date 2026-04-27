import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck, Sparkles } from "lucide-react";

function useInViewOnce() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setInView(true);
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

function useCountUp(target, startWhen) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return;
    if (reduceMotion) {
      setValue(target);
      return;
    }
    const duration = 950;
    const start = performance.now();
    let raf = 0;

    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion, startWhen, target]);

  return value;
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInViewOnce();

  const projects = useCountUp(28, inView);
  const valueCr = useCountUp(100, inView);

  const skylineUrl = useMemo(() => {
    const prompt = encodeURIComponent(
      "premium architectural photograph, Pune skyline at golden hour, modern high-rises, clean atmosphere, luxury editorial real estate branding, soft haze, ultra detailed, 35mm, natural colors, no text",
    );
    return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${prompt}&image_size=landscape_16_9`;
  }, []);

  return (
    <section className="relative pt-10 sm:pt-14" aria-label="Hero" ref={ref}>
      <div className="container-pad">
        <div className="surface glass-strong overflow-hidden">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-navy/75"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="h-4 w-4 text-brand-teal" aria-hidden="true" />
                Pune / Maharashtra Redevelopment Advisory
              </motion.div>

              <motion.h1
                className="mt-4 font-heading text-balance text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
              >
                Build decisions with <span className="gradient-text">confidence</span> before redevelopment pressure takes over.
              </motion.h1>

              <motion.p
                className="mt-4 max-w-xl text-pretty text-sm text-brand-ink/70 sm:text-base"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
              >
                Strategic redevelopment advisory for societies, committee members, residents, and developers.
              </motion.p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#cta" className="cta-primary">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#cases" className="cta-secondary">
                  See Success Cases
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="surface glass card-3d p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold tracking-[0.18em] text-brand-navy/60">PROJECTS</div>
                      <div className="mt-1 text-2xl font-semibold text-brand-navy">{projects}+</div>
                    </div>
                    <div className="rounded-2xl bg-brand-teal/10 p-3 text-brand-teal">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-brand-ink/65">Guided through offers, risks, and alignment.</div>
                </div>

                <div className="surface glass card-3d p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold tracking-[0.18em] text-brand-navy/60">VALUE</div>
                      <div className="mt-1 text-2xl font-semibold text-brand-navy">₹{valueCr}Cr+</div>
                    </div>
                    <div className="rounded-2xl bg-brand-gold/15 p-3 text-brand-gold">
                      <Sparkles className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-brand-ink/65">Improved negotiation clarity and outcomes.</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid-bento grid-cols-2">
                <motion.div
                  className="surface ring-glow card-3d relative col-span-2 overflow-hidden border border-white/70"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.05 }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${skylineUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(7,27,46,0.74) 0%, rgba(7,27,46,0.28) 55%, rgba(7,27,46,0.12) 100%)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative p-5 sm:p-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                      <span className="h-2 w-2 rounded-full bg-brand-teal" aria-hidden="true" />
                      Negotiation + Legal + Financial Strategy
                    </div>
                    <div className="mt-3 max-w-md text-xl font-semibold text-white sm:text-2xl">
                      Premium advisory that protects value and prevents costly mistakes.
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="surface glass card-3d overflow-hidden border border-white/70"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.12 }}
                >
                  <div
                    className="h-28 w-full"
                    style={{
                      backgroundImage: "url(/images/legal-documents.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  <div className="p-4">
                    <div className="text-sm font-semibold text-brand-navy">Committee-ready clarity</div>
                    <div className="mt-1 text-xs text-brand-ink/65">Decision frameworks and checkpoints.</div>
                  </div>
                </motion.div>

                <motion.div
                  className="surface glass card-3d overflow-hidden border border-white/70"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.16 }}
                >
                  <div
                    className="h-28 w-full"
                    style={{
                      backgroundImage: "url(/images/estate-premium.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  <div className="p-4">
                    <div className="text-sm font-semibold text-brand-navy">Premium outcomes</div>
                    <div className="mt-1 text-xs text-brand-ink/65">Negotiation leverage and alignment.</div>
                  </div>
                </motion.div>
              </div>

              {!reduceMotion ? (
                <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-44 w-44 rounded-full bg-brand-teal/20 blur-3xl sm:block" />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {!reduceMotion ? (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-14 left-[10%] h-64 w-64 rounded-full bg-brand-royal/10 blur-3xl" />
          <div className="absolute top-24 right-[12%] h-72 w-72 rounded-full bg-brand-teal/10 blur-3xl" />
          <div className="absolute bottom-0 left-[30%] h-56 w-56 rounded-full bg-brand-gold/10 blur-3xl" />
        </div>
      ) : null}
    </section>
  );
}
