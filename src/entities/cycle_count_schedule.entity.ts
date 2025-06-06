import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { PartMaster } from './part_master.entity';

@ObjectType('CycleCountSchedule')
@Entity('cycle_count_schedule')
export class CycleCountSchedule {
  @Field(() => String, { description: 'Unique sequence number for the schedule.' })
  @PrimaryColumn({ name: 'sequence_number' })
  sequence_number: string;

  @Field(() => String, { description: 'Identifier for the count.' })
  @Column({ name: 'count_id', type: 'varchar' })
  count_id: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => PartMaster, { description: 'Part number.' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: PartMaster;

  @Field(() => String, { description: 'Batch number for the count.' })
  @Column({ name: 'count_batch_number', type: 'varchar' })
  count_batch_number: string;
} 