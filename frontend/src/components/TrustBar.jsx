import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  { label: "28+ Projects Guided" },
  { label: "₹100Cr+ Value Assisted" },
  { label: "Legal + Financial Strategy" },
  { label: "Pune / Maharashtra Expertise" },
];

export default function TrustBar() {
  return (
    <section className="py-8 sm:py-10" aria-label="Trust indicators">
      <div className="container-pad">
        <div className="surface glass relative overflow-hidden border border-white/70 px-4 py-4 sm:px-6">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,201,167,0.45) 35%, rgba(212,175,55,0.35) 65%, transparent 100%)" }}
            aria-hidden="true"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((it, idx) => (
              <motion.div
                key={it.label}
                className="card-3d flex items-center gap-2 rounded-xl bg-white/55 px-3 py-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <CheckCircle2 className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                <div className="text-sm font-semibold text-brand-navy/80">{it.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
