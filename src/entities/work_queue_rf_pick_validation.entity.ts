import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { ApplicationAuthorizationRoleRFPickValidation } from './application_authorization_role_rf_pick_validation.entity';
import { PickWorkHeaderRFPickValidation } from './pick_work_header_rf_pick_validation.entity';

@ObjectType()
@Entity('work_queue_rf_pick_validation')
export class WorkQueueRFPickValidation {
  @Field(() => String, { description: 'Unique registration number for work.' })
  @PrimaryColumn({ name: 'registration_number' })
  registration_number: string;

  @Field(() => String, { description: 'Status of the work.' })
  @Column({ name: 'work_status' })
  work_status: string;

  @Field(() => Number, { description: 'Effective priority of the work.' })
  @Column({ name: 'effective_priority' })
  effective_priority: number;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => ApplicationAuthorizationRoleRFPickValidation, { description: 'Foreign key to Auth Role.' })
  @ManyToOne(() => ApplicationAuthorizationRoleRFPickValidation)
  @JoinColumn({ name: 'assigned_role_id' })
  assigned_role_id: ApplicationAuthorizationRoleRFPickValidation;

  @Field(() => PickWorkHeaderRFPickValidation, { description: 'Foreign key to Pick Work Header.' })
  @ManyToOne(() => PickWorkHeaderRFPickValidation)
  @JoinColumn({ name: 'work_reference' })
  work_reference: PickWorkHeaderRFPickValidation;
} 