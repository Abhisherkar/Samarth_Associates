import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer({ whatsappHref }) {
  return (
    <footer className="pt-10 pb-24 sm:pb-10" aria-label="Footer">
      <div className="container-pad">
        <div className="surface glass-strong relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(15,76,129,0.45) 25%, rgba(0,201,167,0.45) 55%, rgba(212,175,55,0.35) 80%, transparent 100%)" }}
            aria-hidden="true"
          />
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <img src="/brand/logo.svg" alt="SAMARTH ASSOCIATE" className="h-9 w-auto" draggable={false} />
              <p className="mt-3 max-w-md text-sm text-brand-ink/70">
                Manage • Maintain • Empower — premium redevelopment advisory for societies and developers.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  className="surface glass card-3d flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-brand-navy/80"
                  href="#services"
                >
                  Services
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  className="surface glass card-3d flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-brand-navy/80"
                  href="#process"
                >
                  Process
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  className="surface glass card-3d flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-brand-navy/80"
                  href="#cta"
                >
                  Book
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="surface glass p-5">
                <div className="text-xs font-semibold tracking-[0.2em] text-brand-royal/70">CONTACT</div>
                <div className="mt-4 space-y-3 text-sm text-brand-ink/75">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-teal" aria-hidden="true" />
                    Pune, Maharashtra
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-teal" aria-hidden="true" />
                    hello@samarthassociate.in
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-teal" aria-hidden="true" />
                    +91 XXXXX XXXXX
                  </div>
                </div>

                <a
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 cta-primary"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp for Consultation
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="text-xs text-brand-navy/60">
                © {new Date().getFullYear()} SAMARTH ASSOCIATE. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
