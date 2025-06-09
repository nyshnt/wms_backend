import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('AutoAllocationRule')
@Entity('auto_allocation_rule')
export class AutoAllocationRule {
  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Unique number for the auto allocation rule.' })
  @Column({ name: 'auto_allocation_number', nullable: true })
  auto_allocation_number: string;

  @Field(() => String, { description: 'Method used for auto allocation.' })
  @Column({ name: 'auto_allocation_method', nullable: true })
  auto_allocation_method: string;

  @Field(() => String, { description: 'Type of allocation rule.' })
  @Column({ name: 'rule_type', nullable: true })
  rule_type: string;

  @Field(() => Number, { description: 'Time duration in minutes for the rule.' })
  @Column({ name: 'time_in_minutes', type: 'int', nullable: true })
  time_in_minutes: number;

  @Field(() => String, { description: 'Type of date used in the rule.' })
  @Column({ name: 'date_type', nullable: true })
  date_type: string;

  @Field(() => Boolean, { description: 'Flag indicating if the rule is enabled.' })
  @Column({ name: 'enabled_flag', type: 'boolean', nullable: true })
  enabled_flag: boolean;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insert_date', type: 'timestamp', nullable: true })
  insert_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp', nullable: true })
  last_update_date: Date;

  @Field(() => String, { description: 'User who inserted the record.' })
  @Column({ name: 'insert_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'insert_user_id', referencedColumnName: 'user_id' })
  insert_user_id: string;

  @Field(() => String, { description: 'User who last updated the record.' })
  @Column({ name: 'last_update_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'last_update_user_id', referencedColumnName: 'user_id' })
  last_update_user_id: string;
} 