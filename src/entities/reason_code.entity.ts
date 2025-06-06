import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ReasonCode')
@Entity('reason_code')
export class ReasonCode {
  @Field(() => String, { description: 'Unique identifier for the reason code.' })
  @PrimaryColumn({ name: 'reason_code' })
  reason_code: string;
} 