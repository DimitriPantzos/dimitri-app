import { ArrowUpRight } from "lucide-react";
import { pressFeatures, type PressFeature } from "@/lib/site";

function Feature({
  feature,
  heading,
}: {
  feature: PressFeature;
  heading: "h2" | "h3";
}) {
  const Title = heading;
  return (
    <article className="flex h-full flex-col rounded-3xl border border-[#0a1f16]/10 bg-white p-7 md:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0a7d4d]">
        Magazine feature
      </p>
      <p className="mt-5 text-sm font-semibold leading-relaxed text-[#0a1f16]/75">
        {feature.publication}
      </p>
      <p className="mt-1 text-sm font-medium text-[#0a1f16]/70">{feature.issue}</p>
      <Title className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mt-5 text-balance">
        {feature.title}
      </Title>
      <p className="mt-3 text-sm font-semibold text-[#0a1f16]">By {feature.byline}</p>
      <p className="mt-4 text-base leading-relaxed text-[#0a1f16]/80 text-pretty">
        {feature.summary}
      </p>
      {feature.locationNote ? (
        <p className="mt-4 text-sm leading-relaxed text-[#0a1f16]/70 text-pretty">
          {feature.locationNote}
        </p>
      ) : null}
      <div className="mt-auto pt-8">
      <a
        href={feature.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0a7d4d] px-6 py-3 text-sm font-bold text-white hover:bg-[#06301f] transition-colors sm:w-fit"
      >
        Read feature
        <ArrowUpRight size={16} aria-hidden="true" />
        <span className="sr-only">
          : {feature.title}, {feature.publication} (opens in a new tab)
        </span>
      </a>
      </div>
    </article>
  );
}

export function PressFeatures({ heading = "h2" }: { heading?: "h2" | "h3" }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {pressFeatures.map((feature) => (
        <Feature key={feature.href} feature={feature} heading={heading} />
      ))}
    </div>
  );
}
