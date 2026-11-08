import Image from "next/image";
import { portrait } from "@/lib/content";

export function Portrait({
  priority = false,
  framed = false,
  caption = false,
  sizes,
}: {
  priority?: boolean;
  framed?: boolean;
  caption?: boolean;
  sizes: string;
}) {
  return (
    <figure className="portrait">
      <div className={`portrait-offset${framed ? " is-framed" : ""}`}>
        <div className="portrait-photo">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="portrait-img"
          />
        </div>
      </div>
      {caption ? <figcaption className="caption">At Sweet Lyfe, Westport.</figcaption> : null}
    </figure>
  );
}
