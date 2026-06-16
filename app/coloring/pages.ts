export interface ColoringPage {
  id: string;
  name: string;
  emoji: string;
  /** Inline SVG line art for built-in pages. */
  svg?: string;
  /** Data URL for user-uploaded pages. */
  src?: string;
  /** Marks a page added by the user (stored in their browser). */
  uploaded?: boolean;
}

const open = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" fill="#ffffff"/><g fill="#ffffff" stroke="#1a1a1a" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">`;
const close = `</g></svg>`;

const duck =
  open +
  `<circle cx="120" cy="120" r="55"/>
  <line x1="120" y1="42" x2="120" y2="14"/>
  <line x1="198" y1="120" x2="232" y2="120"/>
  <line x1="64" y1="64" x2="42" y2="42"/>
  <line x1="176" y1="64" x2="198" y2="42"/>
  <line x1="64" y1="176" x2="42" y2="198"/>
  <path d="M560 150 q-42 0 -42 38 q-32 4 -26 36 l182 0 q22 -30 -10 -42 q-4 -46 -56 -40 q-20 -26 -48 -26 z"/>
  <path d="M0 560 C120 520 240 600 400 560 C560 520 680 600 800 560 L800 800 L0 800 Z"/>
  <path d="M120 650 q40 -26 80 0" fill="none"/>
  <path d="M520 670 q40 -26 80 0" fill="none"/>
  <path d="M588 442 l58 -24 l-10 46 z"/>
  <ellipse cx="430" cy="470" rx="175" ry="120"/>
  <path d="M360 432 q-72 50 10 96 q72 -6 60 -62 z"/>
  <circle cx="290" cy="300" r="95"/>
  <path d="M118 300 q-22 18 0 42 l86 -8 q6 -18 0 -34 z"/>
  <circle cx="300" cy="280" r="15"/>
  <circle cx="303" cy="282" r="6" fill="#1a1a1a" stroke="none"/>` +
  close;

const cat =
  open +
  `<path d="M250 232 L208 88 L352 190 Z"/>
  <path d="M550 232 L592 88 L448 190 Z"/>
  <path d="M260 206 L236 130 L312 186 Z" fill="none"/>
  <path d="M540 206 L564 130 L488 186 Z" fill="none"/>
  <circle cx="400" cy="330" r="175"/>
  <path d="M252 470 q-42 180 40 292 l216 0 q82 -112 40 -292 z"/>
  <path d="M560 700 q142 -20 112 -150 q-10 -52 -56 -42 q36 26 20 72 q-20 60 -112 70 z"/>
  <ellipse cx="335" cy="320" rx="30" ry="38"/>
  <ellipse cx="465" cy="320" rx="30" ry="38"/>
  <circle cx="335" cy="326" r="13" fill="#1a1a1a" stroke="none"/>
  <circle cx="465" cy="326" r="13" fill="#1a1a1a" stroke="none"/>
  <path d="M384 372 l32 0 l-16 18 z" fill="#1a1a1a" stroke="#1a1a1a"/>
  <path d="M400 390 l0 22" fill="none"/>
  <path d="M400 412 q-26 22 -52 4" fill="none"/>
  <path d="M400 412 q26 22 52 4" fill="none"/>
  <path d="M300 360 l-122 -20" fill="none"/>
  <path d="M300 386 l-126 10" fill="none"/>
  <path d="M500 360 l122 -20" fill="none"/>
  <path d="M500 386 l126 10" fill="none"/>
  <path d="M330 545 q70 92 140 0" fill="none"/>` +
  close;

const butterfly =
  open +
  `<path d="M400 800 L400 690" fill="none"/>
  <path d="M400 690 q-60 0 -80 -50 q70 -10 80 30 q10 -40 80 -30 q-20 50 -80 50 z"/>
  <ellipse cx="400" cy="380" rx="26" ry="150"/>
  <path d="M388 236 q-30 -52 -72 -56" fill="none"/>
  <path d="M412 236 q30 -52 72 -56" fill="none"/>
  <circle cx="314" cy="178" r="11"/>
  <circle cx="486" cy="178" r="11"/>
  <path d="M378 300 q-180 -120 -270 -38 q-62 60 28 130 q92 60 244 8 z"/>
  <path d="M422 300 q180 -120 270 -38 q62 60 -28 130 q-92 60 -244 8 z"/>
  <path d="M380 420 q-150 18 -210 110 q-30 72 60 92 q92 10 168 -92 z"/>
  <path d="M420 420 q150 18 210 110 q30 72 -60 92 q-92 10 -168 -92 z"/>
  <circle cx="198" cy="322" r="34" fill="none"/>
  <circle cx="602" cy="322" r="34" fill="none"/>
  <circle cx="230" cy="522" r="28" fill="none"/>
  <circle cx="570" cy="522" r="28" fill="none"/>` +
  close;

