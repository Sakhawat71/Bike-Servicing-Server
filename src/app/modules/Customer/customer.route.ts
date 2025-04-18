import { Router } from "express";
import { customerControllers } from "./customer.controller";

const router = Router();

router.post('/', customerControllers.createCustomer);


export const customerRouters = router;