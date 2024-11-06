import { Column,PrimaryGeneratedColumn } from "typeorm";

export class Template {

    @PrimaryGeneratedColumn({ type: 'int' })
    id: number; 

    @Column({ type: 'nvarchar' })
    idTemplate: string;

    @Column({ type: 'nvarchar' })
    category: string;

    @Column({ type: 'nvarchar' })
    description: string;
    
    @Column({ type: 'boolean' })
    status: boolean;
}
