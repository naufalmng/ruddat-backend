import express from "express";
import { authenticateMiddleware } from "../middleware/authenticate-middleware.js";
import subRuddatController from "../controllers/sub-ruddat-controller.js";

const userRouter = express.Router();
userRouter.use(authenticateMiddleware);

// SUB REDDIT API
userRouter.post('api/v1/sub-reddit', subRuddatController)


export { userRouter };