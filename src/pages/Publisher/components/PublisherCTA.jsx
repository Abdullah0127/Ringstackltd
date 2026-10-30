import Icon from "../../../components/ui/Icon";

const PUBLISHER_URL = "https://edmleadnetwork.com/index.php/publishers-sign-in-sign-up/";

export default function PublisherCTA() {
  return (
    <>
      <section className="publisher-start">
        <div className="wrap">
          <div className="publisher-section-title">
            <span className="eyebrow green">GET STARTED</span>
            <h2>Start Your Publisher Journey</h2>
          </div>
          <div className="publisher-steps">
            <article className="publisher-step">
              <span className="publisher-step-number">01</span>
              <h3>Apply</h3>
              <p>Visit the publisher portal and submit your registration details.</p>
            </article>
            <article className="publisher-step">
              <span className="publisher-step-number">02</span>
              <h3>Complete Onboarding</h3>
              <p>
                Respond to any requested compliance information and work with the business
                development team during account review.
              </p>
            </article>
            <article className="publisher-step">
              <span className="publisher-step-number">03</span>
              <h3>Explore Suitable Offers</h3>
              <p>
                Once approved and onboarded, review the offers available to your account and work
                with the team to identify appropriate campaigns.
              </p>
            </article>
          </div>
          <p className="publisher-note">
            Approval and onboarding timelines can vary depending on the information required and
            the review process.
          </p>
          <a className="button" href={PUBLISHER_URL} target="_blank" rel="noreferrer">
            Apply to Become a Publisher <Icon name="arrow" size={17} />
          </a>
        </div>
      </section>
      <section className="publisher-final-cta">
        <div className="wrap">
          <h2>Ready to Grow Your Publisher Business?</h2>
          <p>
            Connect with EDM Network to explore available campaigns, understand publisher
            requirements, and discover opportunities that align with your traffic and business
            goals.
          </p>
          <a className="button button-light" href={PUBLISHER_URL} target="_blank" rel="noreferrer">
            Become a Publisher <Icon name="arrow" size={17} />
          </a>
          <p className="publisher-phone">
            Questions about publisher partnerships? Call us at{" "}
            <a href="tel:+18337118975">(833) 711-8975</a>.
          </p>
        </div>
      </section>
    </>
  );
}
