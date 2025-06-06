import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('CycleCountType')
@Entity('cycle_count_type')
export class CycleCountType {
  @Field(() => String, { description: 'Unique identifier for the cycle count type.' })
  @PrimaryColumn({ name: 'count_type' })
  count_type: string;

  @Field(() => String, { description: 'Operation code associated with the type.' })
  @Column({ name: 'operation_code', type: 'varchar' })
  operation_code: string;

  @Field(() => Boolean, { description: 'Flag indicating if details are present.' })
  @Column({ name: 'detail_flag', type: 'boolean' })
  detail_flag: boolean;
}