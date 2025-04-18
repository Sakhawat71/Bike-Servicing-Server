import { Router } from "express";
import { customerControllers } from "./customer.controller";

const router = Router();

router.get('/', customerControllers.createCustomer);


export const customerRouters = router;