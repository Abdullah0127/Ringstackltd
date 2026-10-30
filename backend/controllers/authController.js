import bcrypt from "bcryptjs";
import Advertiser from "../models/Advertiser.js";
import Publisher from "../models/Publisher.js";
import {
  generateToken,
  hashPassword,
  comparePassword,
  setAuthCookie,
  clearAuthCookie,
} from "../utils/auth.js";
import { isDBConnected } from "../config/db.js";
import { success, created, error, handleDbError } from "../utils/response.js";

// Ensure DB is available before running a controller; otherwise return 503.
function requireDb(res) {
  if (!isDBConnected()) {
    return error(res, {
      message: "Database is unavailable. Please try again later.",
      status: 503,
    });
  }
  return null;
}

export const advertiserRegister = async (req, res) => {
  const blocked = requireDb(res);
  if (blocked) return blocked;

  try {
    const {
      companyName,
      contactName,
      email,
      phone,
      password,
      industry,
      monthlyBudget,
    } = req.body;

    if (!companyName || !contactName || !email || !phone || !password) {
      return error(res, {
        message: "All required fields must be filled.",
        errors: [
          { field: "companyName", message: "Required" },
          { field: "contactName", message: "Required" },
          { field: "email", message: "Required" },
          { field: "phone", message: "Required" },
          { field: "password", message: "Required" },
        ],
        status: 400,
      });
    }

    if (password.length < 6) {
      return error(res, {
        message: "Password must be at least 6 characters.",
        errors: [{ field: "password", message: "Minimum 6 characters" }],
        status: 400,
      });
    }

    const existingAdvertiser = await Advertiser.findOne({ email });
    if (existingAdvertiser) {
      return error(res, {
        message: "An advertiser with this email already exists.",
        errors: [{ field: "email", message: "Already registered" }],
        status: 409,
      });
    }

    const hashedPassword = await hashPassword(password);

    const advertiser = await Advertiser.create({
      companyName,
      contactName,
      email,
      phone,
      password: hashedPassword,
      industry,
      monthlyBudget,
    });

    const token = generateToken(advertiser._id, "advertiser");
    setAuthCookie(res, token);

    return created(res, {
      message: "Advertiser registered successfully",
      data: {
        advertiser: {
          id: advertiser._id,
          companyName: advertiser.companyName,
          contactName: advertiser.contactName,
          email: advertiser.email,
          role: "advertiser",
        },
      },
    });
  } catch (err) {
    return handleDbError(res, err, "Advertiser registration failed.");
  }
};

export const publisherRegister = async (req, res) => {
  const blocked = requireDb(res);
  if (blocked) return blocked;

  try {
    const {
      companyName,
      contactName,
      email,
      phone,
      password,
      trafficSources,
      monthlyVolume,
    } = req.body;

    if (!companyName || !contactName || !email || !phone || !password) {
      return error(res, {
        message: "All required fields must be filled.",
        errors: [
          { field: "companyName", message: "Required" },
          { field: "contactName", message: "Required" },
          { field: "email", message: "Required" },
          { field: "phone", message: "Required" },
          { field: "password", message: "Required" },
        ],
        status: 400,
      });
    }

    if (password.length < 6) {
      return error(res, {
        message: "Password must be at least 6 characters.",
        errors: [{ field: "password", message: "Minimum 6 characters" }],
        status: 400,
      });
    }

    const existingPublisher = await Publisher.findOne({ email });
    if (existingPublisher) {
      return error(res, {
        message: "A publisher with this email already exists.",
        errors: [{ field: "email", message: "Already registered" }],
        status: 409,
      });
    }

    const hashedPassword = await hashPassword(password);

    const publisher = await Publisher.create({
      companyName,
      contactName,
      email,
      phone,
      password: hashedPassword,
      trafficSources,
      monthlyVolume,
    });

    const token = generateToken(publisher._id, "publisher");
    setAuthCookie(res, token);

    return created(res, {
      message: "Publisher registered successfully",
      data: {
        publisher: {
          id: publisher._id,
          companyName: publisher.companyName,
          contactName: publisher.contactName,
          email: publisher.email,
          role: "publisher",
        },
      },
    });
  } catch (err) {
    return handleDbError(res, err, "Publisher registration failed.");
  }
};

