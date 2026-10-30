import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;

  if (
    req.headers.cookie &&
    req.headers.cookie.split(";").find((c) => c.trim().startsWith("token="))
  ) {
    token = req.headers.cookie
      .split(";")
      .find((c) => c.trim().startsWith("token="))
      .split("=")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export const advertiserOnly = (req, res, next) => {
  if (req.user && req.user.role === "advertiser") {
    next();
  } else {
    res.status(403).json({ message: "Advertiser access only" });
  }
};

export const publisherOnly = (req, res, next) => {
  if (req.user && req.user.role === "publisher") {
    next();
  } else {
    res.status(403).json({ message: "Publisher access only" });
  }
};
