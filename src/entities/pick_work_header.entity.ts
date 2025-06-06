import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';
import { PickBatch } from './pick_batch.entity';

@ObjectType('PickWorkHeader')
@Entity('pick_work_header')
export class PickWorkHeader {
  @Field(() => String, { description: 'Unique identifier for the pick work header.' })
  @PrimaryColumn({ name: 'work_reference' })
  work_reference: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Description of the pick work.' })
  @Column({ name: 'description', type: 'varchar', length: 255, nullable: true })
  description: string;

  @Field(() => PickBatch, { description: 'Foreign key referencing Pick_Batch.' })
  @ManyToOne(() => PickBatch)
  @JoinColumn({ name: 'schedule_batch_id', referencedColumnName: 'schedule_batch_id' })
  schedule_batch_id: string;
}
