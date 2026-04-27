import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  FileText,
  MessagesSquare,
  Scale,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

const services = [
  { title: "Society Advisory", desc: "Committee-first guidance to keep redevelopment decisions structured and defensible.", icon: Building2, tone: "from-brand-royal/15 to-brand-teal/10" },
  { title: "Builder Negotiation", desc: "Increase negotiation power with benchmarks, terms clarity, and outcome-driven alignment.", icon: TrendingUp, tone: "from-brand-teal/14 to-brand-gold/10" },
  { title: "Redevelopment Feasibility", desc: "Evaluate risks, viability, timelines, and stakeholder readiness before committing.", icon: ShieldAlert, tone: "from-brand-gold/14 to-brand-royal/10" },
  { title: "Resident Communication Strategy", desc: "Reduce confusion and build trust with clear updates and decision-ready narratives.", icon: MessagesSquare, tone: "from-brand-royal/14 to-brand-gold/10" },
  { title: "Legal Coordination", desc: "Coordinate due diligence and legal checkpoints with clarity and accountability.", icon: Scale, tone: "from-brand-teal/14 to-brand-royal/10" },
  { title: "Committee Decision Support", desc: "Turn complex offers into clear comparisons and board-ready recommendations.", icon: FileText, tone: "from-brand-gold/14 to-brand-teal/10" },
];

const why = [
  { title: "Prevent costly mistakes", desc: "Spot hidden clauses, unrealistic timelines, and compliance risks early.", icon: BadgeCheck },
  { title: "Increase negotiation power", desc: "Create leverage with market benchmarks and a structured evaluation model.", icon: TrendingUp },
  { title: "Build resident trust", desc: "Communication strategy that keeps stakeholders aligned without noise.", icon: MessagesSquare },
  { title: "Structured decisions", desc: "Clear checkpoints and documentation that reduces friction and ambiguity.", icon: FileText },
  { title: "End-to-end clarity", desc: "From audit to execution support — you move with confidence.", icon: BriefcaseBusiness },
];

const steps = [
  { n: "01", title: "Audit Society Position", desc: "Baseline constraints, goals, and readiness." },
  { n: "02", title: "Identify Risks", desc: "Legal, operational, and stakeholder risks." },
  { n: "03", title: "Compare Developer Offers", desc: "Terms, value, and feasibility comparison." },
  { n: "04", title: "Align Stakeholders", desc: "Committee + residents communication strategy." },
  { n: "05", title: "Execute Confidently", desc: "Support through decisions and next steps." },
];

const cases = [
  { title: "Undervalued offer recovered by 40%", desc: "Premium committee aligned on benchmarks and negotiation strategy.", metricA: "Offer +40%", metricB: "Timeline clarity", img: "/images/construction-progress.png" },
  { title: "Resident trust rebuilt in 3 meetings", desc: "Clear communication framework reduced noise and improved approvals.", metricA: "Approval velocity", metricB: "Reduced conflict", img: "/images/completed-community.jpg" },
  { title: "Risk checklist prevented contract pitfalls", desc: "Legal coordination surfaced clauses affecting value and timelines.", metricA: "Risk reduced", metricB: "Terms clarity", img: "/images/legal-documents.jpg" },
];

