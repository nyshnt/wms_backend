import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { OrderLine } from './order_line.entity';
import { OrderHeader } from './order_header.entity';
import { Client } from './client.entity';

@ObjectType('ShipmentLine')
@Entity('shipment_line')
@Index('IDX_shipment_line_shipment_line_id', ['shipment_line_id'], { unique: true })
export class ShipmentLine extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the shipment line.' })
    @PrimaryColumn({ name: 'shipment_line_id' })
    shipment_line_id: string;

    @Field(() => String, { description: 'Shipment ID.' })
    @Column({ name: 'shipment_id', type: 'varchar', length: 255, nullable: true })
    shipment_id: string;

    @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => OrderHeader, { description: 'Foreign key referencing Order_Header.' })
    @ManyToOne(() => OrderHeader)
    @JoinColumn({ name: 'order_number', referencedColumnName: 'order_number' })
    order_number: OrderHeader;

    @Field(() => OrderLine, { description: 'Foreign key referencing Order_Line.' })
    @ManyToOne(() => OrderLine)
    @JoinColumn({ name: 'order_line_number', referencedColumnName: 'order_line_number' })
    order_line_number: OrderLine;

    @Field(() => OrderLine, { description: 'Foreign key referencing Order_Line.' })
    @ManyToOne(() => OrderLine)
    @JoinColumn({ name: 'order_subline_number', referencedColumnName: 'order_subline_number' })
    order_subline_number: OrderLine;
} 