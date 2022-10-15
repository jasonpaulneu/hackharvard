import express from "express";
import * as UserTagController from '../controllers/UserTag-controller.js';

const router = express.Router();

router.route("/api/v1/usertag").get(UserTagController.fetchUserTagsForUser).post(UserTagController.createUserTag);
router.route("/api/v1/usertag/:id").delete(UserTagController.deleteUserTag);

export default router;