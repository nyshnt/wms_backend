import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PickListRuleGroup } from './pick_list_rule_group.entity';
import { PickListRule } from './pick_list_rule.entity';

@ObjectType()
@Entity('pick_list_rule_group_detail')
export class PickListRuleGroupDetail {
  @Field(() => PickListRuleGroup, { description: 'Foreign key to Pick_List_Rule_Group.' })
  @PrimaryColumn({ name: 'pick_list_rule_group_id' })
  @ManyToOne(() => PickListRuleGroup)
  @JoinColumn({ name: 'pick_list_rule_group_id' })
  pick_list_rule_group: PickListRuleGroup;

  @Field(() => PickListRule, { description: 'Foreign key to Pick_List_Rule.' })
  @PrimaryColumn({ name: 'pick_list_rule_id' })
  @ManyToOne(() => PickListRule)
  @JoinColumn({ name: 'pick_list_rule_id' })
  pick_list_rule: PickListRule;

  @Field(() => Number, { description: 'Sequence number for the rule in the group.' })
  @Column({ name: 'sequence_number' })
  sequence_number: number;
} 