import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma-config/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import * as crypto from 'crypto';
import axios from 'axios';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

async  loadUsers() {
  try {
    const response = await axios.get(
      'https://services.leadconnectorhq.com/users/?locationId=7gcRvmSzndyAWZHzYU01',
      {
        headers: {
          Authorization: 'Bearer pit-4cc3bf3a-e794-4977-a1dd-6d2ae15a2971',
          'Content-Type': 'application/json',
          version: '2021-07-28',
        },
        timeout: 10000,
      }
    );
    const users = response.data?.users;
    if (!users || !Array.isArray(users)) {
      throw new Error('Formato de datos inválido o no se encontraron usuarios.');
    }

    const encryptedPassword = await this.encryptPassword('Contractor_2024');

    const formattedUsers = users.map(user => ({
      full_name: user.name || 'N/A',
      idUser_High_Level:user.id,
      first_name: user?.firstName || null,
      last_name: user?.lastName || null,
      email: user.email,
      password: encryptedPassword,
    }));
    let successCount = 0;
    for (const user of formattedUsers) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!existingUser) {
        await this.prisma.user.create({
          data: user,
        });
        successCount++;
      }
    }

    console.log('Usuarios cargados exitosamente');
    return { message: `${successCount} usuarios cargados exitosamente` }; 
  } catch (error) {
    
    console.error('Error al cargar usuarios:', error.message || error);
    return { error: error.message || 'Error al cargar usuarios' }; 
  }
}
  async create(data: CreateUserDto) {
    const encryptedPassword = await this.encryptPassword(data.password);
    const user = await this.prisma.user.create({
      data: {
        idUser_High_Level: data.idUser_High_Level,
        email: data.email,
        password: encryptedPassword,
        full_name: data.full_name,
        first_name: data.first_name,
        last_name: data.last_name,
        is_admin: data.is_admin,
        messages_minute: data.messages_minute,
      }
    });

    return user;
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const totalPages = await this.prisma.user.count();
    const lastPage = Math.ceil(totalPages / limit);

    const users = await this.prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        idUser_High_Level: true,
        email: true,
        full_name: true,
        first_name:true,
        last_name:true,
        status: true
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
        idUser_High_Level:true,           
        email: true,
        full_name:true,
        first_name:true,
        last_name:true,
        status:true,
        is_admin:true,
        messages_minute:true
      },
        
    });

    if (!template) {
      throw new NotFoundException(`Template with ID ${id} not found`);
    }

    return template;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
  
    if (user.is_admin) {
      await this.prisma.user.updateMany({
        data: { messages_minute: updateUserDto.messages_minute },
      });
    }
  
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
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
    const encryptionKey = process.env.ENCRYPTION_KEY; 
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(encryptionKey), null);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
}
