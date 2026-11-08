# Lyfe Hospitality — Brand Design System (group hub)

> Connecticut restaurant-group hub. Mint-cream / forest / emerald. Sora display + Inter UI. Tagline: **“Bringing good food to lyfe.”** Sister of the five houses — not a clone of any of them, not Linear/Stripe/Vercel.
>
> Extracted 2026-09-01 ~10:20 PM ET from live HTML + CSS (`https://dimitri.app`) and existing screenshots in `/workspace/ux-review/dimitri-app/`. **Do not ship or publish from this file.**

**Live:** `https://dimitri.app` (Vercel, Next.js App Router, prerendered)
**Live CSS:** `https://dimitri.app/_next/static/css/451957cdc20b1cea.css` — Tailwind **v4.2.0**, **12,454 bytes**. The bundle **is Tailwind**, but it is **still incomplete / wrong**.
**Fonts:** Google `Sora` 400–800 + `Inter` 400–600
**Houses on this hub (five cards only):** Pizza Lyfe · Lyfe Cafe · Organika Kitchen · Quattro Pazzi · Sweet Lyfe (`sweetlyfe.app`, not `.com`)

---

## CSS status (re-verified 2026-09-01 10:20 PM ET)

The production stylesheet **contains a Tailwind v4 header, `:root` brand tokens, and some color utilities** — and is **missing the majority of classes the HTML actually uses**. This is the same failure mode as the existing unstyled / faded / nav-missing screenshots. **Do not treat the live paint as the brand.** Tokens below are the *intended* system (from `:root` + HTML class names). Live paint is documented separately in each section and in Appendix C.

| Signal | Live fact |
|---|---|
| Bundle size | 12,454 bytes (a healthy page of this size is typically 30–80KB) |
| Unique HTML classes | 181 |
| Present in CSS | 74 (mostly colors, `flex`/`grid`/`hidden`, `font-display`, `reveal`) |
| Missing from CSS | **107** including **every** `sm:`/`md:`/`lg:` variant, **all spacing** (`px-6`, `py-20`, `p-8`, `gap-*`, `mb-*`), **all type sizes/weights** (`text-sm`…`text-7xl`, `font-bold`…`font-extrabold`), `text-white`, `bg-white`, `rounded-3xl`, `max-w-7xl`, `backdrop-blur-md`, `top-0` |
| `md:flex` | **Absent.** Nav is `hidden md:flex` → `hidden` ships, so **desktop nav never appears** (shot `06-nav-links-missing-header.png`) |
| `.reveal` | `opacity: 0` until `.is-visible` (JS). No-JS / pre-hydration: stats, brand cards, philosophy copy, leadership, contact **do not paint** (shot `05-nojs-content-invisible.png`) |
| Contamination | Same file also ships **another house’s** utilities: `#2d2d2d`, `#e8402a`, offset shadows `5px 5px 0 0 #2d2d2d`, `#f5f1e8`, `grid-cols-7`. Hub HTML does not use them. |

**What still works on live (because it is in the tiny bundle or in `body{}`):** page fill `--background #f7faf5`, ink `--foreground #0a1f16`, emerald/forest hex utilities, `font-display` → Sora, hero `text-[clamp(3rem,9.5vw,8rem)]` + `leading-[0.92]`, `rounded-full`, `sticky`, `hidden`, `flex`/`grid` without breakpoints.

**What live actually looks like:** unpadded mint-cream column, default UA blue/purple links (`#0000ee` sampled), overlapping hero lines, a dark illegible “Get in Touch” blob, no nav, brand names as blue underlines, `.reveal` blocks faded or gone. Proof: `shots/01-home.png`, `02-mobile.png`, `06-nav-links-missing-header.png`.

---

## 1. Visual Theme & Atmosphere

Lyfe Hospitality is a **Connecticut restaurant-group hub** — a family index, not a restaurant, not a SaaS marketing page.

- **Mood:** health-forward, local, quietly confident. Leaf mark, mint-cream paper, forest editorial band, one emerald accent. “Bringing good food to lyfe.”
- **Surfaces:** mint-cream canvas (`--background #f7faf5`), white paper cards (`--paper`), one deep forest slab (`--forest #06301f`) for philosophy + footer. Not zinc, not charcoal dashboards, not pizza rosso, not Sweet Lyfe dairy-navy.
- **Voice on canvas:** Sora extrabold tracking-tight headlines; Inter for body/UI. Emerald only for the word *lyfe*, eyebrows, primary CTA, and hover. Lime `--lime #c8f169` exists in `:root` and is **unused** in live HTML — a reserved spark, not a fill.
- **Job of this site:** name the group, send people to **five live houses**, introduce the founder, give **one** group contact (email / phone / Norwalk). It is not a sixth restaurant.
- **What it is not:** a clone of Pizza Lyfe (rosso/cream/serif), Sweet Lyfe (Fraunces/navy/honey), Lyfe Cafe, Organika, or Quattro Pazzi. Not Linear, Stripe, Vercel, Geist-on-black, glassmorphism, neon gradients.

