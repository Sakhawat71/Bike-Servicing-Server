import { PrismaClient } from "@prisma/client"
import { get } from "http";
import AppError from "../../errors/appError";
import { StatusCodes } from "http-status-codes";


const prisma = new PrismaClient();

// 1. Create a service record
const createServiceRecord = async (data: any) => {
    try {
        const result = await prisma.serviceRecord.create({
            data: {
                ...data
            }
        });
        return result;
    } catch (error) {
        throw error;
    }
};


// 2. Get all service records
const getAllServiceRecords = async () => {
    try {
        const result = await prisma.serviceRecord.findMany();
        return result;
    } catch (error) {
        throw error;
    }
};


// 3. Get a specific service record
const getServiceRecordById = async (serviceId: string) => {
    try {
        const result = await prisma.serviceRecord.findUnique({
            where: {
                serviceId: serviceId
            }
        });

        if (!result) {
            throw new AppError(StatusCodes.NOT_FOUND, 'Service Record not found');
        }

        return result;
    } catch (error) {
        throw error;
    }
};


// 4. Mark a service as completed
const completeServiceRecord = async (serviceId: string, data: any) => {
    try {

        const service = await prisma.serviceRecord.findUnique({
            where: { serviceId }
        });
        if (!service) {
            throw new AppError(StatusCodes.NOT_FOUND, 'Service Record not found');
        }
        if (service.status === 'done') {
            throw new AppError(StatusCodes.BAD_REQUEST, 'Service Record already completed');
        }

        const result = await prisma.serviceRecord.update({
            where: {
                serviceId: serviceId
            },
            data: {
                completionDate: data?.completionDate || new Date(),
                status: 'done'
            }
        });
        return result;
    } catch (error) {
        throw error;
    }
};


// 5. Pending or Overdue Services (older than 7 days)
const getOverdueServices = async () => {
    try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const services = await prisma.serviceRecord.findMany({
            where: {
                OR: [{ status: 'pending' }, { status: 'in_progress' }],
                serviceDate: { lte: sevenDaysAgo },
            },
        });

        return services;
    } catch (error) {
        throw error;
    }
};



export const ServiceRecordServices = {
    createServiceRecord,
    getAllServiceRecords,
    getServiceRecordById,
    completeServiceRecord,
    getOverdueServices
};