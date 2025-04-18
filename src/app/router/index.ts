import { Router } from "express";
import { customerRouters } from "../modules/Customer/customer.route";
import { bikeRouters } from "../modules/Bike/bike.route";

const router = Router();

const routersModule = [
    {
        path: '/customers',
        route : customerRouters
    },
    {
        path: '/bikes',
        route : bikeRouters
    },
];

routersModule.forEach((r) => router.use(r.path,r.route));

export default router;