import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('HoldMaster')
@Entity('hold_master')
export class HoldMaster {
  @Field(() => String, { description: 'Unique identifier for the hold.' })
  @PrimaryColumn({ name: 'hold_number' })
  hold_number: string;

  @Field(() => String, { description: 'Prefix for the hold.' })
  @Column({ name: 'hold_prefix', type: 'varchar', length: 255, nullable: true })
  hold_prefix: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;
} 