import { Router } from "express";
import { ServiceRecordController } from "./serviceRecords.controller";


const router = Router();

router.post('/', ServiceRecordController.createServiceRecord);
router.get('/', ServiceRecordController.getAllServiceRecords);
router.get('/status', ServiceRecordController.getOverdueServices);
router.get('/:serviceId', ServiceRecordController.getServiceRecordById);
router.put('/:serviceId/complete', ServiceRecordController.completeServiceRecord);

export const ServiceRecordRoutes = router;