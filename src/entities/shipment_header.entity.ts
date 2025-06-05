import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Client } from './client.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('ShipmentHeader')
@Entity('shipment_header')
@Index('IDX_shipment_header_shipment_id', ['shipment_id'], { unique: true })
@Index('IDX_shipment_header_client_id', ['client_id'])
@Index('IDX_shipment_header_warehouse_id', ['warehouse_id'])
export class ShipmentHeader extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the shipment header.' })
    @PrimaryGeneratedColumn('uuid')
    shipment_id: string;

    @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => String, { description: 'Order number associated with the shipment.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    order_number: string;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;

    @Field(() => String, { description: 'Device code associated with the shipment.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    device_code: string;

    @Field(() => String, { description: 'Activity ID.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    activity_id: string;
}
