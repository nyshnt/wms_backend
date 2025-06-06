import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';
import { OrderHeader } from './order_header.entity';
import { CustomsConsignment } from './customs_consignment.entity';
import { ShipmentLine } from './shipment_line.entity';
import { Distribution } from './distribution.entity';
import { InventoryLoad } from './inventory_load.entity';
import { InventorySubLocation } from './inventory_sub_location.entity';
import { PartMaster } from './part_master.entity';
import { FTPMaster } from './ftp_master.entity';
import { PickWorkHeader } from './pick_work_header.entity';

@ObjectType('InventoryDetail')
@Entity('inventory_detail')
@Index('IDX_inventory_detail_inventory_detail_number', ['inventory_detail_number'], { unique: true })
@Index('IDX_inventory_detail_warehouse_id', ['warehouse_id'], { unique: true })
@Index('IDX_inventory_detail_client_id', ['client_id'], { unique: true })
export class InventoryDetail extends BaseEntity {
    @Field(() => InventoryLoad, { description: 'Primary and Foreign key referencing Inventory_Load.' })
    @PrimaryColumn({ name: 'load_number' })
    @ManyToOne(() => InventoryLoad)
    @JoinColumn({ name: 'load_number', referencedColumnName: 'load_number' })
    load_number: string;

    @Field(() => String, { description: 'Unique identifier for the inventory detail.' })
    @PrimaryColumn({ name: 'inventory_detail_number' })
    inventory_detail_number: string;

    @Field(() => InventorySubLocation, { description: 'Primary and Foreign key referencing Inventory_Sub_Location.' })
    @PrimaryColumn({ name: 'sub_number' })
    @ManyToOne(() => InventorySubLocation)
    @JoinColumn({ name: 'sub_number', referencedColumnName: 'sub_number' })
    sub_number: string;

    @Field(() => PartMaster, { description: 'Foreign key referencing Part_Master.' })
    @ManyToOne(() => PartMaster)
    @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
    part_number: string;

    @Field(() => PartMaster, { description: 'Foreign key referencing Part_Master.' })
    @ManyToOne(() => PartMaster)
    @JoinColumn({ name: 'part_client_id', referencedColumnName: 'part_client_id' })
    part_client_id: string;

    @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
    @PrimaryColumn({ type: 'uuid' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;

    @Field(() => Client, { description: 'Primary and Foreign key referencing the Client table.' })
    @PrimaryColumn({ type: 'uuid' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => OrderHeader, { description: 'Foreign key referencing the Order_Header table.' })
    @ManyToOne(() => OrderHeader)
    @JoinColumn({ name: 'order_number', referencedColumnName: 'order_number' })
    order_number: OrderHeader;

    @Field(() => Number, { description: 'Order line number.' })
    @Column({ type: 'int', nullable: false })
    order_line_number: number;

    @Field(() => Number, { description: 'Order subline number.' })
    @Column({ type: 'int', nullable: false })
    order_subline_number: number;

    @Field(() => String, { description: 'Tracking key for the inventory detail.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    tracking_key: string;

    @Field(() => String, { description: 'Device code.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    device_code: string;

    @Field(() => CustomsConsignment, { description: 'Foreign key referencing Customs_Consignment.' })
    @ManyToOne(() => CustomsConsignment)
    @JoinColumn({ name: 'customs_consignment_id', referencedColumnName: 'customs_consignment_id' })
    customs_consignment_id: CustomsConsignment;

    @Field(() => ShipmentLine, { description: 'Foreign key referencing the Shipment_Line table.' })
    @ManyToOne(() => ShipmentLine)
    @JoinColumn({ name: 'shipment_line_id', referencedColumnName: 'shipment_line_id' })
    shipment_line_id: ShipmentLine;

    @Field(() => Distribution, { description: 'Foreign key referencing the Distribution table.' })
    @ManyToOne(() => Distribution)
    @JoinColumn({ name: 'distribution_id', referencedColumnName: 'distribution_id' })
    distribution_id: Distribution;

    @Field(() => String, { description: 'Invoice line number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    invoice_line_number: string;

    @Field(() => String, { description: 'Invoice number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    invoice_number: string;

    @Field(() => String, { description: 'Invoice subline number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    invoice_subline_number: string;

    @Field(() => String, { description: 'Supplier number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    supplier_number: string;

    @Field(() => String, { description: 'Tracking number.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    tracking_number: string;

    @Field(() => FTPMaster, { description: 'Foreign key referencing FTP_Master.' })
    @ManyToOne(() => FTPMaster)
    @JoinColumn({ name: 'FTP_code', referencedColumnName: 'FTP_code' })
    FTP_code: FTPMaster;

    @Field(() => PickWorkHeader, { description: 'Foreign key referencing Pick_Work_Header.' })
    @ManyToOne(() => PickWorkHeader)
    @JoinColumn({ name: 'work_reference', referencedColumnName: 'work_reference' })
    work_reference: PickWorkHeader;

    @Field(() => String, { description: 'Generic string attribute 1 for inventory.' })
    @Column({ name: 'inventory_attribute_string_1', type: 'varchar', length: 255, nullable: true })
    inventory_attribute_string_1: string;

    @Field(() => String, { description: 'Generic string attribute 10 for inventory.' })
    @Column({ name: 'inventory_attribute_string_10', type: 'varchar', length: 255, nullable: true })
    inventory_attribute_string_10: string;

    @Field(() => Number, { description: 'Generic integer attribute 1 for inventory.' })
    @Column({ name: 'inventory_attribute_integer_1', type: 'int', nullable: true })
    inventory_attribute_integer_1: number;

    @Field(() => Number, { description: 'Generic integer attribute 5 for inventory.' })
    @Column({ name: 'inventory_attribute_integer_5', type: 'int', nullable: true })
    inventory_attribute_integer_5: number;

    @Field(() => Number, { description: 'Generic float attribute 1 for inventory.' })
    @Column({ name: 'inventory_attribute_float_1', type: 'float', nullable: true })
    inventory_attribute_float_1: number;

    @Field(() => Number, { description: 'Generic float attribute 2 for inventory.' })
    @Column({ name: 'inventory_attribute_float_2', type: 'float', nullable: true })
    inventory_attribute_float_2: number;

    @Field(() => Number, { description: 'Generic float attribute 3 for inventory.' })
    @Column({ name: 'inventory_attribute_float_3', type: 'float', nullable: true })
    inventory_attribute_float_3: number;

    @Field(() => Date, { description: 'Generic date attribute 1 for inventory.' })
    @Column({ name: 'inventory_attribute_date_1', type: 'date', nullable: true })
    inventory_attribute_date_1: Date;

    @Field(() => Date, { description: 'Generic date attribute 2 for inventory.' })
    @Column({ name: 'inventory_attribute_date_2', type: 'date', nullable: true })
    inventory_attribute_date_2: Date;
}
