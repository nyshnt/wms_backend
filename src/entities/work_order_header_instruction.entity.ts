import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { WorkOrderHeader } from './work_order_header.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('WorkOrderHeaderInstruction')
@Entity('work_order_header_instruction')
export class WorkOrderHeaderInstruction {
  @Field(() => String, { description: 'Primary and Foreign key referencing Work_Order_Header.' })
  @PrimaryColumn({ name: 'work_order_number' })
  @ManyToOne(() => WorkOrderHeader)
  @JoinColumn({ name: 'work_order_number', referencedColumnName: 'work_order_number' })
  work_order_number: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Work_Order_Header.' })
  @PrimaryColumn({ name: 'work_order_revision' })
  @ManyToOne(() => WorkOrderHeader)
  @JoinColumn({ name: 'work_order_revision', referencedColumnName: 'work_order_revision' })
  work_order_revision: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Warehouse table.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Client table.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Unique key for the instruction.' })
  @Column({ name: 'instruction_key', type: 'varchar', length: 255, nullable: false })
  instruction_key: string;
} 