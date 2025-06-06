import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('PickBatch')
@Entity('pick_batch')
export class PickBatch {
  @Field(() => String, { description: 'Unique identifier for the pick batch.' })
  @PrimaryColumn({ name: 'schedule_batch_id' })
  schedule_batch_id: string;
} 