Atmosphere one-liner for agents: *“A mint-cream Connecticut restaurant-group hub with Sora headlines, a forest philosophy band, and one emerald leaf — five sister brands, never a restaurant clone, never a tech brand.”*

**Live paint:** the cream canvas and emerald “lyfe.” still read; everything else collapses to unstyled HTML. Do not copy the blue links or the overlapping hero into new work.

---

## 2. Color Palette & Roles (hex from live `:root` + HTML)

Pixel-confirmed on live screenshots (even with broken utilities): page fill `(247, 250, 245)` = `--background`; leaf / “lyfe.” `(15, 157, 99)` = `--emerald`; badge text `(10, 125, 77)` = `#0a7d4d`; philosophy band `(6, 48, 31)` = `--forest`.

### Intended primitives (`:root` in the production CSS — these *did* ship)

| Token | Hex | RGB | Role |
|---|---|---|---|
| `--background` | `#f7faf5` | 247, 250, 245 | **Page canvas.** Mint-cream, not warm bakery cream, not `#fff` |
| `--foreground` | `#0a1f16` | 10, 31, 22 | **Ink.** Headlines, body, “Get in Touch” fill |
| `--forest` | `#06301f` | 6, 48, 31 | Philosophy band + footer + founder monogram well |
| `--emerald` | `#0f9d63` | 15, 157, 99 | **Primary accent.** Leaf mark, “lyfe.”, eyebrows, primary CTA, card hover border |
| `--emerald-bright` | `#16c47f` | 22, 196, 127 | Accent on forest (philosophy “better”, founder “DP”) |
| `--lime` | `#c8f169` | 200, 241, 105 | Reserved spark in `:root`. **Unused in live HTML.** Do not promote to a fill |
| `--paper` | `#fff` | 255, 255, 255 | Brand / contact cards (`bg-white`) |

### Intended HTML-only colors (not in `:root`, used as arbitrary values)

| Hex | Role |
|---|---|
| `#0a7d4d` | Badge label (`text-[#0a7d4d]`); primary CTA hover (`hover:bg-[#0a7d4d]`) |
| `#eaf3ec` | Ink on forest (`text-[#eaf3ec]`) |
| `#f0f6ee` | Quiet icon well on cards (`bg-[#f0f6ee]`) |
| `#f7faf5` / 85% | Sticky header glass (`bg-[#f7faf5]/85`) |

Ink opacities on cream (HTML): `/70` body on leadership, `/65` hero lede + nav idle, `/60` card body, `/55` stat labels + footer on forest, `/45` contact kicker, `/40` idle arrow well, `/30` card index “01”.

### Semantic (intended)

| Role | Value | Where |
|---|---|---|
| Page | `--background` | `body`, main |
| Ink | `--foreground` | `text-[#0a1f16]` / `body { color }` |
| Primary action | `--emerald` fill, white label | “Explore Our Brands” |
| Inverse action | `--foreground` fill, white label | “Get in Touch” → hover emerald |
| Ghost action | transparent + `border-[#0a1f16]/15` | “Our Story” |
| Eyebrow | `--emerald` on cream; `--emerald-bright` on forest | THE FAMILY / LEADERSHIP / SAY HELLO / OUR PHILOSOPHY |
| Card | `--paper` + `border-[#0a1f16]/10` | Five brand cards + three contact cards |
| Card hover | border `--emerald` + shadow `0 24px 48px -24px rgba(15,157,99,0.4)` | Whole-card `<a>` |
| Forest band | `--forest` + `#eaf3ec` | `#about`, `<footer>` |
| Header glass | `#f7faf5/85` + `backdrop-blur-md` + hairline `/8` | Sticky |

**Do not introduce:** rosso `#c41e3a`, Sweet Lyfe navy `#2B4AA2`, charcoal `#2d2d2d`, coral `#e8402a` (those last two **leak in the live CSS file** and are not hub brand). No dark-mode invert.

### Contrast (calculated from intended tokens)

