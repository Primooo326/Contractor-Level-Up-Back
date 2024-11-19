import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { mysqlConfig } from 'src/config/mysql.config';

@Injectable()
export class AssignmentService {
  private pool = mysqlConfig;


  async create(createAssignmentDto: CreateAssignmentDto) {
    const { id_user, iduser_high_level, contact_id, full_name_contact, first_name_contact, last_name_contact, email, phone_contact } = createAssignmentDto;
    const query = 'INSERT INTO assignment (id_user,iduser_high_level,contact_id,full_name_contact,first_name_contact,last_name_contact,email,phone_contact) VALUES (?,?,?,?,?,?,?,?)';
    const values = [id_user, iduser_high_level, contact_id, full_name_contact, first_name_contact, last_name_contact, email, phone_contact];
    try {
      const result = await this.pool.promise().query(query, values);
      return result;
    } catch (error) {
      throw new Error('Error creating project: ' + error.message);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const [totalRowsResult] = await this.pool.promise().query('SELECT COUNT(*) AS total FROM assignment WHERE estado = ?', [true]);

    const totalPages = totalRowsResult[0].total;
    const lastPage = Math.ceil(totalPages / limit);

    const [rows] = await this.pool.promise().query(
      `SELECT a.*, u.* 
         FROM assignment AS a 
         JOIN users AS u ON a.id_user = u.id 
         WHERE a.estado = ? 
         ORDER BY a.ID DESC 
         LIMIT ? OFFSET ?`,
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
      'SELECT * FROM assignment WHERE estado = ? AND ID = ? LIMIT 1',
      [true, id]
    );
    if (Array.isArray(rows) && rows.length === 0) {
      throw new Error('no assignment found with the id ${id}');
    }
    return rows[0];
  }

  update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    return `This action updates a #${id} assignment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignment`;
  }
}
