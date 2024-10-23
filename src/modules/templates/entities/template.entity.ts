import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Template')
export class Template {

    @PrimaryGeneratedColumn()
    id: number; 

    @Column({ type: 'nvarchar' })
    description: string;
}
