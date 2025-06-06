import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceRateMaster } from './service_rate_master.entity';
import { Client } from './client.entity';

@ObjectType('ServiceRateMulti')
@Entity('serstate_mul')
export class ServiceRateMulti {
  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Rate_Master.' })
  @PrimaryColumn({ name: 'service_rate_id' })
  service_rate_id: string;

  @Field(() => String, { description: 'Default service code.' })
  @Column({ name: 'default_service_code', type: 'varchar', length: 255 })
  default_service_code: string;

  @Field(() => Boolean, { description: 'Service request flag.' })
  @Column({ name: 'service_request_flag', type: 'boolean' })
  service_request_flag: boolean;

  @Field(() => String, { description: 'Quantity by code.' })
  @Column({ name: 'quantity_by_code', type: 'varchar', length: 255 })
  quantity_by_code: string;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @Field(() => Date, { description: 'Adhesion date.' })
  @Column({ name: 'adhesion_date', type: 'timestamp' })
  adhesion_date: Date;

  @Field(() => String, { description: 'Modified user type.' })
  @Column({ name: 'modified_user_type', type: 'varchar', length: 255 })
  modified_user_type: string;

  @Field(() => String, { description: 'Version number.' })
  @Column({ name: 'version_number', type: 'varchar', length: 255 })
  version_number: string;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp' })
  last_update_date: Date;

  @Field(() => String, { description: 'User ID who inserted the record.' })
  @Column({ name: 'insertion_user_id', type: 'varchar', length: 255 })
  insertion_user_id: string;

  @Field(() => String, { description: 'Last update user.' })
  @Column({ name: 'last_update_user', type: 'varchar', length: 255 })
  last_update_user: string;

  @Field(() => String, { description: 'Tracking number.' })
  @Column({ name: 'tracking_number', type: 'varchar', length: 255 })
  tracking_number: string;

  @Field(() => String, { description: 'Invoice number.' })
  @Column({ name: 'invoice_number', type: 'varchar', length: 255 })
  invoice_number: string;

  @Field(() => String, { description: 'Foreign key referencing the Client table.' })
  @Column({ name: 'client_id', type: 'varchar' })
  client_id: string;

  @Field(() => String, { description: 'Invoice line number.' })
  @Column({ name: 'invoice_line_number', type: 'varchar', length: 255 })
  invoice_line_number: string;

  @Field(() => String, { description: 'Invalid number.' })
  @Column({ name: 'invalid_number', type: 'varchar', length: 255 })
  invalid_number: string;

  @Field(() => String, { description: 'Inventory assets.' })
  @Column({ name: 'inventory_assets', type: 'varchar', length: 255 })
  inventory_assets: string;

  @ManyToOne(() => ServiceRateMaster)
  @JoinColumn({ name: 'service_rate_id', referencedColumnName: 'service_rate_id' })
  serviceRateMaster: ServiceRateMaster;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client: Client;
} 