import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceInstance } from './service_instance.entity';
import { ConfirmService } from './confirm_service.entity';

@ObjectType('ConfirmServiceValue')
@Entity('Confirm_Service_Value')
export class ConfirmServiceValue {
  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Instance.' })
  @PrimaryColumn({ name: 'service_instance_id' })
  service_instance_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Confirm_Service.' })
  @PrimaryColumn({ name: 'confirm_service_id' })
  confirm_service_id: string;

  @Field(() => String, { description: 'Segment number.' })
  @Column({ name: 'segment_number', type: 'varchar', length: 255 })
  segment_number: string;

  @Field(() => String, { description: 'Confirm value variable name.' })
  @Column({ name: 'confirm_value_variable_name', type: 'varchar', length: 255 })
  confirm_value_variable_name: string;

  @Field(() => String, { description: 'Confirmed service value.' })
  @Column({ name: 'confirm_service_value', type: 'varchar', length: 255 })
  confirm_service_value: string;

  @Field(() => String, { description: 'User ID who confirmed.' })
  @Column({ name: 'confirm_user_id', type: 'varchar', length: 255 })
  confirm_user_id: string;

  @Field(() => Date, { description: 'Date of confirmation.' })
  @Column({ name: 'confirmation_date', type: 'timestamp' })
  confirmation_date: Date;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @ManyToOne(() => ServiceInstance)
  @JoinColumn({ name: 'service_instance_id', referencedColumnName: 'service_instance_id' })
  serviceInstance: ServiceInstance;

  @ManyToOne(() => ConfirmService)
  @JoinColumn({ name: 'confirm_service_id', referencedColumnName: 'confirm_service_id' })
  confirmService: ConfirmService;
} 