import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ReceivingTruckTracking } from './receiving_truck_tracking.entity';
import { ClientMaster } from './client_master.entity';
import { SupplierMaster } from './supplier_master.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('ReceivingInvoiceHeader')
@Entity('receiving_invoice_header')
export class ReceivingInvoiceHeader {
  @Field(() => ReceivingTruckTracking, { description: 'Tracking number.' })
  @PrimaryColumn({ name: 'tracking_number' })
  @ManyToOne(() => ReceivingTruckTracking)
  @JoinColumn({ name: 'tracking_number', referencedColumnName: 'tracking_number' })
  tracking_number: ReceivingTruckTracking;

  @Field(() => ClientMaster, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: ClientMaster;

  @Field(() => SupplierMaster, { description: 'Supplier number.' })
  @PrimaryColumn({ name: 'supplier_number' })
  @ManyToOne(() => SupplierMaster)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplier_number: SupplierMaster;

  @Field(() => String, { description: 'Invoice number.' })
  @PrimaryColumn({ name: 'invoice_number' })
  invoice_number: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;
} 