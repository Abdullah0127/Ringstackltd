import React, { useEffect, useCallback, useState } from "react";
import "./Toast.css";

export const ToastType = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

const ICONS = {
  success: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  info: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
};

function ToastItem({ toast, onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const duration = toast.duration || 4000;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const elapsed = now - start;
      const remaining = Math.max(0, duration - elapsed);
      const pct = (remaining / duration) * 100;
      setProgress(pct);
      if (remaining <= 0) {
        cancelAnimationFrame(frame);
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    if (toast.duration !== 0) {
      frame = requestAnimationFrame(tick);
    }

    const timer = setTimeout(() => {
      onClose(toast.id);
    }, duration);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [toast.duration, toast.id, onClose]);

  return (
    <div
      className={`toast toast-${toast.type}`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="toast-icon">{ICONS[toast.type] || ICONS.info}</div>
      <div className="toast-body">
        {toast.title && <div className="toast-title">{toast.title}</div>}
        <div className="toast-message">{toast.message}</div>
      </div>
      <button
        className="toast-close"
        aria-label="Dismiss notification"
        onClick={() => onClose(toast.id)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      {toast.duration !== 0 && (
        <div className="toast-progress" style={{ width: `${progress}%` }} />
      )}
    </div>
  );
}

export default function ToastContainer({ toasts, onRemove }) {
  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={onRemove} />
      ))}
    </div>
  );
}