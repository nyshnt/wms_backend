import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { OrderHeader } from './order_header.entity';
import { Distribution } from './distribution.entity';
import { Client } from './client.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('OrderLine')
@Entity('order_line')
@Index('IDX_order_line_order_number', ['order_number'], { unique: true })
@Index('IDX_order_line_order_line_number', ['order_line_number'], { unique: true })
@Index('IDX_order_line_order_subline_number', ['order_subline_number'], { unique: true })
export class OrderLine extends BaseEntity {
    @Field(() => OrderHeader, { description: 'Foreign key referencing the Order_Header table.' })
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(() => OrderHeader)
    @JoinColumn({ name: 'order_number', referencedColumnName: 'order_number' })
    order_number: OrderHeader;

    @Field(() => String, { description: 'Line number within the order.' })
    @PrimaryGeneratedColumn('uuid')
    order_line_number: string;

    @Field(() => String, { description: 'Subline number within the order.' })
    @PrimaryGeneratedColumn('uuid')
    order_subline_number: string;

    @Field(() => Distribution, { description: 'Foreign key referencing the Distribution table.' })
    @ManyToOne(() => Distribution)
    @JoinColumn({ name: 'distribution_id', referencedColumnName: 'distribution_id' })
    distribution_id: Distribution;

    @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;
} 