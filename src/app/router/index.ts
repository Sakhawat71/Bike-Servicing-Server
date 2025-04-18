import { Router } from "express";
import { customerRouters } from "../modules/Customer/customer.route";

const router = Router();

const routersModule = [
    {
        path: '/customers',
        route : customerRouters
    }
];

routersModule.forEach((r) => router.use(r.path,r.route));

export default router;