| Pair | Ratio | Use | AA |
|---|---|---|---|
| Ink `#0a1f16` on canvas `#f7faf5` | **16.34** | Headlines, body | Pass |
| White on ink `#0a1f16` | **17.21** | “Get in Touch” **intended** | Pass |
| Ink on ink (live, `text-white` missing) | **1.00** | “Get in Touch” **live paint** | **FAIL — illegible** |
| `#eaf3ec` on forest | **12.78** | Philosophy headline | Pass |
| `--emerald-bright` on forest | **6.37** | “better”, “DP” | Pass |
| Badge `#0a7d4d` on canvas | **4.92** | Pill label | Pass (normal) |
| Ink/65 mixed on canvas ≈ `#5d6c64` | **5.26** | Hero lede | Pass |
| Ink/60 mixed ≈ `#69776f` | **4.46** | Card body | **Borderline / fail normal** |
| Ink/55 mixed ≈ `#75827a` | **3.81** | Stat labels | Fail normal |
| `--emerald` on canvas | **3.31** | Eyebrows, card taglines `text-sm` | **Fail normal (needs 4.5)** |
| White on `--emerald` | **3.49** | Primary CTA `text-sm font-bold` | **Fail normal** (14px ≠ WCAG “large”) |
| `--lime` on canvas | **1.23** | If used as type | Forbidden |
| `--lime` on forest | **11.20** | Only safe as a spark on forest | OK if ever used |

**Intended-token defects (even after CSS is repaired):** emerald-on-cream taglines and white-on-emerald `text-sm` CTAs miss AA. Prefer `#0a7d4d` (or darker) for small emerald type; darken the primary fill or increase CTA type size/weight into WCAG large.

### Live paint (do not copy)

- Canvas and forest band match tokens (sampled `#f7faf5`, `#06301f`).
- Unstyled links sample **UA blue** `#0000ee` / `#0430c3` (shots 01, 02, 06).
- Header CTA is a dark blob: `bg-[#0a1f16]` ships, `text-white` does not → 1.00 contrast (shot 06).
- `.reveal` at `opacity: 0` makes brand/stats/contact look “faded” or missing (shots 03-brands-cards-faded, 04-mobile-brands-faded, 05-nojs).

---

## 3. Typography Rules

Live `:root`:

```
--font-display: "Sora","Helvetica Neue",Helvetica,Arial,sans-serif;
--font-sans: "Inter","Helvetica Neue",Helvetica,Arial,sans-serif;
```

`.font-display { font-family: var(--font-display); letter-spacing: -.02em; }` **does ship.**
`body { font-family: var(--font-sans); color: var(--foreground); background: var(--background); }` **does ship.**
Google Fonts link **does ship:** Sora 400/500/600/700/800, Inter 400/500/600.

**Live gap:** `font-bold` / `font-extrabold` / `font-semibold` / `font-medium` / every `text-sm`…`text-7xl` / `tracking-tight` / `tracking-wide` / `leading-relaxed` are **missing from the bundle**. Live type falls back to Inter 16px/400 except where `font-display` + the hero clamp apply. Hero `leading-[0.92]` **does ship**, so the clamp headline **overlaps itself** (shot 06).

### Intended hierarchy (from HTML classes)

| Role | Face | Intended spec | Where |
|---|---|---|---|
| Hero H1 | Sora extrabold | `font-display font-extrabold tracking-tight leading-[0.92] text-[clamp(3rem,9.5vw,8rem)]` | “Bringing good food to **lyfe.**” — *lyfe.* is `text-[#0f9d63]` |
| Section H2 | Sora extrabold | `text-4xl md:text-6xl font-extrabold tracking-tight` | “Five brands, one belief.” / “Why ‘Lyfe’?” / “The founder.” / “Let’s build something **delicious.**” |
| Founder name | Sora extrabold | `text-4xl md:text-5xl` | Dimitrios Pantzos |
| Brand card title | Sora bold | `text-2xl font-bold tracking-tight` | Pizza Lyfe, … |
| Stat numeral | Sora extrabold | `text-5xl md:text-6xl text-[#0f9d63]` | 05 / 100% / CT |
| Contact value | Sora bold | `text-xl font-bold` | me@dimitri.app, Norwalk, Connecticut |
| Footer wordmark | Sora extrabold | `text-xl` | Lyfe Hospitality |
| Monogram | Sora extrabold | `text-7xl text-[#16c47f]` on forest square | “DP” |
| Eyebrow | Inter bold | `text-sm font-bold uppercase tracking-[0.15em] text-[#0f9d63]` (on forest: `#16c47f`) | THE FAMILY, LEADERSHIP, SAY HELLO, OUR PHILOSOPHY |
| Card tagline | Inter bold | `text-sm font-bold uppercase tracking-wide text-[#0f9d63]` | PIZZA, REIMAGINED etc. |
| Nav | Inter medium | `text-sm font-medium text-[#0a1f16]/65 hover:text-[#0f9d63]` | Brands About Leadership Contact |
| Buttons | Inter bold/semibold | `text-sm font-bold` (header CTA `font-semibold`) | Never Sora on buttons |
| Lede | Inter | `text-lg md:text-xl leading-relaxed text-[#0a1f16]/65` | Hero |
| Card body | Inter | `text-[15px] leading-relaxed text-[#0a1f16]/60` | Brand blurbs |
| Philosophy body | Sora medium, then Inter | `text-xl md:text-2xl font-display font-medium` then `text-lg md:text-xl font-sans font-normal text-[#eaf3ec]/70` | `#about` |
| Founder bio | Inter | `text-lg md:text-xl leading-relaxed text-[#0a1f16]/70` | Leadership |

