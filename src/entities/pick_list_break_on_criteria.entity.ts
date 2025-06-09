import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PickListRule } from './pick_list_rule.entity';

@ObjectType()
@Entity('pick_list_break_on_criteria')
export class PickListBreakOnCriteria {
  @Field(() => String, { description: 'Unique ID for break-on criteria.' })
  @PrimaryGeneratedColumn({ name: 'pick_list_break_on_criteria_id' })
  pick_list_break_on_criteria_id: string;

  @Field(() => PickListRule, { description: 'Foreign key to Pick_List_Rule.' })
  @ManyToOne(() => PickListRule)
  @JoinColumn({ name: 'pick_list_rule_id' })
  pick_list_rule: PickListRule;

  @Field(() => String, { description: 'Function to apply for breaking.' })
  @Column({ name: 'break_on_function' })
  break_on_function: string;

  @Field(() => String, { description: 'Field to break on.' })
  @Column({ name: 'break_on_field' })
  break_on_field: string;

  @Field(() => Number, { description: 'Sequence number.' })
  @Column({ name: 'sequence_number' })
  sequence_number: number;

  @Field(() => Number, { description: 'Max weight before breaking.' })
  @Column({ name: 'max_weight_per_break' })
  max_weight_per_break: number;

  @Field(() => Number, { description: 'Max volume before breaking.' })
  @Column({ name: 'max_volume_per_break' })
  max_volume_per_break: number;

  @Field(() => Number, { description: 'Max quantity before breaking.' })
  @Column({ name: 'max_quantity_per_break' })
  max_quantity_per_break: number;

  @Field(() => Number, { description: 'Volume threshold before breaking.' })
  @Column({ name: 'volume_threshold_per_break' })
  volume_threshold_per_break: number;

  @Field(() => Number, { description: 'Max additional pick weight before breaking.' })
  @Column({ name: 'max_additional_pick_weight' })
  max_additional_pick_weight: number;
} 