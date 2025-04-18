import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 1. Create a new customer
const createCustomer = async (data: any) => {
    try {
        const result = await prisma.customer.create({
            data: data
        });
        return result
    } catch (error : any) {
        throw error
    }
};


// 2. Get all customers

export const customerServices = {
    createCustomer,
}