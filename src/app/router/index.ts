import { Router } from "express";

const router = Router();

const routersModule = [
    {
        path: '/',
        route : 'hello'
    }
];

routersModule.forEach((r) => router.use(r.path));

export default router;