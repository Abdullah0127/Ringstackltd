import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
const COPYRIGHT_YEAR = new Date().getFullYear();
function Footer() {
  const industries = [
    "Insurance",
    "Financial Services",
    "Home Services",
    "Legal",
    "Travel",
    "Real Estate",
  ];
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark">EDM</span>
            <span className="brand-copy">
              LEAD NETWORK<small>PERFORMANCE MARKETING</small>
            </span>
          </Link>
          <h3>CONTACT</h3>
          <p>
            Call: <a href="tel:07737139740">{siteConfig.phone}</a>
          </p>
          <p>
            Email: <a href="mailto:hello@ringstackltd.com">{siteConfig.email}</a>
          </p>
          <p style={{ whiteSpace: "pre-line" }}>{siteConfig.address}</p>

        </div>
        <div>
          <h3>INDUSTRIES</h3>
          {industries.map((x) => (
            <Link
              key={x}
              to={`/industries/${x.toLowerCase().replaceAll(" ", "-")}`}
            >
              {x}
            </Link>
          ))}
        </div>
        <div>
          <h3>COMPANY</h3>
          {Object.entries(siteConfig.links).map(([x, url]) => (
            <a key={x} href={url}>
              {x}
            </a>
          ))}
        </div>
        <div>
          <h3>FOLLOW US</h3>
          {Object.entries(siteConfig.social).map(([x, url]) => (
            <a key={x} href={url} target="_blank" rel="noreferrer">
              {x} <span>↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="copyright">
        <div className="wrap">
          © {COPYRIGHT_YEAR} EDM Lead Network. Copyright Protected
          Content <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
