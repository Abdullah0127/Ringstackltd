import React, { createContext, useContext, useCallback, useState } from "react";
import ToastContainer, { ToastType } from "../components/ui/Toast";

const ToastContext = createContext(null);

let counter = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = ++counter;
    setToasts((prev) => [...prev, { id, ...toast }]);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  const success = useCallback(
    (message, title = "Success", duration = 4000) =>
      addToast({ type: ToastType.SUCCESS, title, message, duration }),
    [addToast]
  );

  const error = useCallback(
    (message, title = "Error", duration = 5000) =>
      addToast({ type: ToastType.ERROR, title, message, duration }),
    [addToast]
  );

  const warning = useCallback(
    (message, title = "Warning", duration = 4500) =>
      addToast({ type: ToastType.WARNING, title, message, duration }),
    [addToast]
  );

  const info = useCallback(
    (message, title = "Information", duration = 4000) =>
      addToast({ type: ToastType.INFO, title, message, duration }),
    [addToast]
  );

  const value = {
    toasts,
    addToast,
    removeToast,
    clearAll,
    success,
    error,
    warning,
    info,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}

export { ToastType };