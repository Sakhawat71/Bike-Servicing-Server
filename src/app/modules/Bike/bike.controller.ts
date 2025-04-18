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
        res.status(200).json({
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

    } catch (error) {

    }
};

export const bikeController = {
    addBike,
    getBikes
};