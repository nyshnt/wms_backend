import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PickListRule } from './pick_list_rule.entity';

@ObjectType()
@Entity('pick_list_group_criteria')
export class PickListGroupCriteria {
  @Field(() => String, { description: 'Unique ID for group criteria.' })
  @PrimaryGeneratedColumn({ name: 'pick_list_group_criteria_id' })
  pick_list_group_criteria_id: string;

  @Field(() => Number, { description: 'Sequence number.' })
  @Column({ name: 'sequence_number' })
  sequence_number: number;

  @Field(() => String, { description: 'Table name for criteria.' })
  @Column({ name: 'table_name' })
  table_name: string;

  @Field(() => String, { description: 'Field name for criteria.' })
  @Column({ name: 'field_name' })
  field_name: string;

  @Field(() => PickListRule, { description: 'Foreign key to Pick_List_Rule.' })
  @ManyToOne(() => PickListRule)
  @JoinColumn({ name: 'pick_list_rule_id' })
  pick_list_rule: PickListRule;
} 