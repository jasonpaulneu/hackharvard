import express from "express";
import * as ActionController from '../controllers/Action-controller.js';

const router = express.Router();

router.route("/api/v1/action").post(ActionController.createAction);
router.route("/api/v1/historyactions/:by_userId").get(ActionController.fetchHistoricActions);
router.route("/api/v1/likesforuser/:for_userId").get(ActionController.fetchLikesForUser);

export default router;