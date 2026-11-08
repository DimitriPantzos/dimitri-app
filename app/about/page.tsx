import type { Metadata } from "next";
import Link from "next/link";
import { BrandGrid } from "@/components/brand-grid";
import { ContactGrid } from "@/components/contact-grid";
import { SiteShell } from "@/components/site-shell";
import { pageMetadata } from "@/lib/metadata";

/**
 * Biography sources, in order. Do not extend past these.
 *
 * Westport Lifestyle, October 2026, “The Sweet Lyfe,” Sara Gaynes Levy
 * (https://citylifestyle.com/articles/the-sweet-lyfe):
 * - Owner of Pizza Lyfe, Lyfe Cafe, and Sweet Lyfe in Westport.
 * - Family owned Fairfield’s Quattro Pazzi, a diner, food service at a
 *   Norwalk golf course, and a Stamford Quattro Pazzi before he finished
 *   elementary school. After school in the restaurants; scrubbing mussels
 *   at 10. Junior year of high school at Rebeccas in Greenwich.
 * - 2015, months after high school: opened Organika in Southport with his
 *   aunt Kathy. Less than a year later he opened New Canaan himself, at 19.
 *   Ridgefield followed. Sold New Canaan and Ridgefield. Then Violife.
 * - Uncle convinced him to see the Pizza Lyfe space; they signed the lease.
 *   Opened December 2022. He said the name came from “a fresh start at life.”
 *   Sourdough, whole-grain crust. Readers Choice “Best Pizza” for the three
 *   years leading up to that profile. A Milford Pizza Lyfe followed.
 * - About a year later, the cafe across the street became Lyfe Cafe: strong
 *   cold brew and a bacon, egg, and cheese. Croissants, free-range eggs,
 *   bacon. Salmon bowl by request. Dot cakes while they were trending.
 * - Sweet Lyfe next door: Greek-style frozen yogurt and candy, bases made
 *   in-house, pasteurization machine requiring a state license.
 * - Addresses: Pizza Lyfe 833 Post Rd. E; Sweet Lyfe next door; Lyfe Cafe
 *   793 Post Rd. E.
 *
 * Already on this site, and not re-attributed to the magazine: president of
 * Lyfe Hospitality; foodservice expansion for Dr. Praeger’s, Daring, and
 * Violife; the five current brand descriptions.
 *
 * Omitted on purpose: family health, spouse, and child, even where the
 * profile mentions them.
 */

