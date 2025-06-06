import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Client } from './client.entity';
import { PartMaster } from './part_master.entity';
import { InventoryStatus } from './inventory_status.entity';
import { SupplierMaster } from './supplier_master.entity';
import { OrderHeader } from './order_header.entity';
import { OrderLine } from './order_line.entity';
import { ConfirmService } from './confirm_service.entity';
import { VehicleType } from './vehicle_type.entity';
import { AddressMaster } from './address_master.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('ServiceRateMaster')
@Entity('service_rate_master')
export class ServiceRateMaster {
  @Field(() => String, { description: 'Unique identifier for the service rate.' })
  @PrimaryColumn({ name: 'service_rate_id' })
  service_rate_id: string;

  @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client: Client;

  @Field(() => PartMaster, { description: 'Foreign key referencing Part_Master.' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: PartMaster;

  @Field(() => PartMaster, { description: 'Foreign key referencing Part_Master.' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'part_client_id' })
  part_client_id: PartMaster;

  @Field(() => InventoryStatus, { description: 'Foreign key referencing Inventory_Status.' })
  @ManyToOne(() => InventoryStatus)
  @JoinColumn({ name: 'inventory_status', referencedColumnName: 'inventory_status' })
  inventory_status: InventoryStatus;

  @Field(() => Number, { description: 'Quantity by code.' })
  @Column({ name: 'quantity_by_code', type: 'int' })
  quantity_by_code: number;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @Field(() => String, { description: 'Type of movement.' })
  @Column({ name: 'movement_type', type: 'varchar', length: 255 })
  movement_type: string;

  @Field(() => SupplierMaster, { description: 'Foreign key referencing Supplier_Master.' })
  @ManyToOne(() => SupplierMaster)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplier_number: SupplierMaster;

  @Field(() => String, { description: 'Category number.' })
  @Column({ name: 'category_number', type: 'varchar', length: 255 })
  category_number: string;

  @Field(() => String, { description: 'Type of order.' })
  @Column({ name: 'order_type', type: 'varchar', length: 255 })
  order_type: string;

  @Field(() => Boolean, { description: 'Service request flag.' })
  @Column({ name: 'service_request_flag', type: 'boolean' })
  service_request_flag: boolean;

  @Field(() => OrderHeader, { description: 'Foreign key referencing Order_Header.' })
  @ManyToOne(() => OrderHeader)
  @JoinColumn({ name: 'order_number', referencedColumnName: 'order_number' })
  order_number: OrderHeader;

  @Field(() => OrderLine, { description: 'Foreign key referencing Order_Line.' })
  @ManyToOne(() => OrderLine)
  @JoinColumn({ name: 'order_line_number', referencedColumnName: 'order_line_number' })
  order_line_number: OrderLine;

  @Field(() => OrderLine, { description: 'Foreign key referencing Order_Line.' })
  @ManyToOne(() => OrderLine)
  @JoinColumn({ name: 'order_subline_number', referencedColumnName: 'order_subline_number' })
  order_subline_number: OrderLine;

  @Field(() => String, { description: 'Service level.' })
  @Column({ name: 'service_level', type: 'varchar', length: 255 })
  service_level: string;

  @Field(() => Boolean, { description: 'Service enabled flag.' })
  @Column({ name: 'service_enabled_flag', type: 'boolean' })
  service_enabled_flag: boolean;

  @Field(() => String, { description: 'Load level.' })
  @Column({ name: 'load_level', type: 'varchar', length: 255 })
  load_level: string;

  @Field(() => String, { description: 'Category type.' })
  @Column({ name: 'category_type', type: 'varchar', length: 255 })
  category_type: string;

  @Field(() => String, { description: 'Destination area.' })
  @Column({ name: 'destination_area', type: 'varchar', length: 255 })
  destination_area: string;

  @Field(() => String, { description: 'Type of trailer.' })
  @Column({ name: 'trailer_type', type: 'varchar', length: 255 })
  trailer_type: string;

  @Field(() => ConfirmService, { description: 'Foreign key referencing Confirm_Service.' })
  @ManyToOne(() => ConfirmService)
  @JoinColumn({ name: 'confirm_service_id', referencedColumnName: 'confirm_service_id' })
  confirm_service_id: ConfirmService;

  @Field(() => VehicleType, { description: 'Foreign key referencing Vehicle_Type.' })
  @ManyToOne(() => VehicleType)
  @JoinColumn({ name: 'vehicle_type', referencedColumnName: 'vehicle_type' })
  vehicle_type: VehicleType;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insertion_date', type: 'timestamp' })
  insertion_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp' })
  last_update_date: Date;

  @Field(() => String, { description: 'User ID who inserted the record.' })
  @Column({ name: 'insertion_user_id', type: 'varchar', length: 255 })
  insertion_user_id: string;

  @Field(() => String, { description: 'User ID who last updated the record.' })
  @Column({ name: 'last_update_user_id', type: 'varchar', length: 255 })
  last_update_user_id: string;

  @Field(() => String, { description: 'Name of the rate service.' })
  @Column({ name: 'rate_service_name', type: 'varchar', length: 255 })
  rate_service_name: string;

  @Field(() => AddressMaster, { description: 'Foreign key referencing Address_Master.' })
  @ManyToOne(() => AddressMaster)
  @JoinColumn({ name: 'address_id', referencedColumnName: 'address_id' })
  address_id: AddressMaster;

  @Field(() => String, { description: 'Stop activity type.' })
  @Column({ name: 'stop_activity_type', type: 'varchar', length: 255 })
  stop_activity_type: string;

  @Field(() => String, { description: 'Common code.' })
  @Column({ name: 'common_code', type: 'varchar', length: 255 })
  common_code: string;

  @Field(() => UserMaster, { description: 'Foreign key referencing User_Master.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user_id: UserMaster;

  @Field(() => String, { description: 'Version number.' })
  @Column({ name: 'version_number', type: 'varchar', length: 255 })
  version_number: string;
}
