import Image from "next/image";
import { restaurants, type RestaurantPlace } from "@/lib/content";

function Places({ places, className }: { places: RestaurantPlace[]; className: string }) {
  return (
    <span className={className}>
      {places.map((place) =>
        place.comingSoon ? (
          <span key={place.label} className="place-soon">
            <span>{place.label}</span>
            <span className="soon-label">Coming soon</span>
          </span>
        ) : (
          <span key={place.label}>{place.label}</span>
        ),
      )}
    </span>
  );
}

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
              <Places places={restaurant.places} className="work-place-mobile" />
            </span>
            <Places places={restaurant.places} className="work-place" />
            <span className="work-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}