export const metadata: Metadata = pageMetadata({
  title: "About Dimitrios Pantzos",
  description:
    "Dimitrios Pantzos is president of Lyfe Hospitality. A Connecticut restaurant story from family dining rooms and Organika to Pizza Lyfe, Lyfe Cafe, and Sweet Lyfe.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <article>
        <header className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-4">
              <div
                className="flex aspect-square w-full max-w-xs items-center justify-center rounded-3xl bg-[#06301f]"
                aria-hidden="true"
              >
                <span className="font-display text-7xl font-extrabold text-[#16c47f]">
                  DP
                </span>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0a7d4d] mb-3">
                About
              </p>
              <h1 className="font-display text-[clamp(2.75rem,8vw,4.75rem)] font-extrabold tracking-tight text-balance">
                Dimitrios Pantzos
              </h1>
              <p className="mt-4 text-sm font-bold uppercase tracking-wide text-[#0a7d4d]">
                President, Lyfe Hospitality
              </p>
              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[#0a1f16]/80 text-pretty">
                Dimitrios Pantzos builds restaurants around the foods people
                already love. He leads Lyfe Hospitality, a Connecticut group
                that brings together Pizza Lyfe, Lyfe Cafe, Organika Kitchen,
                Quattro Pazzi, and Sweet Lyfe.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/press"
                  className="inline-flex min-h-11 items-center rounded-full bg-[#0a7d4d] px-6 py-3 text-sm font-bold text-white hover:bg-[#06301f] transition-colors"
                >
                  Read the press
                </Link>
                <a
                  href="mailto:me@dimitri.app"
                  className="inline-flex min-h-11 items-center rounded-full border-2 border-[#0a1f16]/15 px-6 py-3 text-sm font-bold hover:border-[#0a7d4d] hover:text-[#0a7d4d] transition-colors"
                >
                  me@dimitri.app
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0a7d4d] mb-3">
              The story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
              From the dining room, and back again.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#0a1f16]/80 text-pretty">
              The restaurant story follows Sara Gaynes Levy&apos;s October 2026
              profile in Westport Lifestyle,{" "}
              <a
                href="https://citylifestyle.com/articles/the-sweet-lyfe"
                className="font-semibold text-[#0a7d4d] underline decoration-[#0a7d4d]/40 underline-offset-4 hover:decoration-[#0a7d4d]"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Sweet Lyfe
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>

            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mt-12 mb-4">
              A restaurant childhood
            </h3>
            <div className="space-y-5 text-lg leading-relaxed text-[#0a1f16]/80">
              <p className="text-pretty">
                His family was already in food. They owned Quattro Pazzi in
                Fairfield, ran a diner, operated the food service at a Norwalk
                golf course, and expanded Quattro Pazzi to Stamford before he
                finished elementary school. He spent the afternoons after
                school in those restaurants — scrubbing mussels at 10 — even
                though his family encouraged a life outside the business. By
                his junior year of high school he was in the kitchen at
                Rebeccas in Greenwich.
              </p>
              <p className="text-pretty">
                “I just wanted to be in the kitchen and learn,” he told
                Westport Lifestyle. “I loved making customers happy, creating
                experiences, seeing them enjoy what you put together.”
              </p>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mt-12 mb-4">
              Organika, then a turn through foodservice
            </h3>
            <div className="space-y-5 text-lg leading-relaxed text-[#0a1f16]/80">
              <p className="text-pretty">
                In 2015, months after he graduated from high school, he and his
                aunt Kathy opened Organika, a vegan eatery in Southport. Less
                than a year later he opened a New Canaan location himself, at
                19. A Ridgefield restaurant followed. He has called the concept
                a great, wild ride, and an expensive one to run. When a buyer
                wanted the New Canaan and Ridgefield locations, he sold them
                and went to work at Violife, the vegan cheese company.
              </p>
              <p className="text-pretty">
                The years around that move were a foodservice chapter this site
                already describes: strategic expansion for Dr. Praeger&apos;s,
                Daring, and Violife across restaurant chains, K-12 programs,
                and hospitality operators, from distribution and commercial
                systems to getting those brands into kitchens.
              </p>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mt-12 mb-4">
              Pizza Lyfe
            </h3>
            <div className="space-y-5 text-lg leading-relaxed text-[#0a1f16]/80">
              <p className="text-pretty">
                The dining room pulled him back. The Post Road East space that
                became Pizza Lyfe was available, and his uncle convinced him to
                come see it. He loved the building and the area. The two of
                them signed the lease. Pizza Lyfe opened in December 2022. He
                has said the name came from a fresh start at life.
              </p>
              <p className="text-pretty">
                The pizza is built on a sourdough crust with whole grain in the
                dough. Westport Lifestyle reported that it had won the
                magazine&apos;s Readers Choice “Best Pizza” for the three years
                leading up to that profile. Another Pizza Lyfe, in Milford,
                followed.
              </p>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mt-12 mb-4">
              Lyfe Cafe
            </h3>
            <div className="space-y-5 text-lg leading-relaxed text-[#0a1f16]/80">
              <p className="text-pretty">
                About a year after Pizza Lyfe opened, the cafe across the
                street became available. He wanted a very strong cold brew and
                a good bacon, egg, and cheese. That was the concept for Lyfe
                Cafe. He learned to make croissants and sourced free-range eggs
                and bacon, then kept the menu moving with the people who eat
                there: a salmon bowl because guests asked for one, and dot
                cakes when those were what everyone wanted.
              </p>
              <p className="text-pretty">
                “At the end of the day, I’m here for the customers,” he said.
                “If someone says they want something, I’ll find a way to
                incorporate it.”
              </p>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mt-12 mb-4">
              Sweet Lyfe
            </h3>
            <div className="space-y-5 text-lg leading-relaxed text-[#0a1f16]/80">
              <p className="text-pretty">
                Sweet Lyfe is next door to Pizza Lyfe. In that profile it is
                the newest of the three Westport rooms: Greek-style frozen
                yogurt and candy, made the way he wanted it rather than as a
                copy of the shops lining up in New York. The bases are made
                in-house. He brought in a pasteurization machine, which
                required a license from the state, so the yogurt could be
                authentically Greek.
              </p>
              <p className="text-pretty">
                Pizza Lyfe is at 833 Post Road East. Sweet Lyfe is next door.
                Lyfe Cafe is across the street at 793 Post Road East.
              </p>
              <p className="text-pretty">
                “I love food,” he told the magazine. “I love creating
                experiences and good environments for people.”
              </p>
            </div>
          </div>
        </div>

        <section className="bg-[#06301f] text-[#eaf3ec] mt-16" aria-label="The brands">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#16c47f] mb-3">
              The group
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl text-balance">
              Five concepts, one table.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#eaf3ec]/85 text-pretty">
              Lyfe Hospitality also presents Organika Kitchen and Quattro
              Pazzi alongside the Westport restaurants in that profile.
              Quattro Pazzi is the Fairfield trattoria his family owned. Each
              concept keeps its own room and its own menu.
            </p>
            <div className="mt-12">
              <BrandGrid showDetails />
            </div>
            <p className="mt-8">
              <Link
                href="/press"
                className="inline-flex min-h-11 items-center text-sm font-bold text-[#16c47f] underline decoration-[#16c47f]/50 underline-offset-4 hover:decoration-[#16c47f]"
              >
                Magazine features on this work
              </Link>
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28" aria-labelledby="about-contact">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0a7d4d] mb-3">
            Say hello
          </p>
          <h2
            id="about-contact"
            className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-14"
          >
            The same door
            <br />
            as the front page.
          </h2>
          <ContactGrid />
        </section>
      </article>
    </SiteShell>
  );
}
