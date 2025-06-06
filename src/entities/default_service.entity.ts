import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Client } from './client.entity';
import { PartMaster } from './part_master.entity';
import { InventoryStatus } from './inventory_status.entity';
import { SupplierMaster } from './supplier_master.entity';
import { CustomerMaster } from './customer_master.entity';
import { ServiceRateMaster } from './service_rate_master.entity';
import { OrderHeader } from './order_header.entity';
import { OrderLine } from './order_line.entity';
import { TrailerType } from './trailer_type.entity';
import { VehicleType } from './vehicle_type.entity';
import { AddressMaster } from './address_master.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('DefaultService')
@Entity('default_service')
export class DefaultService {
  @Field(() => String, { description: 'Service ID.' })
  @PrimaryColumn({ name: 'service_id' })
  service_id: string;

  @Field(() => String, { description: 'Default service ID.' })
  @PrimaryColumn({ name: 'default_service_id' })
  default_service_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Default service code.' })
  @Column({ name: 'default_service_code', type: 'varchar', length: 255, nullable: true })
  default_service_code: string;

  @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client: Client;

  @Field(() => String, { description: 'Carrier code.' })
  @Column({ name: 'carrier_code', type: 'varchar', length: 255, nullable: true })
  carrier_code: string;

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

  @Field(() => String, { description: 'Type of inventory.' })
  @Column({ name: 'inventory_type', type: 'varchar', length: 255, nullable: true })
  inventory_type: string;

  @Field(() => SupplierMaster, { description: 'Foreign key referencing Supplier_Master.' })
  @ManyToOne(() => SupplierMaster)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplier_number: SupplierMaster;

  @Field(() => CustomerMaster, { description: 'Foreign key referencing Customer_Master.' })
  @ManyToOne(() => CustomerMaster)
  @JoinColumn({ name: 'customer_number', referencedColumnName: 'customer_number' })
  customer_number: CustomerMaster;

  @Field(() => String, { description: 'Type of order.' })
  @Column({ name: 'order_type', type: 'varchar', length: 255, nullable: true })
  order_type: string;

  @Field(() => ServiceRateMaster, { description: 'Foreign key referencing Service_Rate_Master.' })
  @ManyToOne(() => ServiceRateMaster)
  @JoinColumn({ name: 'service_rate_id', referencedColumnName: 'service_rate_id' })
  service_rate_id: ServiceRateMaster;

  @Field(() => Boolean, { description: 'Service request flag.' })
  @Column({ name: 'service_request_flag', type: 'boolean', nullable: true })
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
  @Column({ name: 'service_level', type: 'varchar', length: 255, nullable: true })
  service_level: string;

  @Field(() => String, { description: 'Type of customer.' })
  @Column({ name: 'customer_type', type: 'varchar', length: 255, nullable: true })
  customer_type: string;

  @Field(() => String, { description: 'Destination area.' })
  @Column({ name: 'destination_area', type: 'varchar', length: 255, nullable: true })
  destination_area: string;

  @Field(() => TrailerType, { description: 'Foreign key referencing Trailer_Type.' })
  @ManyToOne(() => TrailerType)
  @JoinColumn({ name: 'trailer_type', referencedColumnName: 'trailer_type' })
  trailer_type: TrailerType;

  @Field(() => VehicleType, { description: 'Foreign key referencing Vehicle_Type.' })
  @ManyToOne(() => VehicleType)
  @JoinColumn({ name: 'vehicle_type', referencedColumnName: 'vehicle_type' })
  vehicle_type: VehicleType;

  @Field(() => String, { description: 'Name of the rate service.' })
  @Column({ name: 'rate_service_name', type: 'varchar', length: 255, nullable: true })
  rate_service_name: string;

  @Field(() => AddressMaster, { description: 'Foreign key referencing Address_Master.' })
  @ManyToOne(() => AddressMaster)
  @JoinColumn({ name: 'address_id', referencedColumnName: 'address_id' })
  address_id: AddressMaster;

  @Field(() => String, { description: 'Stop activity type.' })
  @Column({ name: 'stop_activity_type', type: 'varchar', length: 255, nullable: true })
  stop_activity_type: string;

  @Field(() => String, { description: 'Common code.' })
  @Column({ name: 'common_code', type: 'varchar', length: 255, nullable: true })
  common_code: string;

  @Field(() => UserMaster, { description: 'Foreign key referencing User_Master.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user_id: UserMaster;

  @Field(() => String, { description: 'Version number.' })
  @Column({ name: 'version_number', type: 'varchar', length: 255, nullable: true })
  version_number: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insertion_date', type: 'date', nullable: true })
  insertion_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'date', nullable: true })
  last_update_date: Date;

  @Field(() => String, { description: 'User ID who inserted the record.' })
  @Column({ name: 'insertion_user_id', type: 'varchar', length: 255, nullable: true })
  insertion_user_id: string;

  @Field(() => String, { description: 'User ID who last updated the record.' })
  @Column({ name: 'last_update_user_id', type: 'varchar', length: 255, nullable: true })
  last_update_user_id: string;
} 