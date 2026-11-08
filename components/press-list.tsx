import { firstSentence, pressItems } from "@/lib/content";

export function PressList({
  heading = "h2",
  teaser = false,
}: {
  heading?: "h2" | "h3";
  teaser?: boolean;
}) {
  const Title = heading;
  return (
    <div className="press-list">
      {pressItems.map((item) => (
        <article key={item.href} className="press-item">
          <p className="eyebrow">{item.eyebrow}</p>
          <Title className={heading === "h2" ? "h2" : "h3"}>{item.title}</Title>
          <p className="meta">{item.meta}</p>
          <p className="body">{teaser ? firstSentence(item.summary) : item.summary}</p>
          <p className="press-action">
            <a className="text-link" href={item.href} target="_blank" rel="noopener">
              {item.linkLabel} <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </p>
        </article>
      ))}
    </div>
  );
}
