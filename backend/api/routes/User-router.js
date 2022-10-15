import express from "express";
import * as UserController from '../controllers/User-controller.js';

const router = express.Router();

router.route("/api/v1/user").post(UserController.createUser);

export default router;