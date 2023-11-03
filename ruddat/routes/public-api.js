import express from "express";
import userController from "../controllers/user-controller.js";
import authRouter from "./auth.router.js";
import { authenticate } from "../middleware/authenticate.js";

const publicRouter = express.Router();
// publicRouter.post(`/api/v1/users`, userController.register);

// authentication
publicRouter.use("/api/v1/auth", authRouter);
publicRouter.get("/test", authenticate, (req, res) => {
  return res.json({ user: req.user });
});

export { publicRouter };
