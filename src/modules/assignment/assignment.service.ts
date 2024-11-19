import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { mysqlConfig } from 'src/config/mysql.config';
import { UserLoginDto } from 'src/common/dto/user-login.dto';

@Injectable()
export class AssignmentService {
  private pool = mysqlConfig;


  async create(createAssignmentDto: CreateAssignmentDto, user: UserLoginDto) {
    const { iduser_high_level, contact_id, full_name_contact, first_name_contact, last_name_contact, email_contact, phone_contact, email_assignment } = createAssignmentDto;

    const id_user = user.userId;

    const query = 'INSERT INTO assignment (id_user,iduser_high_level,contact_id,full_name_contact,first_name_contact,last_name_contact,email_contact,phone_contact,email_assignment) VALUES (?,?,?,?,?,?,?,?,?)';

    const values = [id_user, iduser_high_level, contact_id, full_name_contact, first_name_contact, last_name_contact, email_contact, phone_contact, email_assignment];

    try {
      const result = await this.pool.promise().query(query, values);
      return result;
    } catch (error) {
      throw new Error('Error creating project: ' + error.message);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const [totalRowsResult] = await this.pool.promise().query('SELECT COUNT(*) AS total FROM assignment WHERE state = ?', [true]);

    const totalPages = totalRowsResult[0].total;
    const lastPage = Math.ceil(totalPages / limit);

    const [rows] = await this.pool.promise().query(
      `SELECT 
        a.id AS id_contact,
        a.id_user AS id_user_contact,
        a.contact_id AS contact_id_contact,
        a.full_name_contact AS full_name_contact,
        a.first_name_contact AS first_name_contact,
        a.last_name_contact AS last_name_contact,
        a.email_contact AS email_contact,
        a.phone_contact AS phone_contact,
        a.iduser_high_level AS iduser_high_level_contact,
        a.email_assignment AS email_assignment_contact,
        a.state AS state_contact,
        a.assignment_date AS assignment_date_contact,
        u.id AS id_user,
        u.proyects_id AS proyects_id_user,
        u.full_name AS full_name_user,
        u.first_name AS first_name_user,
        u.last_name AS last_name_user,
        u.is_admin AS is_admin_user,
        u.email AS email_user,
        u.password AS password_user,
        u.last_password_update AS last_password_update_user,
        u.state AS state_user,
        u.created_at AS created_at_user,
        u.updated_at AS updated_at_user

         FROM assignment AS a 
         JOIN users AS u ON a.id_user = u.id 
         WHERE a.state = ? 
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
      'SELECT * FROM assignment WHERE state = ? AND ID = ? LIMIT 1',
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
