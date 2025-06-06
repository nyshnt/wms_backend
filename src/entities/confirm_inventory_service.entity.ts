import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { ServiceMaster } from './service_master.entity';
import { SupplierMaster } from './supplier_master.entity';
import { Client } from './client.entity';
import { InventoryStatus } from './inventory_status.entity';
import { PartMaster } from './part_master.entity';
import { OrderHeader } from './order_header.entity';
import { OrderLine } from './order_line.entity';
import { ShipmentHeader } from './shipment_header.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('ConfirmInventoryService')
@Entity('cnfrm_inv_serv')
export class ConfirmInventoryService {
  @Field(() => String, { description: 'Unique identifier for the confirm inventory service.' })
  @PrimaryColumn({ name: 'confirm_service_id' })
  confirm_service_id: string;

  @Field(() => String, { description: 'Inventory ID.' })
  @Column({ name: 'inventory_ID', type: 'varchar' })
  inventory_ID: string;

  @Field(() => String, { description: 'Load level.' })
  @Column({ name: 'load_level', type: 'varchar' })
  load_level: string;

  @Field(() => String, { description: 'Foreign key referencing the Warehouse table.' })
  @Column({ name: 'warehouse_id', type: 'varchar' })
  warehouse_id: string;

  @Field(() => String, { description: 'Foreign key referencing Service_Master.' })
  @Column({ name: 'service_id', type: 'varchar' })
  service_id: string;

  @Field(() => Boolean, { description: 'Service request flag.' })
  @Column({ name: 'service_request_flag', type: 'boolean' })
  service_request_flag: boolean;

  @Field(() => String, { description: 'Exitpoint type.' })
  @Column({ name: 'exitpoint_type', type: 'varchar' })
  exitpoint_type: string;

  @Field(() => String, { description: 'Exitpoint.' })
  @Column({ name: 'exitpoint', type: 'varchar' })
  exitpoint: string;

  @Field(() => String, { description: 'Sort sequence.' })
  @Column({ name: 'sort_sequence', type: 'varchar' })
  sort_sequence: string;

  @Field(() => String, { description: 'Compound user ID.' })
  @Column({ name: 'compound_user_id', type: 'varchar' })
  compound_user_id: string;

  @Field(() => String, { description: 'Compound figure.' })
  @Column({ name: 'compound_figure', type: 'varchar' })
  compound_figure: string;

  @Field(() => Date, { description: 'Compound date.' })
  @Column({ name: 'compound_date', type: 'date' })
  compound_date: Date;

  @Field(() => String, { description: 'Result of the service.' })
  @Column({ name: 'service_result', type: 'varchar' })
  service_result: string;

  @Field(() => String, { description: 'Tracking number.' })
  @Column({ name: 'tracking_number', type: 'varchar' })
  tracking_number: string;

  @Field(() => String, { description: 'Invoice number.' })
  @Column({ name: 'invoice_number', type: 'varchar' })
  invoice_number: string;

  @Field(() => String, { description: 'Foreign key referencing Supplier_Master.' })
  @Column({ name: 'supplier_number', type: 'varchar' })
  supplier_number: string;

  @Field(() => String, { description: 'Foreign key referencing the Client table.' })
  @Column({ name: 'client_id', type: 'varchar' })
  client_id: string;

  @Field(() => String, { description: 'Invoice line number.' })
  @Column({ name: 'invoice_line_number', type: 'varchar' })
  invoice_line_number: string;

  @Field(() => String, { description: 'Invoice subline number.' })
  @Column({ name: 'invoice_subline_number', type: 'varchar' })
  invoice_subline_number: string;

  @Field(() => String, { description: 'Foreign key referencing Inventory_Status.' })
  @Column({ name: 'inventory_status', type: 'varchar' })
  inventory_status: string;

  @Field(() => String, { description: 'Foreign key referencing Part_Master.' })
  @Column({ name: 'part_number', type: 'varchar' })
  part_number: string;

  @Field(() => String, { description: 'Foreign key referencing Part_Master.' })
  @Column({ name: 'part_client_id', type: 'varchar' })
  part_client_id: string;

  @Field(() => String, { description: 'Unit quantity.' })
  @Column({ name: 'unit_quantity', type: 'varchar' })
  unit_quantity: string;

  @Field(() => String, { description: 'Foreign key referencing Order_Header.' })
  @Column({ name: 'order_number', type: 'varchar' })
  order_number: string;

  @Field(() => String, { description: 'Foreign key referencing Order_Line.' })
  @Column({ name: 'order_line_number', type: 'varchar' })
  order_line_number: string;

  @Field(() => String, { description: 'Foreign key referencing Order_Line.' })
  @Column({ name: 'order_subline_number', type: 'varchar' })
  order_subline_number: string;

  @Field(() => String, { description: 'Foreign key referencing Shipment_Header.' })
  @Column({ name: 'shipment_id', type: 'varchar' })
  shipment_id: string;

  @Field(() => String, { description: 'Alternate identifier.' })
  @Column({ name: 'alternate_identifier', type: 'varchar' })
  alternate_identifier: string;

  @Field(() => String, { description: 'Foreign key referencing User_Master.' })
  @Column({ name: 'user_id', type: 'varchar' })
  user_id: string;

  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  @ManyToOne(() => ServiceMaster)
  @JoinColumn({ name: 'service_id', referencedColumnName: 'service_id' })
  serviceMaster: ServiceMaster;

  @ManyToOne(() => SupplierMaster)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplierMaster: SupplierMaster;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client: Client;

  @ManyToOne(() => InventoryStatus)
  @JoinColumn({ name: 'inventory_status', referencedColumnName: 'inventory_status' })
  inventoryStatus: InventoryStatus;

  @ManyToOne(() => PartMaster)
  @JoinColumn([{ name: 'part_number', referencedColumnName: 'part_number' }, { name: 'part_client_id', referencedColumnName: 'part_client_id' }])
  partMaster: PartMaster;

  @ManyToOne(() => OrderHeader)
  @JoinColumn({ name: 'order_number', referencedColumnName: 'order_number' })
  orderHeader: OrderHeader;

  @ManyToOne(() => OrderLine)
  @JoinColumn([{ name: 'order_line_number', referencedColumnName: 'order_line_number' }, { name: 'order_subline_number', referencedColumnName: 'order_subline_number' }])
  orderLine: OrderLine;

  @ManyToOne(() => ShipmentHeader)
  @JoinColumn({ name: 'shipment_id', referencedColumnName: 'shipment_id' })
  shipmentHeader: ShipmentHeader;

  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  userMaster: UserMaster;
} 