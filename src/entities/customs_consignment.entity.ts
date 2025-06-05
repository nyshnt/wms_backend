import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('CustomsConsignment')
@Entity('customs_consignment')
@Index('IDX_customs_consignment_id', ['customs_consignment_id'], { unique: true })
@Index('IDX_customs_consignment_warehouse_id', ['warehouse_id'])
@Index('IDX_customs_consignment_client_id', ['client_id'])
export class CustomsConsignment extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the customs consignment.' })
    @PrimaryGeneratedColumn('uuid')
    customs_consignment_id: string;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;

    @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => String, { description: 'Supplier number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    supplier_number: string;

    @Field(() => Boolean, { description: 'Flag indicating if there\'s a work order.' })
    @Column({ type: 'boolean', default: false })
    work_order_flag: boolean;
} 