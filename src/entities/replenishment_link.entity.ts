import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PickWorkHeader } from './pick_work_header.entity';

@ObjectType('ReplenishmentLink')
@Entity('replenishment_link')
export class ReplenishmentLink {
  @Field(() => String, { description: 'Unique identifier for the replenishment link.' })
  @PrimaryColumn({ name: 'replenishment_reference' })
  replenishment_reference: string;

  @Field(() => PickWorkHeader, { description: 'Primary and Foreign key referencing Pick_Work_Header.' })
  @PrimaryColumn({ name: 'work_reference' })
  @ManyToOne(() => PickWorkHeader)
  @JoinColumn({ name: 'work_reference', referencedColumnName: 'work_reference' })
  work_reference: string;
} 