import React from "react";
import "./Industries.css";

const images = {
  hero: "https://edmleadnetwork.com/wp-content/uploads/2024/11/Group-1261153826.jpg",
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}

function TravelIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.72 2.04Z" />
      </svg>
    );
  }

  if (type === "traffic") {
    return (
      <svg {...common}>
        <path d="M12 3v18M5 7h14M5 17h14" />
        <circle cx="12" cy="7" r="2" />
        <circle cx="12" cy="17" r="2" />
      </svg>
    );
  }

  return null;
}

const services = [
  {
    number: "01",
    title: "Flight Booking Leads",
    subtitle: "Elevating Your Bookings",
    description:
      "Boost your flight booking business with targeted leads. Our strategies focus on connecting you with travelers eager to fly, driving up your booking rates.",
  },
  {
    number: "02",
    title: "Cruise Booking Lead",
    subtitle: "Navigating Towards More Sales",
    description:
      "Expand your cruise booking clientele with our specialized lead generation. We target passionate cruisers, helping you increase sales and enhance your market presence.",
  },
  {
    number: "03",
    title: "Travel Concierge Leads",
    subtitle: "Personalizing Client Connections",
    description:
      "Grow your travel concierge service with leads that value personalized experiences. We connect you with clients looking for customized travel solutions, enhancing your client base and service reach.",
  },
  {
    number: "04",
    title: "Car Rental Leads",
    subtitle: "Accelerating Your Customer Base",
    description:
      "Drive more business to your car rental service. Our targeted lead generation puts you in front of travelers seeking convenient transportation solutions, boosting your customer engagements.",
  },
  {
    number: "05",
    title: "Hotel Booking Leads",
    subtitle: "Filling Rooms, Growing Revenue",
    description:
      "Enhance your hotel booking business with high-quality leads. We specialize in connecting you with travelers seeking comfortable accommodations, helping to increase your occupancy rates and revenue.",
  },
];

function Travel() {
  return (
    <main className="travel-page">
      {/* Products Available */}
      <section className="travel-products">
        <div className="travel-container">
          <div className="travel-products-heading">
            <span className="travel-eyebrow">OUR SOLUTIONS</span>
            <h2>Products Available</h2>
          </div>

          <div className="travel-product-grid">
            <div className="travel-product-card">
              <span className="travel-product-icon">
                <TravelIcon type="phone" />
              </span>
              <div>
                <h3>Inbound Calls</h3>
                <p>Connect with travelers ready to take action.</p>
              </div>
              <ArrowIcon />
            </div>

            <div className="travel-product-card">
              <span className="travel-product-icon">
                <TravelIcon type="traffic" />
              </span>
              <div>
                <h3>Traffic</h3>
                <p>Reach audiences actively exploring travel options.</p>
              </div>
              <ArrowIcon />
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="travel-hero">
        <div className="travel-container travel-hero-grid">
          <div className="travel-hero-content">
            <span className="travel-eyebrow">TRAVEL INDUSTRY</span>

            <h1>
              Travel
              <span>Marketing Solutions</span>
            </h1>

            <p>
              Connect with high-intent travelers through innovative advertising
              strategies and quality lead generation solutions.
            </p>

            <a href="/contact" className="travel-button">
              Let's Talk <ArrowIcon />
            </a>
          </div>

          <div className="travel-hero-image">
            <img src={images.hero} alt="Travel industry marketing" />
            <div className="travel-image-label">
              <span className="travel-label-dot"></span>
              Connecting businesses with travelers
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="travel-intro">
        <div className="travel-container">
          <div className="travel-intro-grid">
            <div className="travel-intro-image">
              <img src={images.hero} alt="Travel marketing solutions" />

              <div className="travel-intro-image-caption">
                <span>01</span>
                <div>
                  <strong>Smarter Travel Marketing</strong>
                  <small>Building meaningful connections</small>
                </div>
              </div>
            </div>

            <div className="travel-intro-content">
              <span className="travel-eyebrow">HOW IT WORKS</span>
              <h2>How it Works?</h2>

              <p>
                At EDM Lead Network, we are dedicated to guiding travel industry
                professionals towards a sea of high-intent travelers. Our
                expertise lies in crafting innovative advertising strategies
                that do more than just gather prospects; we connect you with
                travelers eager to embark on their next journey.
              </p>

              <div className="travel-highlight">
                Pioneering the Future of Travel Marketing with Cutting-Edge
                Advertising Techniques
              </div>

              <p className="travel-intro-bold">
                In the bustling world of travel, standing out is key. That's
                where we come in.
              </p>
            </div>
          </div>

          <div className="travel-intro-bottom">
            <span className="travel-bottom-line"></span>
            <p>
              Our approach is not just about generating leads; it's about
              creating meaningful connections that turn into lasting client
              relationships. Whether it's for flight bookings, cruise vacations,
              or exotic getaways, our tailored marketing solutions are designed
              to steer your business towards its desired destination.
            </p>
          </div>
        </div>
      </section>

      {/* Travel Services */}
      <section className="travel-services">
        <div className="travel-container">
          <div className="travel-section-heading">
            <span className="travel-eyebrow">OUR TRAVEL VERTICALS</span>

            <h2>
              Choose EDM Lead Network and you can focus on{" "}
              <span>what you do best</span>
            </h2>

            <p>
              We help travel businesses connect with the right customers through
              targeted lead generation.
            </p>
          </div>

          <div className="travel-service-grid">
            {services.map((service) => (
              <article className="travel-service-card" key={service.number}>
                <div className="travel-service-content">
                  <span className="travel-service-subtitle">
                    {service.subtitle}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href="/contact" className="travel-service-link">
                    Learn More <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="travel-cta">
        <div className="travel-container travel-cta-inner">
          <div>
            <span className="travel-eyebrow">LET'S GROW TOGETHER</span>

            <h2>Ready to reach more travelers?</h2>

            <p>
              Partner with EDM Lead Network and turn high-intent audiences into
              meaningful business opportunities.
            </p>
          </div>

          <div className="travel-cta-actions">
            <a href="tel:+18337118975" className="travel-phone">
              (833) 711-8975
            </a>

            <a href="/contact" className="travel-button travel-button-white">
              Contact Us <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Final Text */}
      <section className="travel-final">
        <div className="travel-container">
          <p>
            Call us today, let's talk, to learn more about how EDM Lead Network
            can help your travel business grow. Together, we can take your
            business further.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Travel;
