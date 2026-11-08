import { Instagram } from "lucide-react";
import Image from "next/image";
import { directory } from "@/lib/content";

export function WorkIndex() {
  return (
    <ol className="work-list">
      {directory.map((location, index) => (
        <li key={`${location.brand}-${location.town}`}>
          <div className="work-row">
            <span className="numeral">{String(index + 1).padStart(2, "0")}</span>
            <a className="logo-box" href={location.href}>
              <Image
                src={location.logo}
                alt=""
                width={128}
                height={128}
                className="logo-img"
              />
              <span className="sr-only">{location.brand} website</span>
            </a>
            <a className="work-name" href={location.href}>
              {location.brand}
            </a>
            <span className="work-town">
              <span>{location.town}</span>
              {location.comingSoon ? <span className="soon-label">Coming soon</span> : null}
            </span>
            <a
              className="ig-link"
              href={location.instagram}
              target="_blank"
              rel="noopener"
            >
              <Instagram size={16} aria-hidden="true" />
              Instagram
              <span className="sr-only">
                {" "}
                for {location.brand} (opens in a new tab)
              </span>
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}
