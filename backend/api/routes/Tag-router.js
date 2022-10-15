import express from "express";
import * as TagController from '../controllers/Tag-controller.js';

const router = express.Router();

router.route("/api/v1/tag").get(TagController.fetchTags).post(TagController.createTag);
router.route("/api/v1/tag/:id").get(TagController.getTag).put(TagController.updateTag).delete(TagController.deleteTag);

export default router;