import express from "express";
import { auth } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/user-only", auth, authorize("user", "admin"), (req, res) => {
  res.json({ message: `Hello User: ${req.user.email}` });
});

router.get("/admin-only", auth, authorize("admin"), (req, res) => {
  res.json({ message: `Hello Admin: ${req.user.email}` });
});

export default router;
