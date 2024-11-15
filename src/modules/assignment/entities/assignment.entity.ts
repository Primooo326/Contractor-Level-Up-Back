import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Assignment {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number; 
    
    @Column()
    idu_ser:string;
    
    @Column()
    iduser_high_level:string;

    @Column()
    contact_id:string;

    @Column()
    full_name_contact:string;

    @Column()
    first_name_contact:string;

    @Column()
    last_name_contact:string;

    @Column()
    email:string;

    @Column()
    phone_contact:string;

    @Column()
    status:boolean;

    @Column()
    assignment_date:Date;
}
