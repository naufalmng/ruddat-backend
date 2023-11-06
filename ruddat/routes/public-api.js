import express from "express";
import authRouter from "./auth-router.js";
import { authenticateMiddleware } from "../middleware/authenticate-middleware.js";

const publicRouter = express.Router();
// publicRouter.post(`/api/v1/users`, userController.register);

// authentication
publicRouter.use("/api/v1/auth", authRouter);
publicRouter.get("/test", authenticateMiddleware, (req, res) => {
  return res.json({ user: req.user });
});

export { publicRouter };