**Do not** substitute Geist, Instrument Serif, Fraunces, Manrope, Plus Jakarta, Recoleta, or Playfair. Sora is display-only (headlines, numerals, wordmarks). Inter is UI/body. Logo lockup is the **leaf circle + word “Lyfe”** (Lucide `leaf` in a `#0f9d63` 28px circle), not a typeset “LYFE HOSPITALITY” in a house font.

**Copy voice:** health-forward, plain, a little warm. Do not sound like a seed-round landing page.

---

## 4. Component Stylings

Shared chrome (intended): pills `rounded-full`, cards `rounded-3xl` + `p-8` + hairline `border-[#0a1f16]/10` + paper fill. Hover: `hover:-translate-y-1.5 hover:border-[#0f9d63] hover:shadow-[0_24px_48px_-24px_rgba(15,157,99,0.4)]` over `duration-300`. Focus: not specified in HTML — add a visible emerald ring when repairing CSS; do not ship without `:focus-visible`.

**Live:** `rounded-3xl`, `p-8`, `bg-white`, `text-white`, `hover:-translate-y-1.5` are **missing**. Cards are unpadded inline blocks; CTAs are UA links. The hover shadow utility **does** exist in CSS.

### 4.1 Header

```
header.sticky.top-0.z-50.border-b.border-[#0a1f16]/8.bg-[#f7faf5]/85.backdrop-blur-md
nav.max-w-7xl.mx-auto.px-6.py-5.flex.items-center.justify-between
```

- **Mark:** 28px emerald circle + Lucide leaf (white) + Sora “Lyfe” → `#top`
- **Desktop nav (intended):** `hidden md:flex items-center gap-9` — Brands, About, Leadership, Contact (`#brands` `#about` `#leadership` `#contact`)
- **Header CTA:** `rounded-full bg-[#0a1f16] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#0f9d63]` → `#contact` “Get in Touch”

**Live P0:** `hidden` ships, `md:flex` does not → nav links **never show at any breakpoint**. `text-white` missing → CTA ink-on-ink. `backdrop-blur-md` / `top-0` / `px-6` missing. Shot: `crop-header-nav-missing.png`.

**Even after CSS is repaired (HTML fact):** there is **no hamburger / drawer**. Below `md`, nav is intentionally hidden; the only header action is Get in Touch. That is a mobile IA gap (P1), not a reason to paste house nav (Menu / Order / Hours) onto the hub.

### 4.2 Hero

Eyebrow pill: `rounded-full border border-[#0f9d63]/30 bg-[#0f9d63]/8 px-4 py-1.5 text-sm font-semibold text-[#0a7d4d]` + leaf + “Connecticut’s health-forward restaurant group”.

H1: “Bringing good food to **lyfe.**”

Primary: `rounded-full bg-[#0f9d63] px-7 py-4 text-sm font-bold text-white hover:bg-[#0a7d4d]` + arrow-up-right → `#brands` “Explore Our Brands”

Ghost: `rounded-full border-2 border-[#0a1f16]/15 px-7 py-4 text-sm font-bold hover:border-[#0f9d63] hover:text-[#0f9d63]` → `#about` “Our Story”

**Live:** clamp + emerald word work; `leading-[0.92]` without tracking/weight → overlapping lines; CTAs are blue links inside a leftover green box (mobile shot 02).

### 4.3 Stats rail

Three cells: `05 Distinct Concepts` · `100% Clean Ingredients` · `CT Rooted Locally`. Intended `sm:grid-cols-3` + divide. Wrapped in `.reveal`.

**Live:** `.reveal { opacity: 0 }` so this rail is faint or gone until JS. Do not keep opacity-0 in SSR HTML without `is-visible` on the server (or `opacity:1` by default, animate only if JS).

### 4.4 Brand cards — five only

Whole-card `<a target="_blank" rel="noopener noreferrer">`. Index `01`–`05`, arrow well, Next image logo `h-14 object-left`, Sora title, emerald uppercase tagline, 15px blurb.

