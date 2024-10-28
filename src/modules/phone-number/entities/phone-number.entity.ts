import { Column, PrimaryGeneratedColumn } from "typeorm";

export class PhoneNumber {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number; 

    @Column({ type: 'nvarchar' })
    sidHigh_Level: string;

    @Column({ type: 'nvarchar' })
    phoneNumber: string;

    @Column({ type: 'nvarchar' })
    friendlyName: string;

    @Column({ type: 'nvarchar' })
    countryCode: string;

    @Column({ type: 'nvarchar' })
    fax: string;

    @Column({ type: 'nvarchar' })
    sms: string;
    
    @Column({ type: 'nvarchar' })
    mms: string;

    @Column({ type: 'nvarchar' })
    type: string;

    @Column({ type: 'nvarchar' })
    status: string;

    @Column({ type: 'nvarchar' })
    isGroupConversationEnabled: string;
}
