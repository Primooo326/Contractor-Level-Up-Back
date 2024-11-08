import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PrismaService } from '../prisma-config/prisma.service';

@Injectable()
export class PhoneService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const totalPages = await this.prisma.phoneNumber.count();
    const lastPage = Math.ceil(totalPages / limit);
  
    const phone = await this.prisma.phoneNumber.findMany({
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id:true,
        phoneNumber :true,
        friendlyName:true,
        sid:true,
        countryCode:true
      },
    });

    return {
      data: phone,
      meta: {
        total: totalPages,
        page: page,
        lastPage: lastPage,
      }
    };
  }
 async findOne(id: number) {
   const template = await this.prisma.phoneNumber.findFirst({
      where: { id },
     select: {
       id: true,
       phoneNumber: true,
       friendlyName: true,
       sid: true,
       countryCode: true
     },

    });

    if (!template) {
      throw new NotFoundException(`Phone Number with ID ${id} not found`);
    }

    return template;
  }
}
