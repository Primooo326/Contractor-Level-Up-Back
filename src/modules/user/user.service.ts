import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma-config/prisma.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

 async  findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const totalPages = await this.prisma.user.count({ where: { status: true } });
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.prisma.user.findMany({
        where: { status: true },
        skip: (page - 1) * limit,
        take: limit
      }),
      meta: {
        total: totalPages,
        page: page,
        lastPage: lastPage,
      }
    }

  }

  async findOne(id: number) {
    const template = await this.prisma.user.findFirst({
      where: { id },
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
}
