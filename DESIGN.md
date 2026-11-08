# Lyfe Hospitality — dimitri.app

Visual language taken from the live site at https://dimitri.app on November 8, 2026 (Vercel project `dimitri-app`). About and Press extend this system. They do not introduce a second brand.

## Visual Theme

Bright, grounded, and editorial. A paper-green page, near-black forest ink, and one confident green. The voice is a hospitality group, not a software template: large Sora headlines, short sentences, white cards, and a forest band when the page needs a pause. Identity is the word “Lyfe” plus a leaf in a green circle, or the initials DP on forest. No stock portrait, no publisher logos, no magazine scans.

## Color Palette

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Paper | `--background` | `#f7faf5` | Page background |
| Ink | `--foreground` | `#0a1f16` | Headlines and body |
| Forest | `--forest` | `#06301f` | Philosophy band, footer, monogram tile |
| Mist | `--paper` | `#ffffff` | Cards and the stat band |
| Display green | `--emerald` | `#0f9d63` | Oversized words only (the “lyfe.” in the hero, stat figures, “delicious.”) |
| Action green | — | `#0a7d4d` | Buttons, small labels, links, leaf circle. White text on this green clears WCAG AA |
| Bright leaf | `--emerald-bright` | `#16c47f` | Accents on forest (philosophy highlight, DP initials, footer hover) |
| Focus lime | `--lime` | `#c8f169` | Focus ring only |
| Forest text | — | `#eaf3ec` | Text on forest |

Body copy on paper stays at least 75% ink. Do not set small text in `#0f9d63`; that green is for display sizes (about 24px and up). White button labels sit on `#0a7d4d` or `#0a1f16`, with hover toward forest.

## Typography

- Display: Sora, weights 700–800, tight tracking (`-0.02em`). Hero uses `clamp` so lines do not overflow a phone.
- Body: Inter, 400–600. Long copy is `text-lg` with `text-pretty` and a `max-w-3xl` measure.
- Labels: 14px, bold, uppercase, wide tracking, action green.
- Do not add a serif, a script, or a second display face.

## Components

- Sticky header: paper at 85% with blur, hairline border, leaf + “Lyfe” wordmark, text links, black “Get in Touch” pill, circular menu button below `lg`.
- Mobile menu: right-hand sheet, forest scrim, 18px links, Escape closes, focus moves into the sheet and returns to the button.
- Primary pill: action green, white label, arrow when the action leaves the section. Minimum height 44px.
- Secondary pill: 2px ink border, transparent fill, green border and label on hover.
- Cards: white, 24px radius, 1px ink border at 10%, padding 32px. Hover lifts 6px and warms the border. Brand cards carry the real logo files in `/public/logos`.
- Press cards: same card, no fake logo. Kicker “Magazine feature”, publication, issue, title, byline, one- or two-line summary, “Read feature” to the publisher.
- Monogram: square forest tile, “DP” in bright leaf. This is the portrait. Do not invent a photo.
- Stats: three columns, giant display-green figures, quiet uppercase labels.
- Contact: three cards — mailto `me@dimitri.app`, tel `+1 203-551-1003`, location “Norwalk, Connecticut”. No form.
- Footer: forest bar, wordmark, About / Press / Contact, copyright.

## Layout

- Content width `max-w-7xl` with `px-6`.
- Vertical rhythm: `py-20` on the phone, `md:py-28` or `md:py-32` for major bands.
- Homepage order: hero, stats, brands, philosophy (`#about`), leadership (`#leadership`), press (`#press`), contact (`#contact`).
- About (`/about`) and Press (`/press`) use the same header and footer. Brands and Contact in the nav point back to `/#brands` and `/#contact`.
- One `h1` per page. Sections step to `h2`, then `h3`.
- Hash targets use `scroll-margin-top` so the sticky header does not cover them.

## Depth

Flat paper, then white cards one step up. Hover shadow is green-tinted and tight (`0 24px 48px -24px`). The forest band is a full-bleed color change, not a gradient or a photo overlay. Motion is limited to color, a small lift, and the arrow nudge. `.reveal` stays visible without JavaScript. Respect `prefers-reduced-motion`.

## Do / Don't

Do:

- Reuse paper, forest, action green, Sora, and the existing logo files.
- Keep public contact as mailto and tel.
- Link press to the publisher. Name the publication, issue, byline, and a short original summary.
- Say where the November/December 2026 feature sits in the issue (printed page 80; Issuu pages 82–83) because that link opens the whole magazine.
- Keep training (`/training`) and the coloring book (`/coloring`, eveanna host) on their own layouts.

Don't:

- Restyle the site as a generic luxury template, dark-mode dashboard, or restaurant-theme fork.
- Invent portraits, press logos, awards, locations, opening dates, head counts, or testimonials.
- Reprint magazine pages, screenshots, or photography. Westport Lifestyle photos are credited to Bevy Rutledge and stay on that site.
- Add a contact form, accounts, or new private contact details.
- Embed Issuu, City Lifestyle, or other third-party players.
- Use `#0f9d63` for small text or for white-on-green buttons.

## Responsive

- Phone reference: 390×844. Desktop reference: 1440×900.
- Nav links collapse into the sheet below `lg` so five items never overflow the bar.
- Press cards stack in one column, then sit side by side from `md`.
- Buttons go full width on a phone when they are the only action in a card (`w-full sm:w-fit`).
- No horizontal scroll. Headlines wrap with `text-balance` or an explicit line break already in the hero.
- Focus is a forest outline plus a lime ring, visible on paper and on forest.

## Agent Prompt Guide

When editing dimitri.app, match this file and `app/globals.css` before inventing components. The public site is Lyfe Hospitality for Dimitrios Pantzos at https://dimitri.app. About and Press are the biography and the two verified features only:

1. “The Sweet Lyfe,” Westport Lifestyle, October 2026, Sara Gaynes Levy — https://citylifestyle.com/articles/the-sweet-lyfe
2. “Building a Better Lyfe,” Westport, Weston & Wilton (Westport Magazine), November/December 2026, Lily Caplan, issue published November 3, 2026 — https://issuu.com/mofflymedia/docs/westport_weston_wilton_-_november_december_2026

Do not swap in the separate farmers-market chef item. Do not publish family health, home details, or a spouse or child. Keep production deploys and DNS out of routine content edits; preview on the existing Vercel project. After UI changes, check 390 and 1440, keyboard focus, heading order, the mailto and tel links, and both “Read feature” hrefs.
