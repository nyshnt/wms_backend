import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { ClientMaster } from './client_master.entity';
import { AssetType } from './asset_type.entity';

@ObjectType()
@Entity('pick_list_rule')
export class PickListRule {
  @Field(() => String, { description: 'Unique ID for pick list rule.' })
  @PrimaryGeneratedColumn({ name: 'pick_list_rule_id' })
  pick_list_rule_id: string;

  @Field(() => String, { description: 'Name of the pick list rule.' })
  @Column({ name: 'pick_list_rule_name' })
  pick_list_rule_name: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: Warehouse;

  @Field(() => ClientMaster, { description: 'Foreign key referencing Client_Master.' })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'client_id' })
  client: ClientMaster;

  @Field(() => Boolean, { description: 'Flag for re-listing.' })
  @Column({ name: 're_list_flag' })
  re_list_flag: boolean;

  @Field(() => Boolean, { description: 'Flag to allow splitting.' })
  @Column({ name: 'allow_split_flag' })
  allow_split_flag: boolean;

  @Field(() => String, { description: 'Default pick list type for this rule.' })
  @Column({ name: 'pick_list_type' })
  pick_list_type: string;

  @Field(() => Boolean, { description: 'Flag for one pass only picking.' })
  @Column({ name: 'one_pass_only_flag' })
  one_pass_only_flag: boolean;

  @Field(() => Boolean, { description: 'Flag to assign slots.' })
  @Column({ name: 'assign_slot_flag' })
  assign_slot_flag: boolean;

  @Field(() => Boolean, { description: 'Flag indicating if the rule is valid.' })
  @Column({ name: 'valid_flag' })
  valid_flag: boolean;

  @Field(() => Boolean, { description: 'Confirm material used part flag.' })
  @Column({ name: 'confirm_material_used_part' })
  confirm_material_used_part: boolean;

  @Field(() => Boolean, { description: 'Flag for dropping at work zone change.' })
  @Column({ name: 'drop_at_work_zone_change_flag' })
  drop_at_work_zone_change_flag: boolean;

  @Field(() => Boolean, { description: 'Force pickup of previous items flag.' })
  @Column({ name: 'force_pickup_previous_flag' })
  force_pickup_previous_flag: boolean;

  @Field(() => Boolean, { description: 'Resume list pick previous operation flag.' })
  @Column({ name: 'resume_list_pick_previous_operation_flag' })
  resume_list_pick_previous_operation_flag: boolean;

  @Field(() => Boolean, { description: 'Flag to combine lists.' })
  @Column({ name: 'combine_list_flag' })
  combine_list_flag: boolean;

  @Field(() => AssetType, { description: 'Foreign key referencing Asset_Type.' })
  @ManyToOne(() => AssetType)
  @JoinColumn({ name: 'asset_type_id' })
  asset_type: AssetType;

  @Field(() => String, { description: 'Command text associated with the rule.' })
  @Column({ name: 'command_text' })
  command_text: string;

  @Field(() => String, { description: 'Operator code.' })
  @Column({ name: 'operator_code' })
  operator_code: string;

  @Field(() => String, { description: 'Criteria for ordering picks.' })
  @Column({ name: 'pick_order_by_criteria' })
  pick_order_by_criteria: string;

  @Field(() => Number, { description: 'Maximum starting picks.' })
  @Column({ name: 'max_start_picks' })
  max_start_picks: number;
}
