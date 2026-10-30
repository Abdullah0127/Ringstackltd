import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { ApiError } from "../lib/api";
import "../styles/AuthPages.css";

export default function PublisherRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    password: "",
    trafficSources: "",
    monthlyVolume: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { success, error: toastError } = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (fieldErrors[e.target.name]) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setLoading(true);

    try {
      await register("publisher", form);
      success("Publisher registered successfully. Welcome aboard!", "Registration Complete");
    } catch (err) {
      if (err instanceof ApiError && err.body?.errors) {
        const map = {};
        err.body.errors.forEach((item) => {
          if (item.field) map[item.field] = item.message;
        });
        setFieldErrors(map);
        toastError(err.message || "Registration failed.", "Registration Failed");
      } else {
        toastError(err.message || "Registration failed. Please try again.", "Registration Failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page auth-publisher">
      <div className="auth-stars" aria-hidden="true" />
      <div className="auth-globe" aria-hidden="true">
        <div className="auth-globe-inner" />
      </div>

      <Link to="/" className="auth-brand" aria-label="EDM Lead Network home">
        EDM <span>LEAD NETWORK</span>
      </Link>

      <section className="auth-card">
        <p className="auth-eyebrow">PUBLISHER PORTAL</p>
        <h1>Create Account</h1>
        <p className="auth-description">
          Join as a publisher to access publishing tools and grow your earnings.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="auth-form-row">
            <div className="auth-field">
              <label htmlFor="register-company-name">Company Name</label>
              <input
                id="register-company-name"
                name="companyName"
                type="text"
                autoComplete="organization"
                placeholder="Your company name"
                value={form.companyName}
                onChange={handleChange}
                required
              />
              {fieldErrors.companyName && (
                <span className="auth-field-error">{fieldErrors.companyName}</span>
              )}
            </div>
            <div className="auth-field">
              <label htmlFor="register-contact-name">Contact Name</label>
              <input
                id="register-contact-name"
                name="contactName"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={form.contactName}
                onChange={handleChange}
                required
              />
              {fieldErrors.contactName && (
                <span className="auth-field-error">{fieldErrors.contactName}</span>
              )}
            </div>
          </div>

          <div className="auth-form-row">
            <div className="auth-field">
              <label htmlFor="register-email">Email Address</label>
              <input
                id="register-email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
              {fieldErrors.email && (
                <span className="auth-field-error">{fieldErrors.email}</span>
              )}
            </div>
            <div className="auth-field">
              <label htmlFor="register-phone">Phone Number</label>
              <input
                id="register-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={handleChange}
                required
              />
              {fieldErrors.phone && (
                <span className="auth-field-error">{fieldErrors.phone}</span>
              )}
            </div>
          </div>

          <div className="auth-form-row">
            <div className="auth-field">
              <label htmlFor="register-sources">Traffic Sources</label>
              <input
                id="register-sources"
                name="trafficSources"
                type="text"
                autoComplete="off"
                placeholder="e.g. Native ads, Push, Email"
                value={form.trafficSources}
                onChange={handleChange}
              />
            </div>
            <div className="auth-field">
              <label htmlFor="register-volume">Monthly Volume</label>
              <input
                id="register-volume"
                name="monthlyVolume"
                type="text"
                autoComplete="off"
                placeholder="e.g. 100,000+ visitors"
                value={form.monthlyVolume}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="auth-form-row">
            <div className="auth-field full">
              <label htmlFor="register-password">Password</label>
              <div className="auth-password-wrap">
                <input
                  id="register-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
                <button
                  className="auth-show-password"
                  type="button"
                  onClick={() => setShowPassword((c) => !c)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {fieldErrors.password && (
                <span className="auth-field-error">{fieldErrors.password}</span>
              )}
            </div>
          </div>

          <button
            className="auth-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Publisher Account"}
          </button>
        </form>

        <p className="auth-bottom">
          Already have an account?{" "}
          <Link to="/publisher-login">Sign in</Link>
        </p>
      </section>

      <p className="auth-footer">
        © {new Date().getFullYear()} EDM Lead Network
      </p>
    </main>
  );
}
