import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { contactItems } from "@/lib/site";
import { Reveal } from "@/components/reveal";

const icons: Record<string, LucideIcon> = {
  Email: Mail,
  Phone: Phone,
  Location: MapPin,
};

export function ContactGrid() {
  return (
    <div className="grid sm:grid-cols-3 gap-5">
      {contactItems.map((item, i) => {
        const Icon = icons[item.label];
        const inner = (
          <>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a7d4d]/10 text-[#0a7d4d] mb-6 transition-colors group-hover:bg-[#0a7d4d] group-hover:text-white">
              <Icon size={20} aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#0a1f16]/70 mb-1">
              {item.label}
            </p>
            <p className="font-display text-xl font-bold break-words">{item.value}</p>
          </>
        );
        return (
          <Reveal key={item.label} delay={i * 80}>
            {item.href ? (
              <a
                href={item.href}
                className="group flex h-full flex-col rounded-3xl border border-[#0a1f16]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0a7d4d] hover:shadow-[0_24px_48px_-24px_rgba(10,125,77,0.35)]"
              >
                {inner}
              </a>
            ) : (
              <div className="group flex h-full flex-col rounded-3xl border border-[#0a1f16]/10 bg-white p-8">
                {inner}
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
