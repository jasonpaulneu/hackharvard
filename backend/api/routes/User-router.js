import express from "express";
import authMiddleware from "../auth-middleware.js";
import * as UserController from '../controllers/User-controller.js';

const router = express.Router();

router.route("/api/v1/user").post(UserController.createUser).get(UserController.getUserByEmail);

export default router;