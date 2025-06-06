import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PickWorkHeader } from './pick_work_header.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';
import { WorkOrderDetail } from './work_order_detail.entity';
import { InventoryDetail } from './inventory_detail.entity';
import { ShipmentLine } from './shipment_line.entity';

@ObjectType('PickWorkDetail')
@Entity('pick_work_detail')
export class PickWorkDetail {
  @Field(() => String, { description: 'Unique identifier for the pick work detail.' })
  @PrimaryColumn({ name: 'work_reference_detail_id' })
  work_reference_detail_id: string;

  @Field(() => PickWorkHeader, { description: 'Foreign key referencing Pick_Work_Header.' })
  @ManyToOne(() => PickWorkHeader)
  @JoinColumn({ name: 'work_reference', referencedColumnName: 'work_reference' })
  work_reference: string;

  @Field(() => String, { description: 'Combination code.' })
  @Column({ name: 'combination_code', type: 'varchar', length: 255, nullable: true })
  combination_code: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => WorkOrderDetail, { description: 'Foreign key referencing Work_Order_Detail.' })
  @ManyToOne(() => WorkOrderDetail)
  @JoinColumn({ name: 'work_order_number', referencedColumnName: 'work_order_number' })
  work_order_number: string;

  @Field(() => WorkOrderDetail, { description: 'Foreign key referencing Work_Order_Detail.' })
  @ManyToOne(() => WorkOrderDetail)
  @JoinColumn({ name: 'work_order_revision', referencedColumnName: 'work_order_revision' })
  work_order_revision: string;

  @Field(() => WorkOrderDetail, { description: 'Foreign key referencing Work_Order_Detail.' })
  @ManyToOne(() => WorkOrderDetail)
  @JoinColumn({ name: 'work_order_line_number', referencedColumnName: 'work_order_line_number' })
  work_order_line_number: number;

  @Field(() => InventoryDetail, { description: 'Foreign key referencing Inventory_Detail.' })
  @ManyToOne(() => InventoryDetail)
  @JoinColumn({ name: 'inventory_detail_number', referencedColumnName: 'inventory_detail_number' })
  inventory_detail_number: string;

  @Field(() => ShipmentLine, { description: 'Foreign key referencing Shipment_Line.' })
  @ManyToOne(() => ShipmentLine)
  @JoinColumn({ name: 'shipment_line_id', referencedColumnName: 'shipment_line_id' })
  shipment_line_id: string;
} 