| # | House | Tagline (live) | Blurb issue | Href (live, 200) |
|---|---|---|---|---|
| 01 | Pizza Lyfe | Pizza, Reimagined | OK | `https://pizzalyfe.com` **200** |
| 02 | Lyfe Cafe | Eat Well, Live Well | OK | `https://lyfe.cafe` **200** |
| 03 | Organika Kitchen | Organic to the Core | OK | `https://organikact.com` **200** |
| 04 | Quattro Pazzi | Classic Italian Soul | OK | `https://quattropazzi.com` → www **200** |
| 05 | Sweet Lyfe | Small-Batch Happiness | **Wrong product language** | `https://sweetlyfe.app` **200** (not `.com`) |

Sweet Lyfe live blurb: *“A micro creamery churning small-batch **ice cream** with real, simple ingredients — the sweetest side of the Lyfe family.”*

Sweet Lyfe **house** (`sweetlyfe.app`, title *“Sweet Lyfe — Greek Frozen Yogurt & Gelato in Westport, CT”*): **21× “frozen yogurt”, 17× “gelato”, 0× “ice cream”.** Hub copy must say Greek frozen yogurt / gelato / micro-creamery — never ice cream. `sweetlyfe.com` is an unrelated THC shop; never link it.

**Hub rule:** no Order / hours / phone **per house** on this page. That absence is a **content gap** (a one-line town + “Visit site” is enough), **not** a reason to clone restaurant sites, Toast menus, hours tables, or house chrome onto the hub. Contact at the bottom is **group** contact only.

Logos (all 200): `/logos/{pizza-lyfe,lyfe-cafe,organika,quattro-pazzi,sweet-lyfe}.png` via `/_next/image`.

### 4.5 Philosophy band (`#about`)

Full-bleed `--forest` with `#eaf3ec` type. Eyebrow leaf + “Our Philosophy”. H2 “Why ‘Lyfe’?”. Word **better** in `--emerald-bright`. This is the only large dark editorial moment besides the footer. Do not turn it into a pricing/CTA SaaS slab.

### 4.6 Leadership (`#leadership`)

No portrait in live HTML. Forest `rounded-3xl` square, Sora “DP” in emerald-bright. Name **Dimitrios Pantzos**. Role “President, Lyfe Hospitality”. Bio: foodservice growth (Dr. Praeger’s, Daring, Violife) → now building this CT group. Do not invent a photo, a different spelling, or extra executives.

### 4.7 Contact (`#contact`) + footer

Three paper cards: Email `mailto:me@dimitri.app` · Location **Norwalk, Connecticut** (not a link). Icons: lucide mail / phone / map-pin in emerald wells.

Footer: forest bar, leaf + “Lyfe Hospitality”, `© 2026 Lyfe Hospitality · Norwalk, CT`.

This is **group** contact. Do not put Westport pizza hours or Sweet Lyfe’s (203) 293-4711 here.

### 4.8 Motion

`.reveal { opacity: 0; transform: translateY(16px); transition: .7s cubic-bezier(.22,1,.36,1) }` + `.reveal.is-visible`. Reduced-motion: opacity 1, no transition. **SSR must not depend on JS to be readable.**

---

## 5. Layout Principles

- **Canvas:** `max-w-7xl mx-auto px-6`. One column that becomes grids at `sm`/`md`/`lg`.
- **Page stack (live HTML):** sticky header → hero `#top` → stats rail → brands `#brands` (grid `md:grid-cols-2 lg:grid-cols-3 gap-5`) → forest philosophy `#about` (`md:grid-cols-12`, 5/7) → leadership `#leadership` (4/8) → contact `#contact` (`sm:grid-cols-3`) → forest footer.
- **Section padding (intended):** hero `pt-20 pb-20 md:pt-32 md:pb-28`; bands `py-20 md:py-28|32|36`.
- **Single page.** No `/menu`, `/order`, `/westport`. Off-site houses open in a new tab.
- **Five cards, one group contact.** Do not add a sixth concept. Do not build a location-picker like Pizza Lyfe.
- **Whitespace is the luxury.** Cards `p-8` `rounded-3xl` `gap-5`. Do not pack like a dashboard.

**Live:** `max-w-7xl` and all padding/gap missing → full-bleed, zero inset, stacked cards, text kissing the viewport edge (shot 02).

---

## 6. Depth & Elevation

Mostly **flat mint-cream, white paper cards, one forest slab.** Depth is a quiet emerald tint — not Material, not glow rings, not brutalist offsets.

