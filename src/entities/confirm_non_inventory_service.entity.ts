import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { ServiceMaster } from './service_master.entity';
import { TrailerType } from './trailer_type.entity';
import { VehicleType } from './vehicle_type.entity';
import { UserMaster } from './user_master.entity';
import { OrderHeader } from './order_header.entity';
import { OrderLine } from './order_line.entity';
import { AddressMaster } from './address_master.entity';

@ObjectType('ConfirmNonInventoryService')
@Entity('cnfrm_noninv_serv')
export class ConfirmNonInventoryService {
  @Field(() => String, { description: 'Unique identifier for the confirm service.' })
  @PrimaryColumn({ name: 'confirm_service_id' })
  confirm_service_id: string;

  @Field(() => String, { description: 'Foreign key referencing the Warehouse table.' })
  @Column({ name: 'warehouse_id', type: 'varchar' })
  warehouse_id: string;

  @Field(() => String, { description: 'Foreign key referencing Service_Master.' })
  @Column({ name: 'service_id', type: 'varchar' })
  service_id: string;

  @Field(() => String, { description: 'Sort sequence.' })
  @Column({ name: 'sort_sequence', type: 'varchar' })
  sort_sequence: string;

  @Field(() => String, { description: 'Non-inventory ID.' })
  @Column({ name: 'non_inventory_ID', type: 'varchar' })
  non_inventory_ID: string;

  @Field(() => String, { description: 'Non-inventory type.' })
  @Column({ name: 'non_inventory_type', type: 'varchar' })
  non_inventory_type: string;

  @Field(() => String, { description: 'Foreign key referencing Trailer_Type.' })
  @Column({ name: 'trailer_type', type: 'varchar' })
  trailer_type: string;

  @Field(() => String, { description: 'Foreign key referencing Vehicle_Type.' })
  @Column({ name: 'vehicle_type', type: 'varchar' })
  vehicle_type: string;

  @Field(() => String, { description: 'Result of the service.' })
  @Column({ name: 'service_result', type: 'varchar' })
  service_result: string;

  @Field(() => Date, { description: 'Addition date.' })
  @Column({ name: 'addition_date', type: 'timestamp' })
  addition_date: Date;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'Foreign key referencing User_Master.' })
  @Column({ name: 'user_id', type: 'varchar' })
  user_id: string;

  @Field(() => Date, { description: 'Compound date.' })
  @Column({ name: 'compound_date', type: 'timestamp' })
  compound_date: Date;

  @Field(() => String, { description: 'Compound user ID.' })
  @Column({ name: 'compound_user_id', type: 'varchar' })
  compound_user_id: string;

  @Field(() => String, { description: 'Foreign key referencing Order_Header.' })
  @Column({ name: 'order_number', type: 'varchar' })
  order_number: string;

  @Field(() => String, { description: 'Foreign key referencing Order_Line.' })
  @Column({ name: 'order_line_number', type: 'varchar' })
  order_line_number: string;

  @Field(() => String, { description: 'Foreign key referencing Order_Line.' })
  @Column({ name: 'order_subline_number', type: 'varchar' })
  order_subline_number: string;

  @Field(() => String, { description: 'Service level.' })
  @Column({ name: 'service_level', type: 'varchar' })
  service_level: string;

  @Field(() => String, { description: 'Type of customer.' })
  @Column({ name: 'customer_type', type: 'varchar' })
  customer_type: string;

  @Field(() => String, { description: 'Destination area.' })
  @Column({ name: 'destination_area', type: 'varchar' })
  destination_area: string;

  @Field(() => String, { description: 'Name of the rate service.' })
  @Column({ name: 'rate_service_name', type: 'varchar' })
  rate_service_name: string;

  @Field(() => String, { description: 'Foreign key referencing Address_Master.' })
  @Column({ name: 'address_id', type: 'varchar' })
  address_id: string;

  @Field(() => String, { description: 'Stop activity type.' })
  @Column({ name: 'stop_activity_type', type: 'varchar' })
  stop_activity_type: string;

  @Field(() => String, { description: 'Common code.' })
  @Column({ name: 'common_code', type: 'varchar' })
  common_code: string;

  @Field(() => String, { description: 'Version number.' })
  @Column({ name: 'version_number', type: 'varchar' })
  version_number: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insertion_date', type: 'timestamp' })
  insertion_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp' })
  last_update_date: Date;

  @Field(() => String, { description: 'User ID who inserted the record.' })
  @Column({ name: 'insertion_user_id', type: 'varchar' })
  insertion_user_id: string;

  @Field(() => String, { description: 'User ID who last updated the record.' })
  @Column({ name: 'last_update_user_id', type: 'varchar' })
  last_update_user_id: string;

  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  @ManyToOne(() => ServiceMaster)
  @JoinColumn({ name: 'service_id', referencedColumnName: 'service_id' })
  serviceMaster: ServiceMaster;

  @ManyToOne(() => TrailerType)
  @JoinColumn({ name: 'trailer_type', referencedColumnName: 'trailer_type' })
  trailerType: TrailerType;

  @ManyToOne(() => VehicleType)
  @JoinColumn({ name: 'vehicle_type', referencedColumnName: 'vehicle_type' })
  vehicleType: VehicleType;

  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  userMaster: UserMaster;

  @ManyToOne(() => OrderHeader)
  @JoinColumn({ name: 'order_number', referencedColumnName: 'order_number' })
  orderHeader: OrderHeader;

  @ManyToOne(() => OrderLine)
  @JoinColumn([{ name: 'order_line_number', referencedColumnName: 'order_line_number' }, { name: 'order_subline_number', referencedColumnName: 'order_subline_number' }])
  orderLine: OrderLine;

  @ManyToOne(() => AddressMaster)
  @JoinColumn({ name: 'address_id', referencedColumnName: 'address_id' })
  addressMaster: AddressMaster;
} 