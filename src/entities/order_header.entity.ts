import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Client } from './client.entity';
import { WarehouseMaster } from './warehouse_master.entity';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('OrderHeader')
@Entity('order_header')
@Index('IDX_order_header_order_number', ['order_number'], { unique: true })
@Index('IDX_order_header_client_id', ['client_id'])
@Index('IDX_order_header_warehouse_id', ['warehouse_id'])
export class OrderHeader extends BaseEntity {
  @Field(() => String, { description: 'Order ID.' })
  @PrimaryGeneratedColumn('uuid')
  order_id: string;

  @Field(() => String, { description: 'Order number.' })
  @Column({ name: 'order_number', type: 'varchar', length: 255 })
  order_number: string;

  @Field(() => String, { description: 'Client ID associated with the order.' })
  @Column({ name: 'client_id', type: 'uuid' })
  client_id: string;

  @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client: Client;

  @Field(() => String, { description: 'Warehouse ID where the order is stored.' })
  @Column({ name: 'warehouse_id', type: 'varchar', length: 255 })
  warehouse_id: string;

  @Field(() => WarehouseMaster, { description: 'Foreign key referencing the WarehouseMaster table.' })
  @ManyToOne(() => WarehouseMaster)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: WarehouseMaster;

  @Field(() => Date, { description: 'Date when the order was created.' })
  @Column({ name: 'order_date', type: 'date' })
  order_date: Date;

  @Field(() => String, { description: 'Status of the order.' })
  @Column({ name: 'order_status', type: 'varchar', length: 255 })
  order_status: string;
}
