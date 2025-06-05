import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Client } from './client.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('OrderHeader')
@Entity('order_header')
@Index('IDX_order_header_order_number', ['order_number'], { unique: true })
@Index('IDX_order_header_client_id', ['client_id'])
@Index('IDX_order_header_warehouse_id', ['warehouse_id'])
export class OrderHeader extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the order header.' })
    @PrimaryGeneratedColumn('uuid')
    order_number: string;

    @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;
}
