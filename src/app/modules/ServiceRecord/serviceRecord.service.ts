import { PrismaClient } from "@prisma/client"
import { get } from "http";


const prisma = new PrismaClient();

// 1. Create a service record
const createServiceRecord = async (data: any) => {
    try {
        const result = await prisma.serviceRecord.create({
            data : {
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
        return result;
    } catch (error) {
        throw error;
    }
};



export const ServiceRecordServices = {
    createServiceRecord,
    getAllServiceRecords,
    getServiceRecordById,
    
};