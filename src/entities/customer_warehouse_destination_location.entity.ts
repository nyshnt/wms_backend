import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { CustomerMaster } from './customer_master.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('CustomerWarehouseDestinationLocation')
@Entity('customer_warehouse_destination_location')
@Index('IDX_customer_warehouse_destination_location_customer_number', ['customer_number'], { unique: true })
@Index('IDX_customer_warehouse_destination_location_warehouse_id', ['warehouse_id'], { unique: true })
@Index('IDX_customer_warehouse_destination_location_client_id', ['client_id'], { unique: true })
export class CustomerWarehouseDestinationLocation extends BaseEntity {
    @Field(() => CustomerMaster, { description: 'Primary and Foreign key referencing Customer_Master.' })
    @PrimaryColumn({ type: 'uuid' })
    @ManyToOne(() => CustomerMaster)
    @JoinColumn({ name: 'customer_number', referencedColumnName: 'customer_number' })
    customer_number: CustomerMaster;

    @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
    @PrimaryColumn({ type: 'uuid' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;

    @Field(() => Client, { description: 'Primary and Foreign key referencing the Client table.' })
    @PrimaryColumn({ type: 'uuid' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => String, { description: 'Sort sequence for destination location.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    sort_sequence: string;

    @Field(() => String, { description: 'Destination area.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    destination_area: string;
} 