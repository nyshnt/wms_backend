import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { OrderHeader } from './order_header.entity';
import { Client } from './client.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('OrderLine')
@Entity('order_line')
@Index('IDX_order_line_order_number', ['order_number'])
@Index('IDX_order_line_client_id', ['client_id'])
@Index('IDX_order_line_warehouse_id', ['warehouse_id'])
export class OrderLine extends BaseEntity {
    @Field(() => String, { description: 'Foreign key referencing Order_Header table.' })
    @ManyToOne(() => OrderHeader)
    @JoinColumn({ name: 'order_number', referencedColumnName: 'order_number' })
    order_number: OrderHeader;

    @Field(() => Number, { description: 'Line number within the order.' })
    @PrimaryGeneratedColumn('increment')
    order_line_number: number;

    @Field(() => Number, { description: 'Subline number within the order.' })
    @PrimaryGeneratedColumn('increment')
    order_subline_number: number;

    @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;
}