const fish =
  open +
  `<circle cx="120" cy="150" r="22"/>
  <circle cx="178" cy="96" r="14"/>
  <circle cx="92" cy="86" r="10"/>
  <path d="M0 720 q200 -40 400 0 q200 40 400 0 L800 800 L0 800 Z"/>
  <path d="M130 718 q-30 -120 18 -190 q-26 86 14 188" fill="none"/>
  <path d="M690 716 q40 -128 -12 -210 q42 96 -6 210" fill="none"/>
  <ellipse cx="420" cy="400" rx="180" ry="112"/>
  <path d="M598 400 l132 -82 l0 164 z"/>
  <path d="M380 296 q40 -72 112 -40 q-10 30 -32 56 z"/>
  <path d="M380 504 q40 72 112 40 q-10 -30 -32 -56 z"/>
  <path d="M322 322 q-30 80 0 158" fill="none"/>
  <circle cx="300" cy="370" r="26"/>
  <circle cx="300" cy="372" r="11" fill="#1a1a1a" stroke="none"/>
  <path d="M248 432 q42 30 92 14" fill="none"/>
  <path d="M392 360 q26 26 0 52" fill="none"/>
  <path d="M452 350 q26 30 0 62" fill="none"/>
  <path d="M512 360 q22 26 0 52" fill="none"/>
  <path d="M422 412 q26 26 0 52" fill="none"/>` +
  close;

const flower =
  open +
  `<circle cx="650" cy="135" r="58"/>
  <line x1="650" y1="60" x2="650" y2="34"/>
  <line x1="724" y1="135" x2="752" y2="135"/>
  <line x1="596" y1="80" x2="576" y2="60"/>
  <line x1="704" y1="80" x2="724" y2="60"/>
  <path d="M0 680 q120 -42 240 0 q120 42 240 0 q120 -42 320 0 L800 800 L0 800 Z"/>
  <path d="M388 700 L388 442 L412 442 L412 700 Z"/>
  <path d="M410 560 q92 -10 122 -72 q-72 0 -122 40 z"/>
  <path d="M390 604 q-92 -10 -122 -72 q72 0 122 40 z"/>
  <circle cx="400" cy="252" r="55"/>
  <circle cx="476" cy="284" r="55"/>
  <circle cx="508" cy="360" r="55"/>
  <circle cx="476" cy="436" r="55"/>
  <circle cx="400" cy="468" r="55"/>
  <circle cx="324" cy="436" r="55"/>
  <circle cx="292" cy="360" r="55"/>
  <circle cx="324" cy="284" r="55"/>
  <circle cx="400" cy="360" r="70"/>` +
  close;

const rocket =
  open +
  `<circle cx="640" cy="178" r="68"/>
  <ellipse cx="640" cy="178" rx="112" ry="30" fill="none"/>
  <path d="M150 150 a62 62 0 1 0 34 104 a48 48 0 1 1 -34 -104 z"/>
  <path d="M120 470 l14 26 l26 14 l-26 14 l-14 26 l-14 -26 l-26 -14 l26 -14 z"/>
  <path d="M250 600 l10 20 l20 10 l-20 10 l-10 20 l-10 -20 l-20 -10 l20 -10 z"/>
  <path d="M700 560 l10 20 l20 10 l-20 10 l-10 20 l-10 -20 l-20 -10 l20 -10 z"/>
  <path d="M400 198 q72 60 72 204 q0 90 -30 152 l-84 0 q-30 -62 -30 -152 q0 -144 72 -204 z"/>
  <circle cx="400" cy="330" r="42"/>
  <circle cx="400" cy="330" r="24" fill="none"/>
  <path d="M340 452 q-62 30 -72 112 q52 -10 82 -42 z"/>
  <path d="M460 452 q62 30 72 112 q-52 -10 -82 -42 z"/>
  <path d="M368 418 l64 0" fill="none"/>
  <path d="M360 556 q12 62 40 92 q28 -30 40 -92 q-20 26 -40 10 q-20 16 -40 -10 z"/>` +
  close;

export const BUILTIN_PAGES: ColoringPage[] = [
  { id: "duck", name: "Ducky Pond", emoji: "🦆", svg: duck },
  { id: "cat", name: "Happy Cat", emoji: "🐱", svg: cat },
  { id: "butterfly", name: "Butterfly", emoji: "🦋", svg: butterfly },
  { id: "fish", name: "Little Fish", emoji: "🐟", svg: fish },
  { id: "flower", name: "Sunny Flower", emoji: "🌸", svg: flower },
  { id: "rocket", name: "Space Rocket", emoji: "🚀", svg: rocket },
];

export function svgToDataUrl(svg: string): string {
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
