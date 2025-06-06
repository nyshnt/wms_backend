import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { HoldMaster } from './hold_master.entity';

@ObjectType('HoldHistory')
@Entity('hold_history')
export class HoldHistory {
  @Field(() => HoldMaster, { description: 'Primary and Foreign key referencing Hold_Master.' })
  @PrimaryColumn({ name: 'hold_number' })
  @ManyToOne(() => HoldMaster)
  @JoinColumn({ name: 'hold_number', referencedColumnName: 'hold_number' })
  hold_number: HoldMaster;

  @Field(() => HoldMaster, { description: 'Primary and Foreign key referencing Hold_Master.' })
  @PrimaryColumn({ name: 'hold_prefix' })
  @ManyToOne(() => HoldMaster)
  @JoinColumn({ name: 'hold_prefix', referencedColumnName: 'hold_prefix' })
  hold_prefix: HoldMaster;

  @Field(() => HoldMaster, { description: 'Primary and Foreign key referencing Hold_Master.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => HoldMaster)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: HoldMaster;

  @Field(() => String, { description: 'Unique identifier for the hold history.' })
  @PrimaryColumn({ name: 'hold_history_id' })
  hold_history_id: string;
} 