import express from "express";
import * as HobbyController from '../controllers/Hobby-controller.js';

const router = express.Router();

router.route("/api/v1/hobby").get(HobbyController.fetchHobbiesForUser).post(HobbyController.createHobby);
router.route("/api/v1/hobby/:id").put(HobbyController.updateHobby).delete(HobbyController.deleteHobby);

export default router;