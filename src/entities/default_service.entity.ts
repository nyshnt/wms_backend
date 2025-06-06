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
@Entity('def_serv')
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

  @Field(() => String, { description: 'Confirm service ID.' })
  @PrimaryColumn({ name: 'confirm_service_id' })
  confirm_service_id: string;

  @Field(() => String, { description: 'Default service code.' })
  @Column({ name: 'default_service_code', type: 'varchar' })
  default_service_code: string;

  @Field(() => String, { description: 'Foreign key referencing the Client table.' })
  @Column({ name: 'client_id', type: 'varchar' })
  client_id: string;

  @Field(() => String, { description: 'Carrier code.' })
  @Column({ name: 'carrier_code', type: 'varchar' })
  carrier_code: string;

  @Field(() => String, { description: 'Foreign key referencing Part_Master.' })
  @Column({ name: 'part_number', type: 'varchar' })
  part_number: string;

  @Field(() => String, { description: 'Foreign key referencing Part_Master.' })
  @Column({ name: 'part_client_id', type: 'varchar' })
  part_client_id: string;

  @Field(() => String, { description: 'Foreign key referencing Inventory_Status.' })
  @Column({ name: 'inventory_status', type: 'varchar' })
  inventory_status: string;

  @Field(() => String, { description: 'Type of inventory.' })
  @Column({ name: 'inventory_type', type: 'varchar' })
  inventory_type: string;

  @Field(() => String, { description: 'Foreign key referencing Supplier_Master.' })
  @Column({ name: 'supplier_number', type: 'varchar' })
  supplier_number: string;

  @Field(() => String, { description: 'Foreign key referencing Customer_Master.' })
  @Column({ name: 'customer_number', type: 'varchar' })
  customer_number: string;

  @Field(() => String, { description: 'Type of order.' })
  @Column({ name: 'order_type', type: 'varchar' })
  order_type: string;

  @Field(() => String, { description: 'Foreign key referencing Service_Rate_Master.' })
  @Column({ name: 'service_rate_id', type: 'varchar' })
  service_rate_id: string;

  @Field(() => Boolean, { description: 'Service request flag.' })
  @Column({ name: 'service_request_flag', type: 'boolean' })
  service_request_flag: boolean;

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

  @Field(() => String, { description: 'Foreign key referencing Trailer_Type.' })
  @Column({ name: 'trailer_type', type: 'varchar' })
  trailer_type: string;

  @Field(() => String, { description: 'Foreign key referencing Vehicle_Type.' })
  @Column({ name: 'vehicle_type', type: 'varchar' })
  vehicle_type: string;

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

  @Field(() => String, { description: 'Foreign key referencing User_Master.' })
  @Column({ name: 'user_id', type: 'varchar' })
  user_id: string;

  @Field(() => String, { description: 'User ID.' })
  @Column({ name: 'usrid', type: 'varchar' })
  usrid: string;

  @Field(() => String, { description: 'Destination location.' })
  @Column({ name: 'destination_location', type: 'varchar' })
  destination_location: string;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client: Client;

  @ManyToOne(() => PartMaster)
  @JoinColumn([{ name: 'part_number', referencedColumnName: 'part_number' }, { name: 'part_client_id', referencedColumnName: 'part_client_id' }])
  partMaster: PartMaster;

  @ManyToOne(() => InventoryStatus)
  @JoinColumn({ name: 'inventory_status', referencedColumnName: 'inventory_status' })
  inventoryStatus: InventoryStatus;

  @ManyToOne(() => SupplierMaster)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplierMaster: SupplierMaster;

  @ManyToOne(() => CustomerMaster)
  @JoinColumn({ name: 'customer_number', referencedColumnName: 'customer_number' })
  customerMaster: CustomerMaster;

  @ManyToOne(() => ServiceRateMaster)
  @JoinColumn({ name: 'service_rate_id', referencedColumnName: 'service_rate_id' })
  serviceRateMaster: ServiceRateMaster;

  @ManyToOne(() => OrderHeader)
  @JoinColumn({ name: 'order_number', referencedColumnName: 'order_number' })
  orderHeader: OrderHeader;

  @ManyToOne(() => OrderLine)
  @JoinColumn([{ name: 'order_line_number', referencedColumnName: 'order_line_number' }, { name: 'order_subline_number', referencedColumnName: 'order_subline_number' }])
  orderLine: OrderLine;

  @ManyToOne(() => TrailerType)
  @JoinColumn({ name: 'trailer_type', referencedColumnName: 'trailer_type' })
  trailerType: TrailerType;

  @ManyToOne(() => VehicleType)
  @JoinColumn({ name: 'vehicle_type', referencedColumnName: 'vehicle_type' })
  vehicleType: VehicleType;

  @ManyToOne(() => AddressMaster)
  @JoinColumn({ name: 'address_id', referencedColumnName: 'address_id' })
  addressMaster: AddressMaster;

  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  userMaster: UserMaster;
} 