function SectionHeader({ kicker, title, desc }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.2em] text-brand-royal/70">{kicker}</p>
      <h2 className="mt-3 font-heading text-2xl font-semibold text-brand-navy sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 text-sm text-brand-ink/70 sm:text-base">{desc}</p> : null}
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section id="services" className="py-14 sm:py-20" aria-label="Services">
        <div className="container-pad">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              kicker="SERVICES"
              title="Premium advisory that makes redevelopment decisions simple."
              desc="Clarity across stakeholders, risk, and negotiation — without clutter or confusion."
            />
            <div className="surface glass p-4">
              <div className="text-sm font-semibold text-brand-navy">Ideal for</div>
              <div className="mt-1 text-xs text-brand-ink/70">Societies • Committees • Residents • Developers</div>
            </div>
          </div>

          <div className="mt-8 grid-bento grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  className="surface glass card-3d group relative overflow-hidden p-5"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  <div
                    className={
                      "pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br " +
                      s.tone
                    }
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -inset-16 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(280px 220px at 30% 30%, rgba(0,201,167,0.18), transparent 60%), radial-gradient(300px 240px at 70% 65%, rgba(212,175,55,0.14), transparent 62%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-2xl bg-brand-navy/5 p-3 text-brand-navy">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="text-xs font-semibold tracking-[0.2em] text-brand-navy/50">OUTCOME</div>
                    </div>
                    <div className="mt-4 text-lg font-semibold text-brand-navy">{s.title}</div>
                    <div className="mt-2 text-sm text-brand-ink/70">{s.desc}</div>

                    <div className="mt-5 flex items-center justify-between rounded-xl border border-white/70 bg-white/60 px-4 py-3">
                      <div className="text-xs font-semibold text-brand-navy/70">Committee-ready deliverables</div>
                      <div className="text-xs font-semibold text-brand-teal">View</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why" className="py-14 sm:py-20" aria-label="Why choose us">
        <div className="container-pad">
          <div className="surface glass-strong p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeader
                kicker="WHY CHOOSE US"
                title="Trust-building advisory that improves outcomes."
                desc="Interactive, structured guidance designed for high-stakes redevelopment decisions."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {why.map((w, idx) => {
                  const Icon = w.icon;
                  return (
                    <motion.div
                      key={w.title}
                      className="surface glass card-3d group p-5"
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-2xl bg-brand-teal/10 p-3 text-brand-teal">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-brand-navy">{w.title}</div>
                          <div className="mt-1 text-xs text-brand-ink/70">{w.desc}</div>
                        </div>
                      </div>
                      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-brand-navy/10 to-transparent" />
                      <div className="mt-3 text-xs font-semibold text-brand-navy/60">Structured. Defensible. Premium.</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-14 sm:py-20" aria-label="Process">
        <div className="container-pad">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              kicker="PROCESS"
              title="A clear path from uncertainty to confident execution."
              desc="Elegant, committee-ready steps that keep people aligned and decisions moving."
            />
            <div className="surface glass p-4 text-xs text-brand-ink/70">
              Typical engagement: 2–6 weeks based on complexity
            </div>
          </div>

          <div className="mt-8 grid-bento grid-cols-1 lg:grid-cols-5">
            {steps.map((s, idx) => (
              <motion.div
                key={s.n}
                className="surface glass card-3d p-5"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold tracking-[0.18em] text-brand-navy/55">{s.n}</div>
                  <div className="h-2 w-2 rounded-full bg-brand-teal" aria-hidden="true" />
                </div>
                <div className="mt-3 text-sm font-semibold text-brand-navy">{s.title}</div>
                <div className="mt-2 text-xs text-brand-ink/70">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-14 sm:py-20" aria-label="Case studies">
        <div className="container-pad">
          <SectionHeader
            kicker="CASE STUDIES"
            title="Real outcomes, presented with clarity."
            desc="Examples are illustrative placeholders until you share specific project details." 
          />

          <div className="mt-8 grid-bento grid-cols-1 lg:grid-cols-3">
            {cases.map((c, idx) => (
              <motion.div
                key={c.title}
                className="surface glass card-3d group overflow-hidden"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <div className="relative h-44">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${c.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(7,27,46,0.06) 0%, rgba(7,27,46,0.56) 100%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-brand-navy">
                    {c.metricA}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-base font-semibold text-brand-navy">{c.title}</div>
                  <div className="mt-2 text-sm text-brand-ink/70">{c.desc}</div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/70 bg-white/60 px-3 py-2">
                      <div className="text-[11px] font-semibold tracking-[0.18em] text-brand-navy/55">BEFORE/AFTER</div>
                      <div className="mt-1 text-xs font-semibold text-brand-navy">{c.metricA}</div>
                    </div>
                    <div className="rounded-xl border border-white/70 bg-white/60 px-3 py-2">
                      <div className="text-[11px] font-semibold tracking-[0.18em] text-brand-navy/55">IMPACT</div>
                      <div className="mt-1 text-xs font-semibold text-brand-navy">{c.metricB}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