export const advertiserLogin = async (req, res) => {
  const blocked = requireDb(res);
  if (blocked) return blocked;

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return error(res, {
        message: "Please enter email and password.",
        errors: [
          { field: "email", message: "Required" },
          { field: "password", message: "Required" },
        ],
        status: 400,
      });
    }

    const advertiser = await Advertiser.findOne({ email }).select("+password");
    if (!advertiser) {
      return error(res, {
        message: "Invalid email or password.",
        errors: [{ field: "email", message: "Not found" }],
        status: 401,
      });
    }

    const isMatch = await comparePassword(password, advertiser.password);
    if (!isMatch) {
      return error(res, {
        message: "Invalid email or password.",
        errors: [{ field: "password", message: "Incorrect" }],
        status: 401,
      });
    }

    const token = generateToken(advertiser._id, "advertiser");
    setAuthCookie(res, token);

    return success(res, {
      message: "Advertiser login successful",
      data: {
        advertiser: {
          id: advertiser._id,
          companyName: advertiser.companyName,
          contactName: advertiser.contactName,
          email: advertiser.email,
          role: "advertiser",
        },
      },
    });
  } catch (err) {
    return handleDbError(res, err, "Advertiser login failed.");
  }
};

export const publisherLogin = async (req, res) => {
  const blocked = requireDb(res);
  if (blocked) return blocked;

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return error(res, {
        message: "Please enter email and password.",
        errors: [
          { field: "email", message: "Required" },
          { field: "password", message: "Required" },
        ],
        status: 400,
      });
    }

    const publisher = await Publisher.findOne({ email }).select("+password");
    if (!publisher) {
      return error(res, {
        message: "Invalid email or password.",
        errors: [{ field: "email", message: "Not found" }],
        status: 401,
      });
    }

    const isMatch = await comparePassword(password, publisher.password);
    if (!isMatch) {
      return error(res, {
        message: "Invalid email or password.",
        errors: [{ field: "password", message: "Incorrect" }],
        status: 401,
      });
    }

    const token = generateToken(publisher._id, "publisher");
    setAuthCookie(res, token);

    return success(res, {
      message: "Publisher login successful",
      data: {
        publisher: {
          id: publisher._id,
          companyName: publisher.companyName,
          contactName: publisher.contactName,
          email: publisher.email,
          role: "publisher",
        },
      },
    });
  } catch (err) {
    return handleDbError(res, err, "Publisher login failed.");
  }
};

export const logout = async (req, res) => {
  clearAuthCookie(res);
  return success(res, { message: "Logged out successfully" });
};

export const getMe = async (req, res) => {
  const blocked = requireDb(res);
  if (blocked) return blocked;

  try {
    if (req.user.role === "advertiser") {
      const advertiser = await Advertiser.findById(req.user.userId);
      if (!advertiser) {
        return error(res, {
          message: "Advertiser not found.",
          status: 404,
        });
      }
      return success(res, {
        data: {
          id: advertiser._id,
          companyName: advertiser.companyName,
          contactName: advertiser.contactName,
          email: advertiser.email,
          role: "advertiser",
        },
      });
    }

    const publisher = await Publisher.findById(req.user.userId);
    if (!publisher) {
      return error(res, {
        message: "Publisher not found.",
        status: 404,
      });
    }
    return success(res, {
      data: {
        id: publisher._id,
        companyName: publisher.companyName,
        contactName: publisher.contactName,
        email: publisher.email,
        role: "publisher",
      },
    });
  } catch (err) {
    return handleDbError(res, err, "Failed to fetch user profile.");
  }
};