
import { Router } from "express";
import { bikeController } from "./bike.controller";

const router = Router();

router.post('/', bikeController.addBike);
router.get('/', bikeController.getBikes);
router.get('/:bikeId', bikeController.getBikeById);

export const bikeRouters = router;