| Token | Value | Use |
|---|---|---|
| Card rest | hairline `border-[#0a1f16]/10`, no shadow | Brand + contact cards |
| Card hover | `0 24px 48px -24px rgba(15,157,99,0.4)` + emerald border + lift `-6px` (`-translate-y-1.5`) | Intended; shadow utility **exists** in CSS |
| Header glass | `#f7faf5/85` + `backdrop-blur-md` (`--blur-md` not defined in bundle) | Sticky |
| Forest band | **flat** `--forest` | No shadow on `#about` or footer |
| Icon wells | `#f0f6ee` → emerald fill on hover | Card arrow, contact icons |
| Reveal | 16px rise, 0.7s `cubic-bezier(.22,1,.36,1)` | Only if content is visible without JS |

**Do not copy from the contaminated CSS:** `shadow-[5px_5px_0_0_#2d2d2d]` / `8px 8px 0` — that is another house’s offset-shadow language.

---

## 7. Do's and Don'ts

**Do**
- Paint mint-cream `#f7faf5`, ink `#0a1f16`, emerald `#0f9d63`, forest `#06301f`. Sora on headlines, Inter on UI.
- Keep **five** sister cards pointing at the live houses (`.app` for Sweet Lyfe).
- Keep **one** group contact: `me@dimitri.app`, Norwalk, CT.
- Treat missing per-house Order/hours/phone as a **light hub gap** (town + outbound link) — not a brief to embed Toast or clone a restaurant site.
- Rebuild the Tailwind bundle so HTML classes actually exist (`md:flex`, spacing, type, `text-white`, `bg-white`).
- SSR-visible content: never `.reveal { opacity: 0 }` without `.is-visible` in the HTML.
- Set `og:url` to `https://dimitri.app`. Add an `og:image`. Leaf favicon.

**Don't**
- **Do not restyle as Linear / Stripe / Vercel / Notion.** No zinc, indigo, Geist, glow, dashboard density.
- **Do not clone sister brands.** No rosso/honey pizzeria, no Fraunces dairy-navy, no trattoria red seal as hub chrome, no Organika script lockup as the group mark. The hub is the **parent**.
- **Do not say Sweet Lyfe is ice cream.** It is Greek frozen yogurt & gelato. Never link `sweetlyfe.com`.
- **Do not ship `og:url https://lyfehospitality.com`.** That hostname **does not resolve** (NXDOMAIN). Canonical is `https://dimitri.app`.
- **Do not hide nav behind `hidden md:flex` until `md:flex` (and a mobile equivalent) actually ship in CSS.**
- **Do not put house hours, menus, or Order buttons on this hub** as cloned restaurant UI.
- Do not use `--lime` as body type on cream (1.23 contrast).
- Do not invent a sixth brand, a second office city, or extra founders.
- Do not “fix” live by inlining a SaaS component library look.

---

## 8. Responsive Behavior

Intended (from class names — **none of the breakpoint variants are in the live CSS**):

| Breakpoint | Intended behavior |
|---|---|
| Default / mobile | Header: mark + Get in Touch only (`md:flex` nav hidden). Hero CTAs wrap (`flex-col` then `md:flex-row`). Stats stack (`grid-cols-1`). Brands 1 col. Contact stacks. **No hamburger in the HTML.** |
| `sm` (~640) | Stats `sm:grid-cols-3` + horizontal divide. Brand intro row `sm:flex-row`. Contact `sm:grid-cols-3`. Footer row. |
| `md` (~768) | Nav `md:flex`. Hero padding `md:pt-32 md:pb-28`. Brands `md:grid-cols-2`. About 5/7. Leadership 4/8. Type steps to `md:text-6xl` H2. |
| `lg` (~1024) | Brands `lg:grid-cols-3` (2+3 cards). |

**Live at every width:** nav hidden; no max-width; no padding; grids stuck at `grid-cols-1` where that class exists, otherwise block flow. Mobile shot 02 is the honest product today.

**Mobile implication:** repairing `md:flex` fixes **desktop** nav only. Phones still have no Brands/About/Leadership/Contact in the header unless a drawer is added. Get in Touch + in-page scroll is the current mobile path.

`html { scroll-behavior: smooth }` ships. Anchor IDs exist.

---

## 9. Agent Prompt Guide

When generating or editing the Lyfe Hospitality **hub** (Stitch, codegen, copy decks):

1. **Open with atmosphere:** “Connecticut restaurant-group hub, mint-cream `#f7faf5`, forest `#06301f` band, emerald `#0f9d63` leaf, Sora extrabold headlines, Inter UI. Tagline *Bringing good food to lyfe.* Parent of five houses — not a restaurant clone, not Linear/Stripe/Vercel.”
2. **Lock tokens:** paste §2. Canvas `#f7faf5`. Ink `#0a1f16`. Primary fill `#0f9d63` with **white** label. Inverse fill `#0a1f16` with **white** label. Forest `#06301f` with `#eaf3ec`.
3. **Name components:** `hub-header`, `btn-primary` (emerald), `btn-inverse` (ink), `btn-ghost`, `brand-card`, `contact-card`, `forest-band`, `founder-monogram`.
4. **Five houses only** — outbound, new tab:

