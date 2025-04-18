import { Request, Response } from "express";
import { customerServices } from "./customer.service";


const createCustomer = async (req: Request, res: Response) => {
    
    const result = customerServices.createCustomerIntoDB();
    res.send(result);
};



export const customerControllers = {
    createCustomer
};