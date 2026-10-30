// Centralized response helpers — guarantees consistent JSON shapes.
// Success: { success: true, message, data }
// Error:   { success: false, message, errors }

export const success = (res, { message = "OK", data = null, status = 200 } = {}) => {
  const payload = { success: true, message };
  if (data !== null) payload.data = data;
  return res.status(status).json(payload);
};

export const created = (res, { message = "Created", data = null } = {}) =>
  success(res, { message, data, status: 201 });

export const error = (res, { message = "Something went wrong.", errors = null, status = 500 } = {}) => {
  const payload = { success: false, message };
  if (errors) payload.errors = errors;
  return res.status(status).json(payload);
};

// Map common Mongoose/Mongo errors to friendly responses
export const handleDbError = (res, err, fallback = "Operation failed.") => {
  if (err && err.code === 11000) {
    const field = err.keyValue ? Object.keys(err.keyValue)[0] : "email";
    const value = err.keyValue ? err.keyValue[field] : "";
    return error(res, {
      message: `A ${field} (${value}) is already registered.`,
      errors: [{ field, message: `Already in use` }],
      status: 409,
    });
  }
  if (err && err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));
    return error(res, {
      message: "Validation failed. Please check the highlighted fields.",
      errors,
      status: 422,
    });
  }
  if (err && err.name === "CastError") {
    return error(res, {
      message: "Invalid ID provided.",
      errors: [{ field: err.path, message: "Invalid value" }],
      status: 404,
    });
  }
  return error(res, { message: fallback });
};