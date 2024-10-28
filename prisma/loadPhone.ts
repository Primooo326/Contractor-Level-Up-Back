import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

async function loadPhones() {
    try {
        console.log('Leyendo el archivo JSON...');
        const data = fs.readFileSync('./numeros.json', 'utf-8');
        console.log('Archivo leído correctamente.');

        const parsedData = JSON.parse(data);
       // console.log('Datos parseados:', parsedData);

        const phones = parsedData.numbers.map((number: any) => ({
            sidHigh_Level: number.sid,
            phoneNumber: number.phoneNumber,
            friendlyName: number.friendlyName || " ",
            countryCode: number.countryCode,
            fax: number.capabilities.fax,
            voice: number.capabilities.voice,
            sms: number.capabilities.sms,
            mms: number.capabilities.mms,
            type: number.type,
            isGroupConversationEnabled: number.isGroupConversationEnabled,
        }));

        console.log('Preparando para cargar los datos...');
        await prisma.phoneNumber.createMany({
            data: phones,
           // skipDuplicates: true,
        });

        console.log('Datos cargados exitosamente.');
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    } finally {
        await prisma.$disconnect();
    }

   
}

loadPhones();