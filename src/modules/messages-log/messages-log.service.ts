import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-config/prisma.service';
import { MessageDto } from '../user/dto/message-user.dto';
import { CreateMessageLogDto } from './dto/create-message-log.dto';
import { UserLoginDto } from 'src/common/dto/user-login.dto';
import { ValidateCountDto } from './dto/validate-count.dto';

@Injectable()
export class MessagesLogService {
    constructor(private readonly prisma: PrismaService) { }

    async Messages(filters: MessageDto) {
        const { userIds, fechaInicial, fechaFinal } = filters;

        const ids = userIds ? userIds.map(id => parseInt(id, 10)).filter(id => !isNaN(id)) : [];
        const fechaInicio = fechaInicial ? new Date(fechaInicial) : new Date(new Date().setHours(0, 0, 0, 0));
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
            }
        });

        return userMessageLog;
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

        const canSendMessages = (amountMessagesDay + amountSend) <= amountMessagesAllowed;

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
