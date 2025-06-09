import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PickListRule } from './pick_list_rule.entity';

@ObjectType()
@Entity('pick_list_select_criteria')
export class PickListSelectCriteria {
  @Field(() => String, { description: 'Unique ID for select criteria.' })
  @PrimaryGeneratedColumn({ name: 'pick_list_select_criteria_id' })
  pick_list_select_criteria_id: string;

  @Field(() => PickListRule, { description: 'Foreign key to Pick_List_Rule.' })
  @ManyToOne(() => PickListRule)
  @JoinColumn({ name: 'pick_list_rule_id' })
  pick_list_rule: PickListRule;

  @Field(() => Number, { description: 'Sequence number.' })
  @Column({ name: 'sequence_number' })
  sequence_number: number;

  @Field(() => String, { description: 'Logical operator (AND, OR).' })
  @Column({ name: 'logical_operator' })
  logical_operator: string;

  @Field(() => String, { description: 'Table name for criteria.' })
  @Column({ name: 'table_name' })
  table_name: string;

  @Field(() => String, { description: 'Field name for criteria.' })
  @Column({ name: 'field_name' })
  field_name: string;

  @Field(() => String, { description: 'Comparison operator (=, >, <).' })
  @Column({ name: 'operator' })
  operator: string;

  @Field(() => String, { description: 'Value for comparison.' })
  @Column({ name: 'value' })
  value: string;
} 