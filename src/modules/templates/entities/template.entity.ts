import { Column,PrimaryGeneratedColumn } from "typeorm";

export class Template {

    @PrimaryGeneratedColumn({ type: 'int' })
    id: number; 

    @Column({ type: 'nvarchar' })
    description: string;
    
    @Column({ type: 'boolean' })
    status: boolean;
}
