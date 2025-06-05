import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { CustomerMaster } from './customer_master.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('WarehouseCustomerMaster')
@Entity('warehouse_customer_master')
@Index('IDX_warehouse_customer_master_customer_number', ['customer_number'], { unique: true })
@Index('IDX_warehouse_customer_master_warehouse_id', ['warehouse_id'], { unique: true })
@Index('IDX_warehouse_customer_master_client_id', ['client_id'], { unique: true })
export class WarehouseCustomerMaster extends BaseEntity {
    @Field(() => CustomerMaster, { description: 'Primary and Foreign key referencing Customer_Master.' })
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(() => CustomerMaster)
    @JoinColumn({ name: 'customer_number', referencedColumnName: 'customer_number' })
    customer_number: CustomerMaster;

    @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;

    @Field(() => Client, { description: 'Primary and Foreign key referencing the Client table.' })
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;
} 