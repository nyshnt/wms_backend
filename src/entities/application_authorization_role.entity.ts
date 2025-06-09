import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ApplicationAuthorizationRole')
@Entity('Application_Auth_Role')
export class ApplicationAuthorizationRole {
  @Field(() => String, { description: 'Unique identifier for the role.' })
  @PrimaryColumn({ name: 'role_id' })
  role_id: string;

  @Field(() => Boolean, { description: 'Flag indicating if the role is enabled.' })
  @Column({ name: 'enabled_flag', type: 'boolean', nullable: true })
  enabled_flag: boolean;

  @Field(() => String, { description: 'Parent role identifier.' })
  @ManyToOne(() => ApplicationAuthorizationRole)
  @JoinColumn({ name: 'parent_role_id', referencedColumnName: 'role_id' })
  @Column({ name: 'parent_role_id', nullable: true })
  parent_role_id: string;

  @Field(() => String, { description: 'Authorization group name.' })
  @Column({ name: 'auth_group_name', nullable: true })
  auth_group_name: string;

  @Field(() => Number, { description: 'Adjustment threshold cost.' })
  @Column({ name: 'adjustment_threshold_cost', type: 'decimal', nullable: true })
  adjustment_threshold_cost: number;

  @Field(() => String, { description: 'Adjustment threshold unit.' })
  @Column({ name: 'adjustment_threshold_unit', nullable: true })
  adjustment_threshold_unit: string;

  @Field(() => String, { description: 'Group name.' })
  @Column({ name: 'group_name', nullable: true })
  group_name: string;
} 