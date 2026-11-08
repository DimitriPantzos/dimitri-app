# Dimitri Pantzos — Personal Site Design System (PROPOSED redesign, 2026-11-08)

> Status: **PROPOSED, not live.** Previous live-derived file preserved verbatim at `DESIGN.live-before-2026-11-08.md`.
> Build brief: `/workspace/dimitri-personal-site/IMPLEMENTATION-BRIEF.md`. Nothing here authorizes merge, publish, DNS, or env changes.
> Personal brand, not group redesign: **Dimitri Pantzos** is the subject; Lyfe Hospitality and the five restaurants are his work.

## 0. Evidence: CURRENT live vs NEW proposed
| Item | CURRENT live (curl 2026-11-08 12:57 PM ET) | NEW proposed |
|---|---|---|
| Subject | `<title>Lyfe Hospitality \| Bringing Good Food to Lyfe</title>`; group hub | Personal site: "Dimitri Pantzos" |
| CSS | `/_next/static/css/ef550cf2c4cfadca.css` (Tailwind v4) | Same stack; new tokens below |
| Fonts | Sora 400–800 + Inter 400–600 (Google) | Keep **Sora** (display) + **Inter** (text) — continuity with live identity |
| Canvas | `#f7faf5` mint-cream | `--paper #f6f1e7` warm tile cream (sampled from portrait wall/tile) |
| Ink | `#0a1f16` | `--ink #14202e` navy-black (apron navy, darkened) |
| Accent | emerald `#0f9d63`, forest `#06301f` | `--ochre #b8742a` (apron straps) for rules/marks only; `--ochre-text #8a5418` for small text; `--navy #23344d` for slab; emerald retired from personal site |
| Nav | `#brands #about #leadership #contact` anchors | Routes `/`, `/about`, `/press`, `/#work`, `/#contact` |
| Contact | `mailto:` (exact from live HTML), `tel:+12035511003`, "Norwalk, Connecticut" | Same values, unchanged |
| Logos | `/logos/{pizza-lyfe,lyfe-cafe,organika,quattro-pazzi,sweet-lyfe}.png` | Same files, same destinations |

## 1. Visual Theme & Atmosphere
A quiet magazine profile of a working restaurateur. One real photograph of him at Sweet Lyfe, his name set large, plain sentences about what he built, and his five restaurants as a tidy index. Warm cream page, navy ink, a single ochre thread. Feels like a printed feature page, not a startup landing page, not a restaurant menu.
Not: SaaS gradients, glass, dashboards, stat counters ("05 / 100% / CT" removed), card grids everywhere, emoji, restaurant palettes copied (no pizza rosso, no Sweet Lyfe blue as a theme).

## 2. Color (NEW proposed)
| Token | Hex | Role | Contrast (WCAG 2.x, computed in Python 2026-11-08) |
|---|---|---|---|
| `--paper` | `#f6f1e7` | page | — |
| `--paper-2` | `#ede5d6` | alt band, portrait mat | — |
| `--ink` | `#14202e` | headings/body | 14.6:1 on paper |
| `--ink-soft` | `#4a5563` | secondary text | 6.7:1 |
| `--rule` | `#d9cfbd` | hairlines 1px | decorative |
| `--navy` | `#23344d` | one full-bleed slab (contact) | paper on navy 11.2:1 |
| `--ochre` | `#b8742a` | 2–3px rules, index numerals ≥24px, focus ring | 3.3:1 → never small text |
| `--ochre-text` | `#8a5418` | eyebrows/links small | 5.5:1 |
| `--on-navy-accent` | `#e2b06b` | eyebrow on navy | 6.4:1 |
Links: `--ink` with 1px `--ochre` underline offset 4px; hover underline 2px. No blue UA links ever.

