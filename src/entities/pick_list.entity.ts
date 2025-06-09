import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PickListRule } from './pick_list_rule.entity';
import { PickListRuleGroup } from './pick_list_rule_group.entity';

@ObjectType()
@Entity('pick_list')
export class PickList {
  @Field(() => String, { description: 'Unique identifier for the pick list.' })
  @PrimaryGeneratedColumn({ name: 'pick_list_id' })
  pick_list_id: string;

  @Field(() => String, { description: 'Type of pick list.' })
  @Column({ name: 'pick_list_type' })
  pick_list_type: string;

  @Field(() => String, { description: 'Status of the pick list.' })
  @Column({ name: 'pick_list_status' })
  pick_list_status: string;

  @Field(() => PickListRule, { description: 'Foreign key to Pick_List_Rule.' })
  @ManyToOne(() => PickListRule)
  @JoinColumn({ name: 'pick_list_rule_id' })
  pick_list_rule: PickListRule;

  @Field(() => PickListRuleGroup, { description: 'Foreign key to Pick_List_Rule_Group.' })
  @ManyToOne(() => PickListRuleGroup)
  @JoinColumn({ name: 'pick_list_rule_group_id' })
  pick_list_rule_group: PickListRuleGroup;

  @Field(() => Number, { description: 'Maximum weight for the pick list.' })
  @Column({ name: 'max_pick_list_weight' })
  max_pick_list_weight: number;

  @Field(() => Number, { description: 'Maximum cube for the pick list.' })
  @Column({ name: 'max_pick_list_cube' })
  max_pick_list_cube: number;

  @Field(() => Number, { description: 'Cube weight threshold for the pick list.' })
  @Column({ name: 'pick_list_cube_weight_threshold' })
  pick_list_cube_weight_threshold: number;

  @Field(() => Number, { description: 'Maximum additional case weight for pick list.' })
  @Column({ name: 'pick_list_max_add_case_weight' })
  pick_list_max_add_case_weight: number;

  @Field(() => Number, { description: 'Total volume of the pick list.' })
  @Column({ name: 'total_volume' })
  total_volume: number;

  @Field(() => Number, { description: 'Total weight of the pick list.' })
  @Column({ name: 'total_weight' })
  total_weight: number;

  @Field(() => Number, { description: 'Total items in the pick list.' })
  @Column({ name: 'total_items' })
  total_items: number;

  @Field(() => Number, { description: 'Total customers for the pick list.' })
  @Column({ name: 'total_customers' })
  total_customers: number;

  @Field(() => Number, { description: 'Total clients for the pick list.' })
  @Column({ name: 'total_clients' })
  total_clients: number;

  @Field(() => Number, { description: 'Total lists if part of a batch.' })
  @Column({ name: 'total_lists_in_batch' })
  total_lists_in_batch: number;

  @Field(() => Number, { description: 'Total picks for a load.' })
  @Column({ name: 'total_load_picks' })
  total_load_picks: number;

  @Field(() => Number, { description: 'Total slots used by the pick list.' })
  @Column({ name: 'total_slots' })
  total_slots: number;
} 