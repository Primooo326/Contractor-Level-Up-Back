import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConUser } from "./con-user.entity";

@Entity('proyects')
export class ConProyect {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    id: number;

    @Column({ name: 'name_proyect', type: 'varchar', length: 45 })
    name_proyect: string;

    @Column({ name: 'state', type: 'tinyint' })
    state?: boolean;

    @Column({ name: 'created_at', type: 'timestamp' })
    created_at?: string;

    @Column({ name: 'updated_at', type: 'timestamp' })
    updated_at?: string;

    @OneToMany(() => ConUser, (user) => user.proyect)
    user: ConUser;
}
