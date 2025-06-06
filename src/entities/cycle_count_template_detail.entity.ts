import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { CycleCountTemplateHeader } from './cycle_count_template_header.entity';

@ObjectType('CycleCountTemplateDetail')
@Entity('cycle_count_template_detail')
export class CycleCountTemplateDetail {
  @Field(() => CycleCountTemplateHeader, { description: 'Cycle count template ID.' })
  @PrimaryColumn({ name: 'cycle_count_template_id' })
  @ManyToOne(() => CycleCountTemplateHeader)
  @JoinColumn({ name: 'cycle_count_template_id', referencedColumnName: 'cycle_count_template_id' })
  cycle_count_template_id: CycleCountTemplateHeader;

  @Field(() => String, { description: 'Name of the variable in the template detail.' })
  @PrimaryColumn({ name: 'variable_name' })
  variable_name: string;

  @Field(() => String, { description: 'Value of the variable.' })
  @Column({ name: 'value', type: 'varchar' })
  value: string;
}