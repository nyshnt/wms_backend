import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { DefaultService } from './default_service.entity';

@ObjectType('BulkServiceAreaLine')
@Entity('Bulb_serv_are_line')
export class BulkServiceAreaLine {
  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Order number.' })
  @PrimaryColumn({ name: 'order_number' })
  order_number: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'ERD line.' })
  @PrimaryColumn({ name: 'entity_relationship_diagram_line' })
  entity_relationship_diagram_line: string;

  @Field(() => String, { description: 'Inventory unit of measure.' })
  @PrimaryColumn({ name: 'inventory_unit_of_measure' })
  inventory_unit_of_measure: string;

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

  @Field(() => String, { description: 'Shipment address.' })
  @Column({ name: 'shipment_address', type: 'varchar', length: 255 })
  shipment_address: string;

  @Field(() => String, { description: 'Shipment indicator.' })
  @Column({ name: 'shipment_indicator', type: 'varchar', length: 255 })
  shipment_indicator: string;

  @ManyToOne(() => DefaultService)
  @JoinColumn({ name: 'default_service_code', referencedColumnName: 'default_service_code' })
  defaultService: DefaultService;
} 