import { NextFunction, Request, Response } from "express";
import { ServiceRecordServices } from "./serviceRecord.service";
import { StatusCodes } from "http-status-codes";


// 1. Create a service record
const createServiceRecord = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await ServiceRecordServices.createServiceRecord(req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            status: StatusCodes.CREATED,
            message: 'Service record created successfully',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


// 2. Get all service records
const getAllServiceRecords = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await ServiceRecordServices.getAllServiceRecords();
        res.status(StatusCodes.OK).json({
            success: true,
            status: StatusCodes.OK,
            message: 'Service records fetched successfully',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


// 3. Get a specific service record
const getServiceRecordById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { serviceId } = req.params;
        const result = await ServiceRecordServices.getServiceRecordById(serviceId);
        res.status(StatusCodes.OK).json({
            success: true,
            status: StatusCodes.OK,
            message: 'Service record fetched successfully',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const ServiceRecordController = {
    createServiceRecord,
    getAllServiceRecords,
    getServiceRecordById
};