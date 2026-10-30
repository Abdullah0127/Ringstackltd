import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-wrap">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/" className="button">
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
