# Page Design Spec — SAMARTH ASSOCIATE (Desktop-first)

## Global Styles (Design Tokens)
- Brand positioning: premium, futuristic, high-trust, minimal clutter.
- Color tokens:
  - Background: near-black gradient (e.g., #07070A → #0B1020)
  - Surface: translucent glass cards (white 4–8% with blur)
  - Text: primary off-white (#F4F6FF), secondary (#B9C0D9)
  - Accent: neon-cyan / electric-violet (use sparingly for CTAs)
  - Borders: 1px subtle (white 8–12%)
- Typography:
  - Headings: tight tracking, large scale (H1 48–56px desktop)
  - Body: 16–18px, comfortable line-height (1.5–1.7)
- Buttons:
  - Primary CTA: solid accent gradient, strong hover glow, focus ring visible
  - Secondary: outline/glass, subtle hover fill
- Links: underline-on-hover, accent color.
- Motion (Framer Motion):
  - Page transition: 200–350ms fade + slight translate
  - Section reveals: stagger children (small offsets), avoid excessive parallax
  - Hover micro-interactions: 1–2px lift, soft glow

## Global Brand Usage (Logo)
- Navbar: left-aligned logo (SVG/PNG) + wordmark; clickable to Home.
- Favicon: derived from logo mark.
- Footer: compact logo + short brand line.
- Loading screen / route transition overlay: centered logo with subtle animated shimmer (no spinning), then fade out.

## Layout System (All Pages)
- Desktop-first container: max-width 1120–1200px; 12-column grid using CSS Grid + Tailwind.
- Spacing: generous vertical rhythm (section padding 80–120px desktop).
- Responsive behavior:
  - md: reduce padding, stack two-column sections
  - sm: single column, sticky CTA becomes bottom bar (optional)

---

## Page: Home (/)
### Meta Information
- Title: “SAMARTH ASSOCIATE — Premium Advisory & Strategic Guidance”
- Description: “High-trust advisory website focused on outcomes and consultation bookings.”
- Open Graph: title/description + logo image.

### Page Structure
1. **Navbar (sticky)**
   - Left: logo
   - Center/right: Services link
   - Right: Primary “Book Consultation” button
2. **Hero (two-column)**
   - Left: H1 positioning, 2–3 outcome bullets, CTA group (Primary Book + Secondary View Services)
   - Right: premium visual (abstract gradient mesh / glass panel) with 1–2 trust metrics
3. **Trust Strip**
   - Row of trust items (metrics/testimonial snippet placeholders)
4. **Services Preview (card grid)**
   - 3–6 glass cards with icon, title, one-liner outcome, link to Services
5. **How It Works (timeline)**
   - 3-step process with minimal copy
6. **Final CTA (conversion block)**
   - Strong headline + reassurance + Primary CTA
7. **Footer**
   - Logo, quick links, contact placeholders, copyright

### Interaction States
- Hero CTA hover glow, card hover lift, section reveal animations on scroll.

---

## Page: Services (/services)
### Meta Information
- Title: “Services — SAMARTH ASSOCIATE”
- Description: “Clear offerings, outcomes, and engagement process.”

### Page Structure
1. **Header + Intro**
   - Short positioning + “Book Consultation” CTA
2. **Service Catalog (stacked blocks)**
   - Each service: outcome headline, who-it’s-for, deliverables, engagement format
3. **Process (timeline / steps)**
   - Discovery → Analysis → Recommendations → Support
4. **FAQs (accordion)**
   - 6–10 concise answers addressing common objections
5. **CTA Rail**
   - Repeated CTA with reassurance (response time, confidentiality note placeholder)

### Motion
- Accordion open/close with height animation; staggered entry for service blocks.

---

## Page: Book Consultation (/book)
### Meta Information
- Title: “Book Consultation — SAMARTH ASSOCIATE”
- Description: “Submit your details to request a consultation.”

### Page Structure
1. **Intro Panel**
   - Short reassurance text; what happens next (2–3 bullets)
2. **Lead Form (single column, high clarity)**
   - Fields: Full name, Email, Phone (optional), Company (optional), Service interest, Message
   - Inline validation and clear privacy microcopy
   - Submit button (primary)
3. **States**
   - Loading: full-page overlay with animated logo
   - Success: confirmation headline + next steps
   - Error: actionable error message + retry

### Accessibility & Conversion Requirements
- Keyboard navigable form, visible focus rings, error summaries, and minimal distractions around the form.
