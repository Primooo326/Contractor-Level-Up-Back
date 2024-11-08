import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Phone {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'nvarchar' })
    phoneNumber: string;

    @Column({ type: 'nvarchar' })
    friendlyName: string;

    @Column({ type: 'nvarchar' })
    sid: string;

    @Column({ type: 'nvarchar' })
    countryCode: string;

    @Column({ type: 'boolean' })
    status: boolean;
}






