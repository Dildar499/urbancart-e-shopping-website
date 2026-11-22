import "./Footer.css";

const shopLinks = [
  ["Smartphones", '/smartphone'],
  ["Laptops", '/laptop'],
  ["Accessories", '/accessories'],
  ["Clothing Products", '/audiopage'],
];

const helpLinks = [
  ["Shipping & delivery", "/shop"],
  ["Returns", "/wishlist"],
  ["Contact us", "/contact"],
];

function FooterLinkList({ links }) {
  return (
    <ul className="list-unstyled mb-0 d-grid gap-2">
      {links.map(([label, href]) => (
        <li key={label}>
          <a className="urbancart-footer__link" href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="urbancart-footer">
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-3">
            <a className="urbancart-footer__brand text-decoration-none text-light" href="/home" >
              Urban<span className="text-primary">Cart</span>
            </a>
            <p className="urbancart-footer__description mt-3 mb-0 text-light">
              Everyday essentials and the latest tech, delivered with care.
              Shop with confidence at UrbanCart.
            </p>
          </div>

          <nav className="col-6 col-lg-3" aria-label="Shop">
            <h2 className="urbancart-footer__heading">Shop</h2>
            <FooterLinkList links={shopLinks} />
          </nav>

          <nav className="col-6 col-lg-3" aria-label="Help">
            <h2 className="urbancart-footer__heading">Help</h2>
            <FooterLinkList links={helpLinks} />
          </nav>

          <div className="col-12 col-md-6 col-lg-3" id="contact">
            <h2 className="urbancart-footer__heading">Contact</h2>
            <address className="urbancart-footer__contact mb-0">
              <a  href="https://wa.me/923266504035">+92-326650403-5</a>
              <a href="mailto:webtech754@gmail.com">webtech754@gmail.com</a>
              <span>Azaan City, Sahiwal</span>
            </address>
          </div>
        </div>

        <hr className="urbancart-footer__divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
          <p className="urbancart-footer__fineprint mb-0 text-light">
            © 2026 UrbanCart. All rights reserved.
          </p>
          <p className="urbancart-footer__fineprint mb-0 text-light">
            Cash on delivery <span aria-hidden="true">·</span> Card{" "}
            <span aria-hidden="true">·</span> Bank transfer
          </p>
        </div>
      </div>
    </footer>
  );
}