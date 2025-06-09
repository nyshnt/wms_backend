import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Client } from './client.entity';

@ObjectType('CustomerMaster')
@Entity('customer_master')
@Index('IDX_customer_master_customer_number', ['customer_number'], { unique: true })
export class CustomerMaster extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the customer.' })
    @PrimaryColumn({ name: 'customer_number' })
    customer_number: string;

    @Field(() => Client, { description: 'Foreign key referencing Client_Master.' })
    @PrimaryColumn({ name: 'client_id' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: string;
}
