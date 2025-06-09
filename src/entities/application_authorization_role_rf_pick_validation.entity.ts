import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('application_authorization_role_rf_pick_validation')
export class ApplicationAuthorizationRoleRFPickValidation {
  @Field(() => String, { description: 'Unique identifier for the role.' })
  @PrimaryColumn({ name: 'role_id' })
  role_id: string;

  @Field(() => Boolean, { description: 'Flag indicating if the role is enabled.' })
  @Column({ name: 'enabled_flag' })
  enabled_flag: boolean;

  @Field(() => String, { description: 'Group name.' })
  @Column({ name: 'group_name' })
  group_name: string;
} 