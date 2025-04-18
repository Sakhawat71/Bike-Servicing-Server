import { PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient();

// 1. Create a new customer
const createCustomer = async (data: any) => {
    try {
        const result = await prisma.customer.create({
            data: data
        });
        return result
    } catch (error: any) {
        throw error;
    }
};


// 2. Get all customers
const getAllCustomersFromDB = async () => {
    try {
        const result = await prisma.customer.findMany();
        return result;
    } catch (error: any) {
        throw error;
    }
};


// 3. get specific customer
const getSpecificCustomerById = async (id: string) => {
    try {
        const result = await prisma.customer.findUnique({
            where: {
                customerId: id,
            },
        });

        if (!result) {
            throw new Error('Customer not found');
        }

        return result;
    } catch (error) {
        throw error;
    }
};



export const customerServices = {
    createCustomer,
    getAllCustomersFromDB,
    getSpecificCustomerById,
}