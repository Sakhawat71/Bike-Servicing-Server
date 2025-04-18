import { Router } from "express";
import { customerControllers } from "./customer.controller";

const router = Router();

router.post('/', customerControllers.createCustomer);
router.get('/', customerControllers.getAllCustomers);
router.get('/:customerId', customerControllers.getCustomerById);
router.put('/:customerId', customerControllers.updateCustomer);
router.delete('/:customerId', customerControllers.deleteCustomer);


export const customerRouters = router;