import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-config/prisma.service';
import { MessageDto } from '../user/dto/message-user.dto';
import { CreateMessageLogDto } from './dto/create-message-log.dto';
import { UserLoginDto } from 'src/common/dto/user-login.dto';
import { ValidateCountDto } from './dto/validate-count.dto';
import { fetchApiNotion } from 'src/common/instances';
// import axios from 'axios';
@Injectable()
export class MessagesLogService {
    constructor(private readonly prisma: PrismaService) { }

    async Messages(filters: MessageDto) {
        const { userIds, fechaInicial, fechaFinal } = filters;

        const ids = userIds
            ? userIds.map((id) => parseInt(id, 10)).filter((id) => !isNaN(id))
            : [];
        const fechaInicio = fechaInicial
            ? new Date(fechaInicial)
            : new Date(new Date().setHours(0, 0, 0, 0));
        const fechaFin = fechaFinal ? new Date(fechaFinal) : new Date();

        const whereConditions: any = {
            sentAt: {
                gte: fechaInicio,
                lte: fechaFin,
            },
        };

        if (userIds && userIds.length > 0) {
            whereConditions.userId = { in: ids };
        }

        const messageCount = await this.prisma.userMessageLog.count({
            where: whereConditions,
        });

        return { messageCount };
    }

    async create(dto: CreateMessageLogDto, user: UserLoginDto) {
        const now = new Date();
        now.setHours(now.getHours() - 5);

        const userMessageLog = await this.prisma.userMessageLog.create({
            data: {
                userId: user.userId,
                toNumber: dto.toNumber,
                messageContent: dto.messageContent,
                sentAt: now,
            },
        });

        return userMessageLog;
    }

    async validateFromNumber(dto: { email: string }, user: UserLoginDto) {
        user;

        try {
            const response: any = await fetchApiNotion.post('/query', {
                filter: {
                    property: 'CLU Email',
                    email: {
                        contains: dto.email,
                    },
                },
            });
            //   const notionApi = process.env.NOTION_API;
            //   const notionDatabaseId = process.env.NOTION_DATABASE_ID;
            //   const notionKey = process.env.NOTION_KEY;
            //   const response = await axios.post(
            //     `${notionApi}/v1/databases/${notionDatabaseId}/query`,
            //     {
            //       filter: {
            //         property: 'CLU Email',
            //         email: {
            //           contains: dto.email,
            //         },
            //       },
            //     },
            //     {
            //       headers: {
            //         Authorization: `Bearer ${notionKey}`,
            //         'Content-Type': 'application/json',
            //         'Notion-Version': '2022-02-22',
            //       },
            //       timeout: 10000,
            //     },
            //   );

            const crmPhone: any =
                response?.results[0]?.properties?.['CRM Phone']?.rich_text
                    .map((d) => d.text.content)
                    .toString()
                    .replaceAll(',', '') || null;

            return { data: crmPhone && crmPhone.length > 5 ? crmPhone.trim() : null };
        } catch (error) {
            console.error('Error al cargar usuarios:', error);
            return { error: error };
        }
    }

    async validateCount(dto: ValidateCountDto, user: UserLoginDto) {
        const userInfo = await this.prisma.user.findFirst({
            where: { id: user.userId },
        });

        if (!userInfo) {
            throw new Error('Usuario no encontrado');
        }

        const { messages_minute } = userInfo;

        const oneDayAgo = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        oneDayAgo.setHours(oneDayAgo.getHours() - 5);

        const amountMessagesDay = await this.prisma.userMessageLog.count({
            where: {
                userId: user.userId,
                sentAt: {
                    gte: oneDayAgo,
                },
            },
        });

        const { amountSend } = dto;
        const amountMessagesAllowed = messages_minute;

        const canSendMessages =
            amountMessagesDay + amountSend <= amountMessagesAllowed;

        return {
            messagesSend: amountSend,
            messagesAllowed: amountMessagesAllowed,
            messagesDay: amountMessagesDay,
            canSendMessages: amountMessagesAllowed - amountMessagesDay,
            canSend: canSendMessages,
            message: canSendMessages
                ? 'Puede enviar más mensajes'
                : 'Has alcanzado el límite de mensajes permitidos por día. Por favor, espera hasta mañana para enviar más mensajes',
        };
    }
}
