import { NextFunction, Request, Response } from "express";
import { customerServices } from "./customer.service";
import { StatusCodes } from "http-status-codes";


const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await customerServices.createCustomer(req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            status: StatusCodes.CREATED,
            message: 'Customer created successfully',
            data: result,
        });

    } catch (error: any) {
        next(error);
    }
};


const getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await customerServices.getAllCustomersFromDB();
        res.status(StatusCodes.OK).json({
            success: true,
            status: StatusCodes.OK,
            message: 'Customers fetched successfully',
            data: result,
        });

    } catch (error: any) {
        next(error);
    }
};


const getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
    const { customerId } = req.params;
    try {
        const result = await customerServices.getSpecificCustomerById(customerId);
        res.status(StatusCodes.OK).json({
            success: true,
            status: StatusCodes.OK,
            message: 'Customer fetched successfully',
            data: result,
        });

    } catch (error: any) {
        next(error)
    }
};


const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const { customerId } = req.params;
    try {
        const result = await customerServices.updateCustomerById(customerId, req.body);
        res.status(StatusCodes.OK).json({
            success: true,
            status: StatusCodes.OK,
            message: 'Customer updated successfully',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const { customerId } = req.params;
    try {
        const result = await customerServices.deleteCustomerById(customerId);
        res.status(StatusCodes.OK).json({
            success: true,
            status: StatusCodes.OK,
            message: 'Customer deleted successfully',
        });
    } catch (error) {
        next(error);
    }
};

export const customerControllers = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};