import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PickWorkHeader } from './pick_work_header.entity';

@ObjectType('WorkQueue')
@Entity('work_queue')
export class WorkQueue {
  @Field(() => String, { description: 'Unique identifier for the work queue entry.' })
  @PrimaryColumn({ name: 'registration_number' })
  registration_number: string;

  @Field(() => PickWorkHeader, { description: 'Foreign key referencing Pick_Work_Header.' })
  @ManyToOne(() => PickWorkHeader)
  @JoinColumn({ name: 'work_reference', referencedColumnName: 'work_reference' })
  work_reference: string;
} 