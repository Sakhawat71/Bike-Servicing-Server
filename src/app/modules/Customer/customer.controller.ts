import { Request, Response } from "express";
import { customerServices } from "./customer.service";


const createCustomer = async (req: Request, res: Response) => {
    try {
        const result = await customerServices.createCustomer(req.body);
        res.status(201).json({
            success: true,
            message: 'Customer created successfully',
            data: result,
        });

    } catch (error: any) {
        console.error('Error creating customer:', error);

        res.status(500).json({
            success: false,
            message: 'Failed to create customer',
            error: error?.message || 'Something went wrong',
        });
    }
};



export const customerControllers = {
    createCustomer
};