import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { ClientMaster } from './client_master.entity';

@ObjectType()
@Entity('pick_list_rule_group')
export class PickListRuleGroup {
  @Field(() => String, { description: 'Unique ID for pick list rule group.' })
  @PrimaryGeneratedColumn({ name: 'pick_list_rule_group_id' })
  pick_list_rule_group_id: string;

  @Field(() => String, { description: 'Name of the pick list rule group.' })
  @Column({ name: 'pick_list_rule_group_name' })
  pick_list_rule_group_name: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: Warehouse;

  @Field(() => ClientMaster, { description: 'Foreign key referencing Client_Master.' })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'client_id' })
  client: ClientMaster;

  @Field(() => Boolean, { description: 'Flag indicating if the group is enabled.' })
  @Column({ name: 'enabled_flag' })
  enabled_flag: boolean;
} 