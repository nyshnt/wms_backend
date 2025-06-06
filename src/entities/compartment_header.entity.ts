import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Client } from './client.entity';
import { WorkOrderHeader } from './work_order_header.entity';

@ObjectType('CompartmentHeader')
@Entity('compartment_header')
export class CompartmentHeader {
  @Field(() => String, { description: 'Unique identifier for the compartment header.' })
  @PrimaryColumn({ name: 'compartment_key' })
  compartment_key: string;

  @Field(() => String, { description: 'Foreign key referencing the Client table.' })
  @Column({ name: 'client_id', type: 'varchar' })
  client_id: string;

  @Field(() => String, { description: 'Foreign key referencing Work_Order_Header.' })
  @Column({ name: 'work_order_number', type: 'varchar' })
  work_order_number: string;

  @Field(() => String, { description: 'Foreign key referencing Work_Order_Header.' })
  @Column({ name: 'work_order_revision', type: 'varchar' })
  work_order_revision: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client: Client;

  @ManyToOne(() => WorkOrderHeader)
  @JoinColumn([{ name: 'work_order_number', referencedColumnName: 'work_order_number' }, { name: 'work_order_revision', referencedColumnName: 'work_order_revision' }])
  workOrderHeader: WorkOrderHeader;
} 