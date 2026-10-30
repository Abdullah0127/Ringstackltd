import { useEffect } from "react";
import "./About.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80";

const TALENT_IMAGE =
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80";
const TALENT2_IMAGE =
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80";

const values = [
  {
    number: "01",
    title: "Loyalty",
    copy: "We are devoted to our customers, employees, and stakeholders, fostering enduring relationships built on trust and mutual respect.",
  },
  {
    number: "02",
    title: "Integrity",
    copy: "Honesty and ethical behavior guide every aspect of our business operations, ensuring transparency and trustworthiness.",
  },
  {
    number: "03",
    title: "Accountability",
    copy: "We hold ourselves to the highest standards of accountability, taking ownership of our actions and outcomes.",
  },
  {
    number: "04",
    title: "Diversity",
    copy: "We celebrate diversity and recognize the strength that comes from a variety of perspectives, backgrounds, and experiences.",
  },
  {
    number: "05",
    title: "Resourcefulness",
    copy: "We approach challenges with creativity and adaptability, leveraging our ingenuity to find innovative solutions.",
  },
  {
    number: "06",
    title: "Innovation",
    copy: "We embrace change and constantly seek new ways to improve and innovate, driving progress and staying ahead in a dynamic marketplace.",
  },
  {
    number: "07",
    title: "Respect",
    copy: "We value diversity and treat everyone with dignity and respect, fostering an inclusive environment where all voices are heard and valued.",
  },
  {
    number: "08",
    title: "Transparency",
    copy: "We believe in open communication and transparency, building trust through honest and forthright interactions.",
  },
  {
    number: "09",
    title: "Resilience",
    copy: "In the face of challenges, we remain steadfast and resilient, demonstrating perseverance and determination to overcome obstacles and achieve our goals.",
  },
];

