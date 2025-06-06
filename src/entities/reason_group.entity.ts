import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ReasonGroup')
@Entity('reason_group')
export class ReasonGroup {
  @Field(() => String, { description: 'Unique identifier for the reason group.' })
  @PrimaryColumn({ name: 'reason_group' })
  reason_group: string;
} 