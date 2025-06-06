import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ReasonCode } from './reason_code.entity';
import { ReasonGroup } from './reason_group.entity';

@ObjectType('ReasonCodeReasonGroup')
@Entity('reason_code_reason_group')
export class ReasonCodeReasonGroup {
  @Field(() => ReasonCode, { description: 'Reason code.' })
  @PrimaryColumn({ name: 'reason_code' })
  @ManyToOne(() => ReasonCode)
  @JoinColumn({ name: 'reason_code', referencedColumnName: 'reason_code' })
  reason_code: ReasonCode;

  @Field(() => ReasonGroup, { description: 'Reason group.' })
  @PrimaryColumn({ name: 'reason_group' })
  @ManyToOne(() => ReasonGroup)
  @JoinColumn({ name: 'reason_group', referencedColumnName: 'reason_group' })
  reason_group: ReasonGroup;
} 