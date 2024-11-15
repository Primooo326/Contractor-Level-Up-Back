import { Injectable } from '@nestjs/common';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { mysqlConfig } from 'src/config/mysql.config';

@Injectable()
export class ProyectsService {
  private pool = mysqlConfig;
 async create(createProyectDto: CreateProyectDto) {
    const { name_proyect } = createProyectDto;
    const query = 'INSERT INTO proyects (name_proyect) VALUES (?)';
   const values = [name_proyect];

    try {
      const result = await this.pool.promise().query(query, values);
      return result; 
    } catch (error) {
      throw new Error('Error creating project: ' + error.message);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const [totalRowsResult] = await this.pool.promise().query('SELECT COUNT(*) AS total FROM proyects WHERE estado = ?', [true]);
    const totalPages = totalRowsResult[0].total;
    const lastPage = Math.ceil(totalPages / limit);
    const [rows] = await this.pool.promise().query(
      'SELECT * FROM proyects WHERE estado = ? ORDER BY ID DESC LIMIT ? OFFSET ?',
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

  async findOne(id: number) {
    const [rows] = await this.pool.promise().query(
      'SELECT * FROM proyects WHERE estado = ? AND ID = ? LIMIT 1',
      [true, id]
    );
    if (Array.isArray(rows) && rows.length === 0) {
      throw new Error('Project not found');
    }
    return rows[0];
  }

  update(id: number, updateProyectDto: UpdateProyectDto) {
    
  }

  remove(id: number) {
    return `This action removes a #${id} proyect`;
  }
}
