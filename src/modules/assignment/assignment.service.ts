import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { mysqlConfig } from 'src/config/mysql.config';

@Injectable()
export class AssignmentService {
  private pool = mysqlConfig;


  create(createAssignmentDto: CreateAssignmentDto) {
    return 'This action adds a new assignment';
  }

   async findAll(paginationDto: PaginationDto) {
     const { page, limit } = paginationDto; 
     const [totalRowsResult] = await this.pool.promise().query('SELECT COUNT(*) AS total FROM assignment WHERE estado = ?', [true]);
     
     const totalPages = totalRowsResult[0].total;
     const lastPage = Math.ceil(totalPages / limit);

     const [rows] = await this.pool.promise().query(
       'SELECT * FROM assignment WHERE estado = ? ORDER BY ID DESC LIMIT ? OFFSET ?',
       [true, limit, (page - 1) * limit]
     );

     return {
       data: rows,
       meta: {
         total: totalPages,
         page: page,
         lastPage: lastPage,
       }
     };
  }

  findOne(id: number) {
    return `This action returns a #${id} assignment`;
  }

  update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    return `This action updates a #${id} assignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignment`;
  }
}
