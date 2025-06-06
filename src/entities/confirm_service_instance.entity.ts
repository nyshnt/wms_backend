import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ConfirmNonInventoryService } from './confirm_non_inventory_service.entity';

@ObjectType('ConfirmServiceInstance')
@Entity('cnfrm_serv_ins')
export class ConfirmServiceInstance {
  @Field(() => String, { description: 'Primary and Foreign key referencing Confirm_Non_Inventory_Service.' })
  @PrimaryColumn({ name: 'confirm_service_id' })
  confirm_service_id: string;

  @Field(() => String, { description: 'Service instance ID.' })
  @PrimaryColumn({ name: 'service_instance_id' })
  service_instance_id: string;

  @Field(() => String, { description: 'Segment number.' })
  @Column({ name: 'segment_number', type: 'varchar' })
  segment_number: string;

  @Field(() => String, { description: 'Type of service instance.' })
  @Column({ name: 'service_instance_type', type: 'varchar' })
  service_instance_type: string;

  @Field(() => String, { description: 'Confirm service instance.' })
  @Column({ name: 'confirm_service_instance', type: 'varchar' })
  confirm_service_instance: string;

  @Field(() => String, { description: 'User ID who inserted the record.' })
  @Column({ name: 'insertion_user_id', type: 'varchar' })
  insertion_user_id: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insertion_date', type: 'timestamp' })
  insertion_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp' })
  last_update_date: Date;

  @Field(() => String, { description: 'User ID who last updated the record.' })
  @Column({ name: 'last_update_user_id', type: 'varchar' })
  last_update_user_id: string;

  @Field(() => Boolean, { description: 'Service request flag.' })
  @Column({ name: 'service_request_flag', type: 'boolean' })
  service_request_flag: boolean;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar' })
  modified_user_id: string;

  @ManyToOne(() => ConfirmNonInventoryService)
  @JoinColumn({ name: 'confirm_service_id', referencedColumnName: 'confirm_service_id' })
  confirmNonInventoryService: ConfirmNonInventoryService;
} 