## 3. Typography (NEW proposed, same families as live)
| Role | Spec |
|---|---|
| Name H1 (home) | Sora 700, `clamp(2.75rem, 10.5vw, 6.5rem)`, line-height 0.98, tracking -0.03em, two lines "Dimitri / Pantzos". At 375: 39.4px→ floor 44px (2.75rem); "Pantzos" ≈ 7 glyphs ≈ 210px < 327px content width. No overflow, no hyphenation (`hyphens:none; overflow-wrap:normal`). |
| Page H1 (about/press) | Sora 700, `clamp(2.25rem, 6vw, 4rem)`, lh 1.05 |
| H2 | Sora 600, `clamp(1.625rem, 3.5vw, 2.5rem)`, lh 1.15 |
| H3 / restaurant name | Sora 600, 1.25rem |
| Lede | Inter 400, `clamp(1.125rem, 1.6vw, 1.375rem)`, lh 1.5, max 34ch |
| Body | Inter 400, 1.0625rem (17px), lh 1.65, max 62ch |
| Eyebrow | Inter 600, 0.75rem, uppercase, tracking 0.14em, `--ochre-text` |
| Credit/meta | Inter 400, 0.875rem, `--ink-soft` |
Weights loaded: Sora 600/700, Inter 400/600 only.

## 4. Components
- **Header**: 64px, paper bg, bottom 1px `--rule` on scroll. Left wordmark "Dimitri Pantzos" Sora 600 18px. Right: About · Work · Press · Contact (Inter 600 15px). <768: "Menu" text button opens full-screen paper sheet, links Sora 600 32px, Esc/close returns focus.
- **Portrait figure**: `<picture>` AVIF/WebP/JPEG, 0 radius, 1px `--rule` frame offset 12px bottom-right in `--paper-2` (desktop only). Caption "At Sweet Lyfe, Westport." meta style.
- **Work index row** (not cards): grid `[numeral 48px][logo 64px][name+descriptor][place][→]`; 1px `--rule` between rows; whole row is the `<a>` to restaurant domain, `target` same tab, hover: background `--paper-2`, arrow shifts 4px. Numeral Sora 600 28px `--ochre`.
- **Press item**: publication eyebrow, title H3 linked, byline+issue meta, 2–3 sentence original summary, "Read at {publisher} ↗" link (`rel="noopener"` new tab).
- **Contact slab**: full-bleed `--navy`, paper text, three rows Email/Phone/Based; values Sora 600 clamp(1.25rem,2.5vw,1.75rem).
- **Buttons**: only two: primary = ink fill, paper text, 48px tall, 0 radius, padding 0 24px; secondary = text link with ochre underline.

## 5. Layout
Container 1200px max, gutters 20px (<768), 32px (768–1199), 48px (≥1200). 12-col grid desktop. Section padding `clamp(64px, 10vw, 128px)` block. Asymmetric: text cols 1–6, portrait cols 7–12 on home hero; About uses portrait cols 1–5 sticky, text 7–12.

## 6. Depth
Flat. No shadows except focus. Depth from paper vs paper-2 bands, the offset frame, and hairlines.

## 7. Do / Don't
Do: real portrait large; plain sentences; credit sources understatedly; keep live contact values exact; keep logos & domains (sweetlyfe.app).
Don't: invent awards, roles, dates, quotes; no family/child/health details; no stat counters; no `.reveal` opacity-0 content (content must paint without JS); no sweetlyfe.com; no Cafe Fairfield; no awards in this build; no invented beliefs; no hard-coded location counts; no publisher photos/scans.

## 8. Responsive
375/430: text first (eyebrow, H1, lede, buttons), then portrait at `aspect-ratio:4/5; object-fit:cover` full width — never image-first, never max-height that changes ratio. Same rule on /about. 768: two columns 6/6, portrait 4:5. 1440: 6/6, portrait 4:5 sized by column width. 1920: container capped 1200, no horizontal overflow, paper bg full-bleed.

## 9. Agent Prompt
"Build a personal editorial site for Dimitri Pantzos: warm cream paper #f6f1e7, navy-black ink #14202e, one ochre #b8742a thread, Sora headlines + Inter text. Lead with his real Sweet Lyfe portrait, large but never pushing name/intro below the fold on a 375px phone. Restaurants are a hairline-ruled numbered index linking to their own sites, not cards. Press is two credited original summaries. No stats, no gradients, no glass, no invented facts."
