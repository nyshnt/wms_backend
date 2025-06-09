import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ReceivingInvoiceHeader } from './receiving_invoice_header.entity';
import { PartMaster } from './part_master.entity';

@ObjectType('ReceivingLineItem')
@Entity('receiving_line_item')
export class ReceivingLineItem {
  @Field(() => String, { description: 'Tracking number.' })
  @PrimaryColumn({ name: 'tracking_number' })
  @ManyToOne(() => ReceivingInvoiceHeader)
  @JoinColumn({ name: 'tracking_number', referencedColumnName: 'tracking_number' })
  tracking_number: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => ReceivingInvoiceHeader)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Supplier number.' })
  @PrimaryColumn({ name: 'supplier_number' })
  @ManyToOne(() => ReceivingInvoiceHeader)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplier_number: string;

  @Field(() => String, { description: 'Invoice number.' })
  @PrimaryColumn({ name: 'invoice_number' })
  @ManyToOne(() => ReceivingInvoiceHeader)
  @JoinColumn({ name: 'invoice_number', referencedColumnName: 'invoice_number' })
  invoice_number: string;

  @Field(() => String, { description: 'Invoice line number.' })
  @PrimaryColumn({ name: 'invoice_line_number' })
  invoice_line_number: string;

  @Field(() => String, { description: 'Invoice sub-line number.' })
  @PrimaryColumn({ name: 'invoice_sub_line_number' })
  invoice_sub_line_number: string;

  @Field(() => String, { description: 'Sequence number for the receiving line.' })
  @PrimaryColumn({ name: 'sequence_number' })
  sequence_number: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => ReceivingInvoiceHeader)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Part number.' })
  @Column({ name: 'part_number', nullable: true })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: string;
} 