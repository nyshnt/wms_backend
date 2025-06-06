import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('CycleCountTemplateHeader')
@Entity('cycle_count_template_header')
export class CycleCountTemplateHeader {
  @Field(() => String, { description: 'Unique identifier for the cycle count template.' })
  @PrimaryColumn({ name: 'cycle_count_template_id' })
  cycle_count_template_id: string;

  @Field(() => String, { description: 'Identifier for the warehouse.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Boolean, { description: 'Flag indicating if the template is auto-generated.' })
  @Column({ name: 'auto_generate_template_flag', type: 'boolean' })
  auto_generate_template_flag: boolean;
} 