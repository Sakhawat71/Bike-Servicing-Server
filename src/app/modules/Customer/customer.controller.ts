import { NextFunction, Request, Response } from "express";
import { customerServices } from "./customer.service";
import { StatusCodes } from "http-status-codes";


const createCustomer = async (req: Request, res: Response) => {
    try {
        const result = await customerServices.createCustomer(req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Customer created successfully',
            data: result,
        });

    } catch (error: any) {
        console.error('Error creating customer:', error);

        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'Failed to create customer',
            error: error?.message || 'Something went wrong',
        });
    }
};


const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const result = await customerServices.getAllCustomersFromDB();
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Customers fetched successfully',
            data: result,
        });

    } catch (error: any) {
        res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            message: 'Failed to fetch Customers!',
            error: error?.message || 'Something went wrong',
        });
    }
};


const getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const result = await customerServices.getSpecificCustomerById(id);
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Customer fetched successfully',
            data: result,
        });

    } catch (error: any) {
        next(error)
    }
};

export const customerControllers = {
    createCustomer,
    getAllCustomers,
    getCustomerById
};