import { createContext, useContext, useState, useEffect } from "react";
import { api, ApiError } from "../lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    // Re-check auth when the window regains focus (token may have refreshed)
    const onFocus = () => checkAuth();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function checkAuth() {
    try {
      const data = await api.get("/auth/me");
      setUser(data);
    } catch (err) {
      // 401/403 and network errors are expected when not logged in.
      if (err instanceof ApiError && (err.status === 401 || err.status === 403)) {
        setUser(null);
      } else {
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  }

  async function login(role, credentials) {
    const endpoint =
      role === "advertiser"
        ? "/auth/advertiser/login"
        : "/auth/publisher/login";
    const data = await api.post(endpoint, credentials);
    const userObj = data[role];
    setUser({ ...userObj, role });
    return data;
  }

  async function register(role, credentials) {
    const endpoint =
      role === "advertiser"
        ? "/auth/advertiser/register"
        : "/auth/publisher/register";
    const data = await api.post(endpoint, credentials);
    const userObj = data[role];
    setUser({ ...userObj, role });
    return data;
  }

  async function logout() {
    try {
      await api.post("/auth/logout");
    } catch {
      // Logout should still clear local state even if the request fails.
    }
    setUser(null);
  }

  const value = { user, loading, login, register, logout, checkAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export { ApiError };