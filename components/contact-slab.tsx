import { contact } from "@/lib/content";

export function ContactSlab() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="wrap section">
        <p className="eyebrow on-navy">Contact</p>
        <h2 id="contact-heading" className="h2">
          Say hello.
        </h2>
        <div className="contact-list">
          <div className="contact-row">
            <span>Email</span>
            <a className="contact-value" href={contact.emailHref}>
              {contact.email}
            </a>
          </div>
          <div className="contact-row">
            <span>Based in</span>
            <span className="contact-value">{contact.place}</span>
          </div>
        </div>
        <p className="contact-note">
          For restaurant hours, orders and reservations, please use each restaurant&apos;s own site.
        </p>
      </div>
    </section>
  );
}
