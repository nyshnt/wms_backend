import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceMaster } from './service_master.entity';
import { ServiceRateMaster } from './service_rate_master.entity';
import { DefaultService } from './default_service.entity';
import { ConfirmService } from './confirm_service.entity';

@ObjectType('OrderedServiceAreaLine')
@Entity('ord_sery_are_line')
export class OrderedServiceAreaLine {
  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Order number.' })
  @PrimaryColumn({ name: 'order_number' })
  order_number: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_ID' })
  client_ID: string;

  @Field(() => String, { description: 'Foreign key referencing Service_Master.' })
  @PrimaryColumn({ name: 'service_id' })
  service_id: string;

  @Field(() => String, { description: 'Foreign key referencing Service_Rate_Master.' })
  @PrimaryColumn({ name: 'service_rate_id' })
  service_rate_id: string;

  @Field(() => String, { description: 'Foreign key referencing Default_Service.' })
  @Column({ name: 'default_service_code', type: 'varchar', length: 255 })
  default_service_code: string;

  @Field(() => Boolean, { description: 'Service request flag.' })
  @Column({ name: 'service_request_flag', type: 'boolean' })
  service_request_flag: boolean;

  @Field(() => Date, { description: 'Addition date.' })
  @Column({ name: 'addition_date', type: 'timestamp' })
  addition_date: Date;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @Field(() => String, { description: 'Foreign key referencing Confirm_Service.' })
  @Column({ name: 'confirm_service_id'})
  confirm_service_id: string;

  @ManyToOne(() => ServiceMaster)
  @JoinColumn({ name: 'service_id', referencedColumnName: 'service_id' })
  serviceMaster: ServiceMaster;

  @ManyToOne(() => ServiceRateMaster)
  @JoinColumn({ name: 'service_rate_id', referencedColumnName: 'service_rate_id' })
  serviceRateMaster: ServiceRateMaster;

  @ManyToOne(() => DefaultService)
  @JoinColumn({ name: 'default_service_code', referencedColumnName: 'default_service_code' })
  defaultService: DefaultService;

  @ManyToOne(() => ConfirmService)
  @JoinColumn({ name: 'confirm_service_id', referencedColumnName: 'confirm_service_id' })
  confirmService: ConfirmService;
} 