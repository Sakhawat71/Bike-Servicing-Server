import { PrismaClient } from "@prisma/client";


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


export const bikeService = {
    addBike,
    getBikes
};