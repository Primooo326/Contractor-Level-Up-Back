import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export const ConMysqlConfig = ( host: string, port: string, database: string, username: string, password: string): TypeOrmModuleOptions => {
  return {
    name: 'CON',
    type: 'mysql',
    host: host,
    port: parseInt(port),
    username: username,
    password: password,
    database: database,
    entities: [path.join(__dirname, './con-entities', '**', '*.entity.{ts,js}')],
    synchronize: false,
    logging: false
  };
};