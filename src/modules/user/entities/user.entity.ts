import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar' })
    idUser_High_Level: string

    @Column({ type: 'varchar' })
    full_name: string;

    @Column({ type: 'varchar' })
    first_name: string;

    @Column({ type: 'varchar' })
    last_name: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'boolean' })
    status: boolean;

    @Column({ type: 'boolean', nullable: false })
    is_admin?: boolean;

    @Column({ type: 'integer', nullable: false })
    messages_minute?: number;
}
