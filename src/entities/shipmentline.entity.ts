import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { ShipmentHeader } from './shipment_header.entity';
import { Client } from './client.entity';

@ObjectType('ShipmentLine')
@Entity('shipment_line')
@Index('IDX_shipment_line_shipment_line_id', ['shipment_line_id'], { unique: true })
@Index('IDX_shipment_line_shipment_id', ['shipment_id'])
@Index('IDX_shipment_line_client_id', ['client_id'])
@Index('IDX_shipment_line_order_number', ['order_number'])
export class ShipmentLine extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the shipment line.' })
    @PrimaryGeneratedColumn('uuid')
    shipment_line_id: string;

    @Field(() => ShipmentHeader, { description: 'Foreign key referencing the Shipment_Header table.' })
    @ManyToOne(() => ShipmentHeader)
    @JoinColumn({ name: 'shipment_id', referencedColumnName: 'shipment_id' })
    shipment_id: ShipmentHeader;

    @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => String, { description: 'Foreign key referencing the Order_Header table.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    order_number: string;

    @Field(() => Number, { description: 'Line number within the order.' })
    @Column({ type: 'int', nullable: false })
    order_line: number;

    @Field(() => Number, { description: 'Subline number within the order.' })
    @Column({ type: 'int', nullable: false })
    order_subline: number;
}