const leaders = [
  {
    name: "Jamal English",
    role: "CEO",
    image: TALENT_IMAGE,
    alt: "Professional portrait representing company leadership",
  },
  {
    name: "Reda Ahlouche",
    role: "President",
    image: ABOUT_IMAGE,
    alt: "Professional workplace photograph representing company leadership",
  },
];

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us | EDM Lead Network";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content =
      "Learn about EDM Lead Network, our leadership, global team, company values, and commitment to advertising and technology solutions.";
  }, []);

  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <img
          className="about-hero-image"
          src={HERO_IMAGE}
          alt="Professionals collaborating in a modern business environment"
          fetchPriority="high"
        />

        <div className="about-hero-overlay" />

        <div className="about-container about-hero-content">
          <span className="about-eyebrow about-eyebrow-light">
            ABOUT EDM LEAD NETWORK
          </span>

          <h1>
            Connecting businesses
            <br />
            with smarter solutions.
          </h1>

          <p>
            EDM Lead Network is at the forefront of revolutionizing advertising
            and technology solutions. As the co-founders of this dynamic
            company, we are dedicated to offering innovative advertising
            services that include live transfers, inbounds, form fills, and
            website traffic.
          </p>

          <a className="about-button about-button-light" href="#about-story">
            Discover Our Company
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="about-hero-caption">
          Advertising, technology, and meaningful connections.
        </div>
      </section>

      {/* Company introduction */}
      <section className="about-intro" id="about-story">
        <div className="about-container about-intro-grid">
          <div className="about-intro-image-wrap">
            <img
              src={ABOUT_IMAGE}
              alt="Business professionals working together in a modern office"
              loading="lazy"
            />

            <div className="about-image-caption">
              <span className="about-caption-mark" />
              Built on relationships. Driven by innovation.
            </div>
          </div>

          <div className="about-intro-content">
            <span className="about-eyebrow">WHO WE ARE</span>

            <h2>Advertising solutions built around your business.</h2>

            <p>
              EDM Lead Network provides advertising and technology solutions
              designed to connect businesses with opportunities for growth. Our
              services include live transfers, inbound calls, form fills, and
              website traffic.
            </p>

            <p>
              Our tailored solutions serve a wide range of industries, including
              Insurance, Financial Services, Home Services, Legal, Travel, and
              Real Estate.
            </p>

            <a
              className="about-text-link"
              href="mailto:info@edmleadnetwork.com"
            >
              Talk to our team <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="about-leadership">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">OUR LEADERSHIP</span>
            <h2>The people guiding our vision.</h2>
            <p>
              Meet the leadership behind EDM Lead Network and the vision that
              guides our work.
            </p>
          </div>

          <div className="about-leader-grid">
            {leaders.map((leader) => (
              <article className="about-leader-card" key={leader.name}>
                <div className="about-leader-image">
                  <img src={leader.image} alt={leader.alt} loading="lazy" />
                </div>

                <div className="about-leader-info">
                  <div>
                    <h3>{leader.name}</h3>
                    <p>{leader.role}</p>
                  </div>
                  <span className="about-leader-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="about-leadership-note">
            Leadership names and roles are presented as provided by the company.
            The photographs are illustrative and are not verified portraits of
            the named leaders.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-container">
          <div className="about-section-heading about-values-heading">
            <span className="about-eyebrow">WHAT WE STAND FOR</span>
            <h2>Our values shape everything we do.</h2>
            <p>
              The principles that guide our relationships, decisions, and
              approach to business.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card" key={value.number}>
                <span className="about-value-number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Global team */}
      <section className="about-team">
        <div className="about-container about-team-grid">
          <div className="about-team-image">
            <img
              src={HERO_IMAGE}
              alt="A diverse group of professionals collaborating around a table"
              loading="lazy"
            />

            <div className="about-team-image-label">EDM GLOBAL TEAM</div>
          </div>

          <div className="about-team-copy">
            <span className="about-eyebrow">OUR GLOBAL TEAM</span>

            <h2>A diverse and global team.</h2>

            <h3>The people behind EDM Lead Network.</h3>

            <p>
              At EDM Lead Network, we pride ourselves on our diverse and global
              team. With professionals from over 20 countries, each member
              brings unique perspectives and expertise that drive creativity and
              innovation in every campaign we undertake. Our team’s collective
              background spans multiple industries, helping us understand our
              clients’ businesses and offer specialized solutions for their
              needs.
            </p>

            <p>
              Our employees are not just numbers; they are the heart and soul of
              our company. They bring a wealth of knowledge, from seasoned
              marketing strategists to creative professionals who breathe life
              into every project. We foster a culture of inclusivity and
              respect, where every voice is heard and every idea is valued.
            </p>

            <div className="about-team-highlight">
              <span aria-hidden="true">“</span>
              <p>Different perspectives. Shared purpose. Better solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-container about-mission-grid">
          <div className="about-mission-heading">
            <span className="about-eyebrow about-eyebrow-light">
              OUR MISSION
            </span>

            <h2>Helping businesses grow with confidence.</h2>
          </div>

          <div className="about-mission-content">
            <p>
              Our mission is to provide a comprehensive platform for sourcing
              high-quality, compliant traffic that delivers consistent
              conversions. Additionally, we offer cutting-edge resources and
              technology solutions designed to help businesses scale efficiently
              and achieve sustainable growth.
            </p>

            <div className="about-disclosure">
              <span aria-hidden="true">i</span>
              <p>We don’t generate nor source any traffic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="about-innovation">
        <div className="about-container about-innovation-grid">
          <div className="about-innovation-content">
            <span className="about-eyebrow">LOOKING AHEAD</span>

            <h2>Our commitment to innovation.</h2>

            <p>
              Innovation is at the core of what we do. We leverage the latest
              technologies and marketing techniques to help our clients stay
              ahead of the curve.
            </p>

            <p>
              Our EDM Network Software is a testament to our commitment to
              innovation, providing a platform for advertisers to create,
              configure, and manage their campaigns with ease and efficiency.
            </p>

            <a
              className="about-text-link"
              href="mailto:info@edmleadnetwork.com"
            >
              Explore opportunities with us
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="about-innovation-image">
            <img
              src={TALENT2_IMAGE}
              alt="Professionals discussing ideas and business technology"
              loading="lazy"
            />
            <div className="about-innovation-image-caption">
              Technology that supports better decisions.
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta">
        <div className="about-container about-cta-inner">
          <div>
            <span className="about-eyebrow about-eyebrow-light">
              LET’S CONNECT
            </span>

            <h2>Let’s create new opportunities together.</h2>

            <p>
              Have a question about our services or want to explore a potential
              partnership? We’d like to hear from you.
            </p>
          </div>

          <div className="about-cta-actions">
            <a
              className="about-button about-button-light"
              href="mailto:info@edmleadnetwork.com"
            >
              Contact Our Team
              <span aria-hidden="true">↗</span>
            </a>

            <a className="about-phone-link" href="tel:+18337118975">
              Call (833) 711-8975
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
