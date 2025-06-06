import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { CycleCountSchedule } from './cycle_count_schedule.entity';

@ObjectType('CycleCountHeader')
@Entity('cycle_count_header')
export class CycleCountHeader {
  @Field(() => String, { description: 'Unique identifier for the cycle count batch.' })
  @PrimaryColumn({ name: 'count_batch_number' })
  count_batch_number: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => Date, { description: 'Date when the count batch was created.' })
  @Column({ name: 'creation_date', type: 'timestamp' })
  creation_date: Date;

  @Field(() => String, { description: 'Inventory identifiers.' })
  @Column({ name: 'inventory_identifier_1', type: 'varchar' })
  inventory_identifier_1: string;

  @Field(() => String, { description: 'Inventory values.' })
  @Column({ name: 'inventory_value_1', type: 'varchar' })
  inventory_value_1: string;

  @Field(() => Boolean, { description: 'Flags for identifiers.' })
  @Column({ name: 'identifier_flag_1', type: 'boolean' })
  identifier_flag_1: boolean;

  @Field(() => CycleCountSchedule, { description: 'Sequence number.' })
  @ManyToOne(() => CycleCountSchedule)
  @JoinColumn({ name: 'sequence_number', referencedColumnName: 'sequence_number' })
  sequence_number: CycleCountSchedule;
} 