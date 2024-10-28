import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePhoneNumberDto } from './dto/create-phone-number.dto';
import { UpdatePhoneNumberDto } from './dto/update-phone-number.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PrismaService } from '../prisma-config/prisma.service';
import { UpdateTemplateDto } from '../templates/dto/update-template.dto';

@Injectable()
export class PhoneNumberService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const totalPages = await this.prisma.phoneNumber.count();
    const lastPage = Math.ceil(totalPages / limit);
    return {
      data: await this.prisma.phoneNumber.findMany({
        where: { status: true },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      meta: {
        total: totalPages,
        page: page,
        lastPage: lastPage,
      }
    }
  }

  async create(createPhoneNumberDto: CreatePhoneNumberDto) {
    return this.prisma.phoneNumber.create({ data: createPhoneNumberDto });
  }

  async findOne(id: number) {
    const phone = await this.prisma.phoneNumber.findFirst({
      where: { id },
    });
    if (!phone) {
      throw new NotFoundException(`phone with ID ${id} not found`);
    }

    return phone;
  }

  async update(id: number, updatePhoneNumberDto: UpdatePhoneNumberDto) {
    await this.findOne(id);
    return this.prisma.phoneNumber.update({ where: { id }, data: updatePhoneNumberDto, });
  }

  async remove(id: number) {
    const phone = await this.findOne(id);
    if (!phone) {
      throw new NotFoundException(`phone with ID ${id} not found`);
    }

    return await this.prisma.phoneNumber.update({
      where: { id },
      data: { status: false }
    });
  }
}
