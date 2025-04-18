import { PrismaClient } from "@prisma/client";
import AppError from "../../errors/appError";
import { StatusCodes } from "http-status-codes";


const prisma = new PrismaClient();


// 1. Add a new bike
const addBike = async (data: any) => {
    try {
        const bike = await prisma.bike.create({
            data: {
                ...data
            }
        });
        return bike;
    } catch (error) {
        throw error;
    }
};


// 2. Get all bikes
const getBikes = async () => {
    try {
        const bikes = await prisma.bike.findMany();
        return bikes;
    } catch (error) {
        throw error;
    }
};

// 3. Get a specific bike by ID
const getBikeById = async (bikeId: string) => {
    try {
        const result = await prisma.bike.findUnique({
            where: {
                bikeId: bikeId
            }
        });

        if (!result) {
            throw new AppError(StatusCodes.NOT_FOUND, 'Bike not found');
        }

        return result;
    } catch (error) {
        throw error;
    }
};


export const bikeService = {
    addBike,
    getBikes,
    getBikeById
};