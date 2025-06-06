import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { ServiceMaster } from './service_master.entity';

@ObjectType('ConfirmInstance')
@Entity('Confirm_Instance')
export class ConfirmInstance {
  @Field(() => String, { description: 'Unique identifier for the confirm service.' })
  @PrimaryColumn({ name: 'confirm_service_id' })
  confirm_service_id: string;

  @Field(() => String, { description: 'Service instance ID.' })
  @PrimaryColumn({ name: 'service_instance_id' })
  service_instance_id: string;

  @Field(() => String, { description: 'Segment number.' })
  @Column({ name: 'segment_number', type: 'varchar', length: 255 })
  segment_number: string;

  @Field(() => String, { description: 'Type of service instance.' })
  @Column({ name: 'service_instance_type', type: 'varchar', length: 255 })
  service_instance_type: string;

  @Field(() => String, { description: 'Confirm service input.' })
  @Column({ name: 'confirm_service_in', type: 'varchar', length: 255 })
  confirm_service_in: string;

  @Field(() => String, { description: 'User ID for the time.' })
  @Column({ name: 'time_user_id', type: 'varchar', length: 255 })
  time_user_id: string;

  @Field(() => String, { description: 'Load level.' })
  @Column({ name: 'load_level', type: 'varchar', length: 255 })
  load_level: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  @Field(() => ServiceMaster, { description: 'Foreign key referencing Service_Master.' })
  @ManyToOne(() => ServiceMaster)
  @JoinColumn({ name: 'service_id', referencedColumnName: 'service_id' })
  serviceMaster: ServiceMaster;

  @Field(() => Boolean, { description: 'Service request flag.' })
  @Column({ name: 'service_request_flag', type: 'boolean' })
  service_request_flag: boolean;

  @Field(() => String, { description: 'Exit point type.' })
  @Column({ name: 'exitpoint_type', type: 'varchar', length: 255 })
  exitpoint_type: string;

  @Field(() => String, { description: 'Exit point.' })
  @Column({ name: 'exitpoint', type: 'varchar', length: 255 })
  exitpoint: string;

  @Field(() => String, { description: 'Sort sequence.' })
  @Column({ name: 'sort_sequence', type: 'varchar', length: 255 })
  sort_sequence: string;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp' })
  last_update_date: Date;

  @Field(() => String, { description: 'Compound user.' })
  @Column({ name: 'compound_user', type: 'varchar', length: 255 })
  compound_user: string;

  @Field(() => String, { description: 'Compound figure.' })
  @Column({ name: 'compound_figure', type: 'varchar', length: 255 })
  compound_figure: string;

  @Field(() => Date, { description: 'Compound date.' })
  @Column({ name: 'compound_date', type: 'timestamp' })
  compound_date: Date;

  @Field(() => String, { description: 'Result of the service.' })
  @Column({ name: 'service_result', type: 'varchar', length: 255 })
  service_result: string;

  @Field(() => String, { description: 'Tracking number.' })
  @Column({ name: 'tracking_number', type: 'varchar', length: 255 })
  tracking_number: string;

  @Field(() => String, { description: 'Invoice number.' })
  @Column({ name: 'invoice_number', type: 'varchar', length: 255 })
  invoice_number: string;

  @Field(() => String, { description: 'Inventory unit of measure.' })
  @Column({ name: 'inventory_unit_of_measure', type: 'varchar', length: 255 })
  inventory_unit_of_measure: string;

  @Field(() => String, { description: 'Client ID.' })
  @Column({ name: 'client_ID', type: 'varchar', length: 255 })
  client_ID: string;

  @Field(() => String, { description: 'Part number.' })
  @Column({ name: 'part_number', type: 'varchar', length: 255 })
  part_number: string;

  @Field(() => String, { description: 'Client ID for the part.' })
  @Column({ name: 'part_client_id', type: 'varchar', length: 255 })
  part_client_id: string;

  @Field(() => Number, { description: 'Unit quantity.' })
  @Column({ name: 'unit_quantity', type: 'int' })
  unit_quantity: number;

  @Field(() => Date, { description: 'Addition date.' })
  @Column({ name: 'addition_date', type: 'timestamp' })
  addition_date: Date;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @Field(() => String, { description: 'Shipment ID.' })
  @Column({ name: 'shipment_id', type: 'varchar', length: 255 })
  shipment_id: string;

  @Field(() => Boolean, { description: 'Shipment indicator.' })
  @Column({ name: 'shipment_indicator', type: 'boolean' })
  shipment_indicator: boolean;

  @Field(() => String, { description: 'Detailed location.' })
  @Column({ name: 'detailed_location', type: 'varchar', length: 255 })
  detailed_location: string;
} 