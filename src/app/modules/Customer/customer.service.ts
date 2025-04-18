import { PrismaClient } from "@prisma/client";
import AppError from "../../errors/appError";
import { StatusCodes } from "http-status-codes";

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
const getSpecificCustomerById = async (customerId: string) => {
    try {
        const result = await prisma.customer.findUnique({
            where: {
                customerId
            },
        });

        if (!result) {
            throw new AppError(StatusCodes.NOT_FOUND, 'Customer not found');
        }

        return result;
    } catch (error) {
        throw error;
    }
};


// 4. update customer

const updateCustomerById = async (customerId: string, data: any) => {
    try {
        // Check if customer exists first
        const isExist = await prisma.customer.findUnique({
            where: { customerId },
        });

        if (!isExist) {
            throw new AppError(StatusCodes.NOT_FOUND, 'Customer not found');
        }

        // Proceed to update
        const updated = await prisma.customer.update({
            where: { customerId },
            data: { ...data },
        });

        return updated;
    } catch (error: any) {
        throw new AppError(
            error.statusCode || StatusCodes.BAD_REQUEST,
            error.message || 'Failed to update customer'
        );
    }
};



// 5. delete customer
const deleteCustomerById = async (customerId: string) => {
    try {

        const isExist = await prisma.customer.findUnique({
            where: { customerId },
        });

        if (!isExist) {
            throw new AppError(StatusCodes.NOT_FOUND, 'Customer not found');
        }

        const result = await prisma.customer.delete({
            where: {
                customerId
            },
        });

        return result;

    } catch (error: any) {
        throw new AppError(
            error.statusCode || StatusCodes.BAD_REQUEST,
            error.message || 'Failed to delete customer'
        );
    }
};

export const customerServices = {
    createCustomer,
    getAllCustomersFromDB,
    getSpecificCustomerById,
    updateCustomerById,
    deleteCustomerById
}