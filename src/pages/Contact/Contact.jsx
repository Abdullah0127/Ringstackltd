import React, { useState } from "react";
import { api, ApiError } from "../../lib/api";
import { useToast } from "../../context/ToastContext";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { success, error: toastError, warning } = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await api.post("/contact", form);
      success(data.message || "Message sent successfully. We'll get back to you soon!", "Message Sent");
      setForm({ fullName: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      if (err instanceof ApiError) {
        toastError(err.message || "Submission failed. Please try again.", "Submission Failed");
      } else {
        toastError("Unable to submit. Please check your connection and try again.", "Network Error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="wrap">
          <span className="eyebrow">EDM LEAD NETWORK</span>
          <h1>Contact Us</h1>
          <p>
            Have questions about our lead network? Reach out to our team and
            we&rsquo;ll get back to you shortly.
          </p>
        </div>
      </section>

      <div className="contact-wrap">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Call: <a href="tel:07737139740">07737139740</a>
          </p>
          <p>
            Email: <a href="mailto:hello@ringstackltd.com">hello@ringstackltd.com</a>
          </p>
          <p>
            Office 7641, 58 Peregrine Road<br />
            Hainault, Ilford<br />
            Essex<br />
            IG6 3SZ<br />
            United Kingdom
          </p>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-full-name">Full Name</label>
          <input
            id="contact-full-name"
            name="fullName"
            type="text"
            placeholder="Your full name"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-email">Email Address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-phone">Phone Number</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={handleChange}
          />

          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="How can we help?"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            className="contact-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}
