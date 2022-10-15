import express from "express";
import * as PassengerController from '../controllers/Passenger-controller.js';

const router = express.Router();

router.route("/api/v1/passenger").get(PassengerController.fetchPassengersForUser).post(PassengerController.createPassenger);
router.route("/api/v1/passenger/:id").put(PassengerController.updatePassenger).delete(PassengerController.deletePassenger);

export default router;