import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Assignment {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number; 
    
    @Column()
    id_user:string;

    @Column()
    contact_id:string;

    @Column()
    full_name_contact:string;

    @Column()
    first_name_contact:string;

    @Column()
    last_name_contact:string;

    @Column()
    email_contact:string;

    @Column()
    phone_contact:string;
    
    @Column()
    iduser_high_level:string;
    
    @Column()
    email_assignment:string;

    @Column()
    state:boolean;

    @Column()
    assignment_date:Date;
}