| House | URL |
|---|---|
| Pizza Lyfe | `https://pizzalyfe.com` |
| Lyfe Cafe | `https://lyfe.cafe` |
| Organika Kitchen | `https://organikact.com` |
| Quattro Pazzi | `https://quattropazzi.com` |
| Sweet Lyfe | `https://sweetlyfe.app` |

5. **Group contact only:** `mailto:me@dimitri.app` · Norwalk, Connecticut.
6. **Hard bans:** ice cream for Sweet Lyfe; `lyfehospitality.com` as canonical; `sweetlyfe.com`; cloning house chrome/hours/Toast onto the hub; Geist/zinc/indigo; opacity-0 content in SSR; ink-on-ink buttons.
7. **CSS repair is in-place, not a redesign:** restore the missing utilities (or un-`hidden` the nav) so the **intended** classes paint. Do not invent a new visual system.

Example prompt fragment:

> Design the Lyfe Hospitality group hub on mint-cream `#f7faf5`. Sticky header: emerald leaf mark + Sora “Lyfe” + text nav (Brands / About / Leadership / Contact) + inverse pill “Get in Touch” (`#0a1f16` / white). Hero Sora extrabold “Bringing good food to *lyfe.*” (*lyfe.* in `#0f9d63`). Five paper `rounded-3xl` cards to pizzalyfe.com, lyfe.cafe, organikact.com, quattropazzi.com, sweetlyfe.app — Sweet Lyfe blurb is Greek frozen yogurt & gelato, never ice cream. Forest `#06301f` “Why Lyfe?” band. Founder DP monogram, Dimitrios Pantzos. Contact me@dimitri.app / Norwalk. Do not add per-house hours or Order. Do not look like Stripe.

---

## Ranked UX recs (do not ship)

Cite tokens/components from this file. Repair in the existing Next app; do not publish a restyle from this document.

### P0 — broken production / unusable chrome

1. **Rebuild and deploy a complete Tailwind v4 bundle** that actually contains the HTML classes (§ CSS status, §8). Today 107/181 classes are missing, including all breakpoints and all spacing. Live paint is not the brand (§1–§2).
2. **Nav is `hidden md:flex` and `md:flex` is not in CSS** (§4.1, §8). Desktop visitors get zero in-header section links (shot `06`). Minimum fix: ship `md:flex` **or** stop using `hidden` until the variant exists.
3. **`.reveal { opacity: 0 }` with no SSR `.is-visible`** (§4.3, §6). No-JS and pre-hydration hide stats/brands/leadership/contact (shot `05`). Default to visible; enhance if JS runs.
4. **`text-white` missing → Get in Touch is ink-on-ink (contrast 1.00)** (§2, §4.1). Inverse CTA must be white on `#0a1f16`.
5. **`og:url` is `https://lyfehospitality.com`, which does not resolve (NXDOMAIN).** Canonical / OG URL must be `https://dimitri.app`. No `og:image`, no favicon in the document.

### P1 — honesty, a11y, hub IA

6. **Sweet Lyfe card says “ice cream”** (§4.4). House site is Greek frozen yogurt & gelato (`sweetlyfe.app`). Rewrite the blurb; keep href on `.app`.
7. **Emerald `#0f9d63` fails AA as small type (3.31 on cream; 3.49 white-on-emerald for `text-sm` CTAs)** (§2). Darken small emerald labels toward `#0a7d4d`; enlarge or darken the primary pill.
8. **Hero `leading-[0.92]` ships while `font-extrabold` / `tracking-tight` do not** → overlapping H1 (shot 06, §3). Repair type utilities; consider `leading-[0.95]`–`1.0` if overlap remains.
9. **No mobile nav pattern in the HTML** (§4.1, §8). After CSS repair, phones still lack Brands/About/Leadership/Contact. Add a drawer **on the hub**, not a cloned restaurant menu.
10. **Per-house Order / hours / phone are absent** (§4.4, §5, §7). Treat as a **thin gap**: optional town line (“Westport”, “Norwalk”) + the existing outbound card. Do **not** clone house sites, Toast, or hours tables onto the hub.

### P2 — polish, metadata, hygiene

