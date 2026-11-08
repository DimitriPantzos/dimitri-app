import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { brands } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function BrandGrid({ showDetails = false }: { showDetails?: boolean }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {brands.map((brand, i) => (
        <Reveal key={brand.name} delay={(i % 3) * 80}>
          <a
            href={brand.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${brand.name} (opens in a new tab)`}
            className="group flex h-full flex-col rounded-3xl border border-[#0a1f16]/10 bg-white p-8 text-[#0a1f16] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0a7d4d] hover:shadow-[0_24px_48px_-24px_rgba(10,125,77,0.35)]"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-sm font-bold text-[#0a1f16]/30">
                0{i + 1}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f6ee] text-[#0a1f16]/40 transition-colors group-hover:bg-[#0a7d4d] group-hover:text-white">
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
            <Image
              src={brand.logo}
              alt=""
              width={200}
              height={100}
              className="h-14 w-auto object-contain object-left mb-7"
            />
            <h3 className="font-display text-2xl font-bold tracking-tight mb-1.5">
              {brand.name}
            </h3>
            <p className="text-sm font-bold uppercase tracking-wide text-[#0a7d4d] mb-4">
              {brand.tagline}
            </p>
            <p className="text-[15px] leading-relaxed text-[#0a1f16]/75 text-pretty">
              {brand.description}
            </p>
            {showDetails && brand.detail ? (
              <p className="mt-4 text-[15px] leading-relaxed text-[#0a1f16]/75 text-pretty">
                {brand.detail}
              </p>
            ) : null}
          </a>
        </Reveal>
      ))}
    </div>
  );
}
