import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import { siteConfig } from "../../data/siteConfig";
import { useAuth } from "../../context/AuthContext";

const industries = ["Insurance", "Financial Services", "Home Services", "Legal", "Travel", "Real Estate"];
const nav = [
  ["Industries", null, true],
  ["Technology", "/technology"],
  ["Advertiser", "/advertiser"],
  ["Publisher", "/publisher"],
  ["Offers", "/offers"],
  ["BPO Services", "/bpo-services"],
  ["Resources", "/resources"],
  ["About Us", "/about-us"],
  ["EDM News", "/edm-news"],
];

function Header() {
  const { user, loading, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const closeAll = useCallback(() => {
    setIndustriesOpen(false);
    setLoginOpen(false);
  }, []);

  const handleClickOutside = useCallback(
    (event) => {
      const header = document.querySelector(".site-header");
      if (header && !header.contains(event.target)) {
        closeAll();
      }
    },
    [closeAll]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeAll();
      }
    },
    [closeAll]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  const toggleDropdown = (setter) => () => {
    setter((prev) => !prev);
  };

  const closeDropdown = (setter) => () => {
    setter(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    closeAll();
  };

  if (loading) {
    return null;
  }

  const authItems = user
    ? [
        user.role === "advertiser"
          ? ["Advertiser Dashboard", "/advertiser-dashboard"]
          : ["Publisher Dashboard", "/publisher-dashboard"],
        ["Sign Out", null],
      ]
    : [
        ["Advertiser Login", "/advertiser-login"],
        ["Publisher Login", "/publisher-login"],
        ["Advertiser Register", "/advertiser-register"],
        ["Publisher Register", "/publisher-register"],
      ];

  return (
    <header className="site-header">
      <div className="header-top wrap">
        <Link className="brand" to="/" aria-label="EDM Lead Network home">
          <span className="brand-mark">EDM</span>
          <span className="brand-copy">
            LEAD NETWORK<small>PERFORMANCE MARKETING</small>
          </span>
        </Link>
        <div className="header-utility">
          <div className="social-mini">
            {["f", "𝕏", "in", "▶"].map((x, i) => (
              <a
                href={
                  siteConfig.social[
                    ["Facebook", "Twitter/X", "LinkedIn", "YouTube"][i]
                  ]
                }
                key={x}
                aria-label={["Facebook", "X", "LinkedIn", "YouTube"][i]}
              >
                {x}
              </a>
            ))}
          </div>
          <a className="contact-top" href="tel:07737139740">
            LET’S TALK <b>{siteConfig.phone}</b>
          </a>

        </div>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <nav
        className={`nav-row wrap ${open ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {nav.map(([n, to, isDropdown]) => {
          if (isDropdown) {
            return (
              <div key={n} className="nav-dropdown">
                <button
                  className="nav-dropdown-trigger"
                  aria-expanded={industriesOpen}
                  onClick={toggleDropdown(setIndustriesOpen)}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  {n} <span className="caret">⌄</span>
                </button>
                <div
                  className={`nav-dropdown-menu ${industriesOpen ? "open" : ""}`}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  {industries.map((industry) => (
                    <Link
                      key={industry}
                      to={`/industries/${industry.toLowerCase().replaceAll(" ", "-")}`}
                      onClick={closeDropdown(setIndustriesOpen)}
                    >
                      {industry}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <Link to={to} key={n} onClick={closeAll}>
              {n}
              {n === "Industries" && <span className="caret">⌄</span>}
            </Link>
          );
        })}
        <div key="auth" className="nav-dropdown">
          <button
            className="nav-dropdown-trigger"
            aria-expanded={loginOpen}
            onClick={toggleDropdown(setLoginOpen)}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {user ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "LOGIN"} <span className="caret">⌄</span>
          </button>
          <div
            className={`nav-dropdown-menu ${loginOpen ? "open" : ""}`}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {authItems.map(([label, to]) => {
              if (label === "Sign Out") {
                return (
                  <a
                    key={label}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      closeDropdown(setLoginOpen)();
                      handleLogout(e);
                    }}
                  >
                    {label}
                  </a>
                );
              }
              return (
                <Link
                  key={label}
                  to={to}
                  onClick={closeDropdown(setLoginOpen)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}

export { Header };
