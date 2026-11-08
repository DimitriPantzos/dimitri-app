import Image from "next/image";
import { restaurants } from "@/lib/content";

export function WorkIndex() {
  return (
    <ol className="work-list">
      {restaurants.map((restaurant, index) => (
        <li key={restaurant.href}>
          <a className="work-row" href={restaurant.href}>
            <span className="numeral">{String(index + 1).padStart(2, "0")}</span>
            <span className="logo-box">
              <Image
                src={restaurant.logo}
                alt=""
                width={128}
                height={128}
                className="logo-img"
              />
            </span>
            <span className="work-copy">
              <span className="work-name">{restaurant.name}</span>
              <span className="work-desc">{restaurant.descriptor}</span>
              {restaurant.place ? (
                <span className="work-place-mobile">{restaurant.place}</span>
              ) : null}
            </span>
            <span className="work-place">{restaurant.place ?? ""}</span>
            <span className="work-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}
