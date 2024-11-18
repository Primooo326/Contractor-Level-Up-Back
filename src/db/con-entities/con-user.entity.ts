import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ConProyect } from "./con-proyect.entity";

@Entity('users')
export class ConUser {
    @PrimaryColumn({name: 'id', type: 'int'})
    id: number;

    @Column({ name: 'proyects_id', type: 'int' })
    proyects_id: number;

    @ManyToOne(() => ConProyect, (proyect) => proyect.user)
    @JoinColumn({ name: 'proyects_id', referencedColumnName: 'id' })
    proyect: ConProyect;

    @Column({ name: 'full_name', type: 'varchar', length: 100 })
    full_name: string;

    @Column({ name: 'first_name', type: 'varchar', length: 45 })
    first_name: string;

    @Column({ name: 'last_name', type: 'varchar', length: 45 })
    last_name: string;

    @Column({ name: 'is_admin', type: 'tinyint' })
    is_admin?: boolean;

    @Column({ name: 'email', type: 'varchar', length: 255 })
    email: string;

    @Column({ name: 'password', type: 'varchar', length: 255 })
    password: string;

    @Column({ name: 'last_password_update', type: 'datetime' })
    last_password_update?: Date;

    @Column({ name: 'state', type: 'tinyint' })
    state?: boolean;

    @Column({ name: 'created_at', type: 'timestamp' })
    created_at?: string;

    @Column({ name: 'updated_at', type: 'timestamp' })
    updated_at?: string;
}
