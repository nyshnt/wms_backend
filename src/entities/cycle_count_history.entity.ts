import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { CycleCountHeader } from './cycle_count_header.entity';

@ObjectType('CycleCountHistory')
@Entity('cycle_count_history')
export class CycleCountHistory {
  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => CycleCountHeader, { description: 'Count batch number.' })
  @PrimaryColumn({ name: 'count_batch_number' })
  @ManyToOne(() => CycleCountHeader)
  @JoinColumn({ name: 'count_batch_number', referencedColumnName: 'count_batch_number' })
  count_batch_number: CycleCountHeader;

  @Field(() => Date, { description: 'Date of the count.' })
  @Column({ name: 'count_date', type: 'timestamp' })
  count_date: Date;

  @Field(() => String, { description: 'Original count batch.' })
  @Column({ name: 'original_count_batch_number', type: 'varchar' })
  original_count_batch_number: string;

  @Field(() => String, { description: 'Historical inventory identifiers.' })
  @Column({ name: 'inventory_identifier_1', type: 'varchar' })
  inventory_identifier_1: string;
} 