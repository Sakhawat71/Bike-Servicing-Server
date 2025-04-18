import { Router } from "express";
import { ServiceRecordController } from "./ServiceRecord.controller";


const router = Router();

router.post('/', ServiceRecordController.createServiceRecord);
router.get('/', ServiceRecordController.getAllServiceRecords);
router.get('/:serviceId', ServiceRecordController.getServiceRecordById);

export const ServiceRecordRoutes = router;