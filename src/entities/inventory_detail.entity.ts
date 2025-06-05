import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';
import { OrderHeader } from './orderheader.entity';
import { CustomsConsignment } from './customs_consignment.entity';
import { ShipmentLine } from './shipment_line.entity';
import { Distribution } from './distribution.entity';

@ObjectType('InventoryDetail')
@Entity('inventory_detail')
@Index('IDX_inventory_detail_inventory_detail_number', ['inventory_detail_number'], { unique: true })
@Index('IDX_inventory_detail_warehouse_id', ['warehouse_id'], { unique: true })
@Index('IDX_inventory_detail_client_id', ['client_id'], { unique: true })
export class InventoryDetail extends BaseEntity {
    @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
    @PrimaryColumn({ type: 'uuid' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;

    @Field(() => String, { description: 'Unique identifier for the inventory detail.' })
    @PrimaryColumn({ type: 'uuid' })
    inventory_detail_number: string;

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
}
