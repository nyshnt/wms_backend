import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { CycleCountHeader } from './cycle_count_header.entity';
import { LocationMaster } from './location_master.entity';
import { CycleCountType } from './cycle_count_type.entity';
import { PartMaster } from './part_master.entity';
import { ClientMaster } from './client_master.entity';

@ObjectType('CycleCountWork')
@Entity('cycle_count_work')
export class CycleCountWork {
  @Field(() => CycleCountHeader, { description: 'Count batch number.' })
  @PrimaryColumn({ name: 'count_batch_number' })
  @ManyToOne(() => CycleCountHeader)
  @JoinColumn({ name: 'count_batch_number', referencedColumnName: 'count_batch_number' })
  count_batch_number: CycleCountHeader;

  @Field(() => LocationMaster, { description: 'Stock location.' })
  @ManyToOne(() => LocationMaster)
  @JoinColumn({ name: 'stock_location', referencedColumnName: 'storage_location' })
  stock_location: LocationMaster;

  @Field(() => CycleCountType, { description: 'Count type.' })
  @ManyToOne(() => CycleCountType)
  @JoinColumn({ name: 'count_type', referencedColumnName: 'count_type' })
  count_type: CycleCountType;

  @Field(() => PartMaster, { description: 'Part number.' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: PartMaster;

  @Field(() => ClientMaster, { description: 'Part client ID.' })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'client_id' })
  part_client_id: ClientMaster;

  @Field(() => String, { description: 'Inventory values for the work item.' })
  @Column({ name: 'inventory_value_1', type: 'varchar' })
  inventory_value_1: string;
}