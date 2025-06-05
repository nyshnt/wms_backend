import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { CustomerMaster } from './customer_master.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('CustomerWarehousePutawayLocation')
@Entity('customer_warehouse_putaway_location')
@Index('IDX_customer_warehouse_putaway_location_customer_number', ['customer_number'], { unique: true })
@Index('IDX_customer_warehouse_putaway_location_warehouse_id', ['warehouse_id'], { unique: true })
@Index('IDX_customer_warehouse_putaway_location_client_id', ['client_id'], { unique: true })
export class CustomerWarehousePutawayLocation extends BaseEntity {
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

    @Field(() => String, { description: 'Sort sequence for putaway location.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    sort_sequence: string;

    @Field(() => String, { description: 'Area code for the location.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    area_code: string;
} 