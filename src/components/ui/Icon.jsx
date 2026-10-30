import React from 'react';
function Icon({ name, size = 22 }) {
  const shapes = {
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5m0 14h17" />
        <path d="m7 15 4-4 3 2 6-7" />
      </>
    ),
    phone: (
      <>
        <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M10 17h4" />
      </>
    ),
    megaphone: (
      <>
        <path d="m3 11 18-5v12L3 13v-2Z" />
        <path d="m11 15 2 6H8l-2-7" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        <path d="m16 11 2 2 4-4" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    chat: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    palette: (
      <>
        <path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.6-3.2 1.8 1.8 0 0 1 1.4-2.8H18a3 3 0 0 0 3-3c0-5-4-9-9-9Z" />
        <circle cx="7.5" cy="11" r=".8" />
        <circle cx="10" cy="7.5" r=".8" />
        <circle cx="15" cy="8" r=".8" />
      </>
    ),
    pulse: (
      <>
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </>
    ),
    wallet: (
      <>
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M3 9h18M16 14h2" />
        <path d="M6 6V4h12" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 9v11" />
      </>
    ),
    ping: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M7.8 7.8a6 6 0 0 0 0 8.4m8.4 0a6 6 0 0 0 0-8.4M4.9 4.9a10 10 0 0 0 0 14.2m14.2 0a10 10 0 0 0 0-14.2" />
      </>
    ),
    pricing: (
      <>
        <path d="M12 2v20m5-16H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
    report: (
      <>
        <path d="M4 19V5m0 14h16" />
        <path d="M8 15v-3m4 3V8m4 7v-5m4 5V6" />
      </>
    ),
    attribution: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 8.5 15.5 15.5M15 6h3v3M6 15v3h3" />
      </>
    ),
    payment: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </>
    ),
    brand: (
      <>
        <path d="M4 20 14 4l6 4-10 16H4v-4Z" />
        <path d="m12 7 6 4M4 20l6 0" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5l8-3 8 3v16M2 21h20M8 9h1m6 0h1M8 13h1m6 0h1M8 17h1m6 0h1" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    house: (
      <>
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" />
        <path d="M9 21v-7h6v7" />
      </>
    ),
    scale: (
      <>
        <path d="M12 3v18m-7 0h14M5 7h14" />
        <path d="m5 7-3 6h6L5 7Zm14 0-3 6h6l-3-6Z" />
      </>
    ),
    plane: (
      <>
        <path d="m2 16 20-5-20-5 4 5-4 5Zm4-5 4 0m2-2 5-7m-5 14 5 7" />
      </>
    ),
    rocket: (
      <>
        <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2-.7-3 0Z" />
        <path d="m12 15-3-3c.5-3 2-5.5 5-7.5 2.5-1.5 6-2 7-2-.2 1-.5 4.5-2 7-2 3-4.5 4.5-7 5.5Z" />
        <path d="M9 12H5l-2 3h5m4 0v4l-3 2v-5" />
        <circle cx="15.5" cy="8.5" r="1.5" />
      </>
    ),
    coins: (
      <>
        <circle cx="8" cy="8" r="5" />
        <path d="M2.5 8c0 1.7 2.5 3 5.5 3m0 2c-3 0-5.5 1.3-5.5 3S5 19 8 19s5.5-1.3 5.5-3M13 5.5c.7-.3 1.6-.5 2.5-.5 3 0 5.5 1.3 5.5 3s-2.5 3-5.5 3c-.8 0-1.6-.1-2.3-.3M13 15c.8.6 2.1 1 3.5 1 3 0 5.5-1.3 5.5-3V8" />
      </>
    ),
    phoneCall: (
      <>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
      </>
    ),
    inbound: (
      <>
        <path d="M4 12h11m0 0-4-4m4 4-4 4" />
        <path d="M15 5h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4M9 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4" />
      </>
    ),
    form: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6m-6 4h6m-6 4h3m3 1 2 2 4-4" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 3.1-.2-.1a1.7 1.7 0 0 0-1.8.1 1.7 1.7 0 0 0-.9 1.5v.2h-3.6v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8-.1l-.2.1-1.8-3.1.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5.4v-3.6h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-3.1.2.1a1.7 1.7 0 0 0 1.8-.1 1.7 1.7 0 0 0 .9-1.5v-.2H15v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8.1l.2-.1 1.8 3.1-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1Z" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shapes[name] || shapes.arrow}
    </svg>
  );
}

export default Icon;
