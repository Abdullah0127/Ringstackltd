// Centralized API client for the EDM Lead Network frontend.
// All backend requests go through this module so response handling is consistent.

const API_BASE = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/api`
  : "/api";

class ApiError extends Error {
  constructor(message, status, body) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

// Parse a response safely. Returns the parsed JSON or throws an ApiError.
async function parseJson(res) {
  // Read the body once so we can inspect it without consuming it for the caller.
  const text = await res.text();
  if (!text) {
    throw new ApiError(
      res.status === 204
        ? "No content"
        : `Server returned an empty response (HTTP ${res.status})`,
      res.status,
      ""
    );
  }

  let body;
  try {
    body = JSON.parse(text);
  } catch {
    throw new ApiError(
      `Server returned a non-JSON response (HTTP ${res.status})`,
      res.status,
      text
    );
  }

  if (!res.ok) {
    // Backend now returns { success: false, message, errors }
    const message = body?.message || `Request failed with status ${res.status}`;
    throw new ApiError(message, res.status, body);
  }

  return body;
}

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  return parseJson(res);
}

export const api = {
  get: (path, options) => request(path, { method: "GET", ...options }),
  post: (path, body, options) =>
    request(path, { method: "POST", body: JSON.stringify(body), ...options }),
  put: (path, body, options) =>
    request(path, { method: "PUT", body: JSON.stringify(body), ...options }),
  patch: (path, body, options) =>
    request(path, { method: "PATCH", body: JSON.stringify(body), ...options }),
  delete: (path, options) => request(path, { method: "DELETE", ...options }),
};

export { ApiError, API_BASE };
export default api;