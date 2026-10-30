import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { ApiError } from "../lib/api";
import "../styles/AuthPages.css";

export default function AdvertiserLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { success, error: toastError } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setLoading(true);

    try {
      await login("advertiser", { email, password });
      success("Welcome back! You are now signed in.", "Login Successful");
      navigate("/advertiser-dashboard", { replace: true });
    } catch (err) {
      if (err instanceof ApiError && err.body?.errors) {
        const map = {};
        err.body.errors.forEach((item) => {
          if (item.field) map[item.field] = item.message;
        });
        setFieldErrors(map);
      }
      toastError(err.message || "Invalid email or password. Please try again.", "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page auth-advertiser">
      <div className="auth-stars" aria-hidden="true" />
      <div className="auth-globe" aria-hidden="true">
        <div className="auth-globe-inner" />
      </div>

      <Link to="/" className="auth-brand" aria-label="EDM Lead Network home">
        EDM <span>LEAD NETWORK</span>
      </Link>

      <section className="auth-card">
        <p className="auth-eyebrow">ADVERTISER PORTAL</p>
        <h1>Welcome Back</h1>
        <p className="auth-description">
          Manage your campaigns, track performance, and grow your business.
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="advertiser-email">Email Address</label>
          <input
            id="advertiser-email"
            type="email"
            autoComplete="username"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: null });
            }}
            required
          />
          {fieldErrors.email && (
            <span className="auth-field-error">{fieldErrors.email}</span>
          )}

          <label htmlFor="advertiser-password">Password</label>
          <div className="auth-password-wrap">
            <input
              id="advertiser-password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (fieldErrors.password) setFieldErrors({ ...fieldErrors, password: null });
              }}
              required
            />
            <button
              className="auth-show-password"
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {fieldErrors.password && (
            <span className="auth-field-error">{fieldErrors.password}</span>
          )}

          <div className="auth-options">
            <label className="auth-remember">
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In to Advertiser Portal"}
          </button>
        </form>

        <p className="auth-bottom">
          Don't have an account?{" "}
          <Link to="/advertiser-register">Create account</Link>
        </p>

        <div className="auth-switch">
          Are you a publisher?{" "}
          <Link to="/publisher-login">Publisher Login</Link>
        </div>
      </section>

      <p className="auth-footer">
        © {new Date().getFullYear()} EDM Lead Network
      </p>
    </main>
  );
}
