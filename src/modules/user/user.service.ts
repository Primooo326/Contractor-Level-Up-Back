import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma-config/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: CreateUserDto) {

    const encryptedPassword = await this.encryptPassword(data.password);
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: encryptedPassword,
        full_name: data.full_name,
        first_name: data.first_name,
        last_name: data.last_name,

      }
    });

    return user;
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const totalPages = await this.prisma.user.count({ where: { status: true } });
    const lastPage = Math.ceil(totalPages / limit);

    const users = await this.prisma.user.findMany({
      where: { status: true },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        email: true,
        full_name: true,
        first_name:true,
        last_name:true
      },
    });

    return {
      data: users,
      meta: {
        total: totalPages,
        page: page,
        lastPage: lastPage,
      }
    };
  }

  async findOne(id: number) {
    const template = await this.prisma.user.findFirst({
      where: { id },
      select: {
        id: true,              
        email: true,
        full_name:true,
        first_name:true,
        last_name:true
      },
        
    });

    if (!template) {
      throw new NotFoundException(`Template with ID ${id} not found`);
    }

    return template;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    return this.prisma.user.update({ where: { id }, data: updateUserDto, });
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return await this.prisma.user.update({
      where: { id },
      data: { status: false }
    });
  }

  private async encryptPassword(text: string): Promise<string> {
    const algorithm = 'aes-256-ecb';
    const encryptionKey = process.env.ENCRYPTION_KEY; // Asegúrate de tener esta variable en tu .env
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(encryptionKey), null);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
}
