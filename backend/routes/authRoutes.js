import express from "express";
import {
  advertiserRegister,
  publisherRegister,
  advertiserLogin,
  publisherLogin,
  logout,
  getMe,
} from "../controllers/authController.js";
import { protect, advertiserOnly, publisherOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/advertiser/register", advertiserRegister);
router.post("/publisher/register", publisherRegister);
router.post("/advertiser/login", advertiserLogin);
router.post("/publisher/login", publisherLogin);
router.post("/logout", logout);
router.get("/me", protect, getMe);
router.get("/advertiser/profile", protect, advertiserOnly, getMe);
router.get("/publisher/profile", protect, publisherOnly, getMe);

export default router;
