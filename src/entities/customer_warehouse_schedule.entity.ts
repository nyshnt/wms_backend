import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { CustomerMaster } from './customer_master.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';
import { CarrierMove } from './carrier_move.entity';

@ObjectType('CustomerWarehouseSchedule')
@Entity('customer_warehouse_schedule')
@Index('IDX_customer_warehouse_schedule_customer_number', ['customer_number'], { unique: true })
@Index('IDX_customer_warehouse_schedule_warehouse_id', ['warehouse_id'], { unique: true })
@Index('IDX_customer_warehouse_schedule_client_id', ['client_id'], { unique: true })
@Index('IDX_customer_warehouse_schedule_carrier_move_id', ['carrier_move_id'], { unique: true })
export class CustomerWarehouseSchedule extends BaseEntity {
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

    @Field(() => CarrierMove, { description: 'Primary and Foreign key referencing Carrier_Move.' })
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(() => CarrierMove)
    @JoinColumn({ name: 'carrier_move_id', referencedColumnName: 'carrier_move_id' })
    carrier_move_id: CarrierMove;

    @Field(() => String, { description: 'Code for the beginning day.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    begin_day_code: string;

    @Field(() => String, { description: 'Start time for the schedule.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    begin_time: string;

    @Field(() => String, { description: 'Code for the ending day.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    end_day_code: string;

    @Field(() => String, { description: 'End time for the schedule.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    end_time: string;
} 