11. **CSS contamination** from another house (`#2d2d2d`, `#e8402a`, offset shadows) (§6). Purge; keep hub tokens only.
12. **`--lime #c8f169` unused** (§2). Keep as a reserved spark on forest, never as body type on cream.
13. **No `og:image` / twitter image / icon links.** Add a forest+leaf share card and a favicon.
14. **Founder block is a monogram, not a photo** (§4.6). Fine if intentional; if a portrait exists, use it without turning the page into a personal SaaS about-page.
15. **`lyfehospitality.com`:** either point DNS 301 → `dimitri.app` or stop emitting it. Do not leave a dead OG URL.
16. **Card body `/60` ink ≈ 4.46** (§2) — nudge toward `/70` to clear AA.

---

## Appendix A — Verbatim live facts (curl, 2026-09-01 ~10:20 PM ET)

**Document**
- Title: `Lyfe Hospitality | Bringing Good Food to Lyfe`
- Description: Connecticut-based restaurant group behind Pizza Lyfe, Lyfe Cafe, Organika Kitchen, Quattro Pazzi, and Sweet Lyfe
- `og:url`: `https://lyfehospitality.com` — **DNS NXDOMAIN** (`Could not resolve host`)
- `og:site_name`: Lyfe Hospitality
- No `og:image`, no `twitter:image`, no `<link rel="icon">`

**Group contact (HTML)**
- Email: `me@dimitri.app`
- Location: Norwalk, Connecticut
- Footer: `© 2026 Lyfe Hospitality · Norwalk, CT`

**Brand hrefs (re-verified)**
- `https://pizzalyfe.com` → 200
- `https://lyfe.cafe` → 200
- `https://organikact.com` → 200
- `https://quattropazzi.com` → 307 → `https://www.quattropazzi.com/` 200
- `https://sweetlyfe.app` → 200
- `https://lyfehospitality.com` → **fail, host not known**

**Sweet Lyfe house copy (sweetlyfe.app)**
- Title: Sweet Lyfe — Greek Frozen Yogurt & Gelato in Westport, CT
- Counts: frozen yogurt 21, gelato 17, greek 20, ice cream **0**

**CSS**
- `/_next/static/css/451957cdc20b1cea.css?dpl=dpl_G2BU8a7kKpicBo7dEoDgGaRinNbq`
- `/*! tailwindcss v4.2.0 */` · 12,454 bytes · brace-balanced · **no `md:flex`**

**HTML classes missing from that CSS (abridged):** `md:flex`, `sm:grid-cols-3`, `lg:grid-cols-3`, `max-w-7xl`, `px-6`, `p-8`, `gap-5`, `font-extrabold`, `text-sm`, `text-white`, `bg-white`, `rounded-3xl`, `backdrop-blur-md`, `top-0`, … (107 total)

---

## Appendix B — Screenshot index

Sources: `/workspace/ux-review/dimitri-app/`. Copies + crops: `/workspace/design/dimitri-app/shots/`.

| File | What it proves |
|---|---|
| `01-home.png` | Unstyled desktop home; emerald “lyfe.”; blue UA links; Sweet Lyfe “ice cream” blurb |
| `02-mobile.png` | Mobile: no padding, no nav, green CTA box with blue link text |
| `03-brands.png` | Long scroll; forest band; five cards; contact; footer |
| `03-brands-cards-faded-desktop.png` | `.reveal` fade / incomplete paint on cards |
| `04-mobile-brands-faded.png` | Mobile faded cards; low-contrast gray type |
| `05-nojs-content-invisible.png` | Huge empty cream where reveal sections should be; forest band still paints |
| `06-nav-links-missing-header.png` | Header: no nav, overlapping H1, illegible Get in Touch |
| `crop-header-nav-missing.png` | Header-only proof of missing `md:flex` |
| `crop-hero.png` | Hero clamp + emerald word |
| `crop-philosophy-forest.png` | Intended forest band (`#06301f`) |
| `crop-nojs-reveal-invisible.png` | Opacity-0 reveal gap |
| `crop-mobile-hero.png` | Mobile hero + CTA |

---

## Appendix C — Intended vs live paint (one screen)

| Region | Intended | Live (2026-09-01) |
|---|---|---|
| Page | Mint-cream `#f7faf5`, Inter ink | Canvas OK (body CSS) |
| Header | Glass + 4 nav links + white-on-ink pill | No nav; ink-on-ink blob; UA-blue “Lyfe” |
| Hero | Sora 800 / 0.92 / clamp, emerald *lyfe.* | Clamp + emerald OK; lines overlap; blue link CTAs |
| Stats / cards / contact | Paper `rounded-3xl` grid | Unpadded stack, blue titles, or **invisible** (`.reveal`) |
| Philosophy / footer | Forest `#06301f` | Band color OK; inner type may be reveal-hidden |
| Overall | CT group hub | Broken Tailwind content graph, not a different brand |

