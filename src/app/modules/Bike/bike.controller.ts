import { NextFunction, Request, Response } from "express";
import { bikeService } from "./bike.service";
import { StatusCodes } from "http-status-codes";

const addBike = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await bikeService.addBike(req.body);
        res.status(StatusCodes.OK).json({
            success: true,
            status: StatusCodes.OK,
            message: "Bike added successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

const getBikes = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await bikeService.getBikes();
        res.status(StatusCodes.OK).json({
            success: true,
            status: StatusCodes.OK,
            message: "Bikes fetched successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};


const getBikeById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const bikeId = req.params.bikeId;
        const result = await bikeService.getBikeById(bikeId);
        res.status(StatusCodes.OK).json({
            success: true,
            status: StatusCodes.OK,
            message: "Bike fetched successfully",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const bikeController = {
    addBike,
    getBikes,
    getBikeById
};