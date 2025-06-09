import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PickListRule } from './pick_list_rule.entity';

@ObjectType()
@Entity('pick_list_sequence_criteria')
export class PickListSequenceCriteria {
  @Field(() => String, { description: 'Unique ID for sequence criteria.' })
  @PrimaryGeneratedColumn({ name: 'pick_list_sequence_criteria_id' })
  pick_list_sequence_criteria_id: string;

  @Field(() => PickListRule, { description: 'Foreign key to Pick_List_Rule.' })
  @ManyToOne(() => PickListRule)
  @JoinColumn({ name: 'pick_list_rule_id' })
  pick_list_rule: PickListRule;

  @Field(() => String, { description: 'Table name for sequencing.' })
  @Column({ name: 'table_name' })
  table_name: string;

  @Field(() => String, { description: 'Field name for sequencing.' })
  @Column({ name: 'field_name' })
  field_name: string;

  @Field(() => String, { description: 'Sort order (ASC, DESC).' })
  @Column({ name: 'sort_order' })
  sort_order: string;

  @Field(() => Number, { description: 'Sequence number for sort criteria.' })
  @Column({ name: 'sequence_number' })
  sequence_number: number;
} 