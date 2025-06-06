import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { WorkOrderDetail } from './work_order_detail.entity';
import { Client } from './client.entity';

@ObjectType('WorkOrderDetailNote')
@Entity('work_order_detail_note')
export class WorkOrderDetailNote {
  @Field(() => String, { description: 'Primary and Foreign key referencing Work_Order_Detail.' })
  @PrimaryColumn({ name: 'work_order_number' })
  @ManyToOne(() => WorkOrderDetail)
  @JoinColumn({ name: 'work_order_number', referencedColumnName: 'work_order_number' })
  work_order_number: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Work_Order_Detail.' })
  @PrimaryColumn({ name: 'work_order_revision' })
  @ManyToOne(() => WorkOrderDetail)
  @JoinColumn({ name: 'work_order_revision', referencedColumnName: 'work_order_revision' })
  work_order_revision: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Work_Order_Detail.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => WorkOrderDetail)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Client table.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => Number, { description: 'Primary and Foreign key referencing Work_Order_Detail.' })
  @PrimaryColumn({ name: 'work_order_line_number' })
  @ManyToOne(() => WorkOrderDetail)
  @JoinColumn({ name: 'work_order_line_number', referencedColumnName: 'work_order_line_number' })
  work_order_line_number: number;

  @Field(() => Number, { description: 'Primary and Foreign key referencing Work_Order_Detail.' })
  @PrimaryColumn({ name: 'segment_number' })
  @ManyToOne(() => WorkOrderDetail)
  @JoinColumn({ name: 'segment_number', referencedColumnName: 'segment_number' })
  segment_number: number;

  @Field(() => Number, { description: 'Line number for the note.' })
  @PrimaryColumn({ name: 'note_line_number', type: 'int', nullable: false })
  note_line_number: number;
} 