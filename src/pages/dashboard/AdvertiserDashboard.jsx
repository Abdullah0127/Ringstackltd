import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css";

export default function AdvertiserDashboard() {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setProfile(user);
  }, [user]);

  return (
    <main className="dashboard-page dashboard-advertiser">
      <header className="dashboard-header">
        <div className="dashboard-brand">
          <span className="brand-mark">EDM</span>
          <span className="brand-copy">
            LEAD NETWORK<small>ADVERTISER DASHBOARD</small>
          </span>
        </div>
        <div className="dashboard-user">
          <span>{profile?.companyName || "Advertiser"}</span>
          <button className="dashboard-logout" onClick={logout}>
            Sign Out
          </button>
        </div>
      </header>

      <div className="dashboard-wrap">
        <aside className="dashboard-sidebar">
          <nav>
            <ul>
              <li>
                <a className="active">Overview</a>
              </li>
              <li><a>Campaigns</a></li>
              <li><a>Leads</a></li>
              <li><a>Billing</a></li>
              <li><a>Settings</a></li>
            </ul>
          </nav>
        </aside>

        <section className="dashboard-content">
          <h1>Advertiser Overview</h1>
          <p>Welcome back, {profile?.contactName || "Advertiser"}.</p>
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Active Campaigns</h3>
              <p className="dashboard-stat">0</p>
            </div>
            <div className="dashboard-card">
              <h3>Leads Delivered</h3>
              <p className="dashboard-stat">0</p>
            </div>
            <div className="dashboard-card">
              <h3>Total Spend</h3>
              <p className="dashboard-stat">$0.00</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
