import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Proyect {

    @PrimaryGeneratedColumn({ type: 'int' })
    id: number; 

    @Column({type:'nvarchar'})
    name: string;

    @Column({ type: 'boolean' })
    estado: boolean;

    @Column({type:'date'})
    create_at: Date;

    @Column({ type: 'date' })
    updated_at: Date;
}
