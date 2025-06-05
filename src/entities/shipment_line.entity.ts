import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { OrderLine } from './order_line.entity';
import { OrderHeader } from './order_header.entity';

@ObjectType('ShipmentLine')
@Entity('shipment_line')
@Index('IDX_shipment_line_shipment_line_id', ['shipment_line_id'], { unique: true })
export class ShipmentLine extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the shipment line.' })
    @PrimaryGeneratedColumn('uuid')
    shipment_line_id: string;

    @Field(() => OrderLine, { description: 'Foreign key referencing Order_Line table.' })
    @ManyToOne(() => OrderLine)
    @JoinColumn({ name: 'order_line_number', referencedColumnName: 'order_line_number' })
    order_line_number: OrderLine;

    @Field(() => OrderLine, { description: 'Foreign key referencing Order_Line table.' })
    @ManyToOne(() => OrderLine)
    @JoinColumn({ name: 'order_subline_number', referencedColumnName: 'order_subline_number' })
    order_subline_number: OrderLine;

    @Field(() => OrderHeader, { description: 'Foreign key referencing Order_Header table.' })
    @ManyToOne(() => OrderHeader)
    @JoinColumn({ name: 'order_number', referencedColumnName: 'order_number' })
    order_number: OrderHeader;
} 