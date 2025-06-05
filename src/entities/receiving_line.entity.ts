import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { CustomsConsignment } from './customs_consignment.entity';

@ObjectType('ReceivingLine')
@Entity('receiving_line')
@Index('IDX_receiving_line_tracking_number', ['tracking_number'], { unique: true })
@Index('IDX_receiving_line_client_id', ['client_id'], { unique: true })
@Index('IDX_receiving_line_supplier_number', ['supplier_number'], { unique: true })
@Index('IDX_receiving_line_invoice_number', ['invoice_number'], { unique: true })
@Index('IDX_receiving_line_invoice_line_number', ['invoice_line_number'], { unique: true })
@Index('IDX_receiving_line_invoice_subline_number', ['invoice_subline_number'], { unique: true })
@Index('IDX_receiving_line_segment_number', ['segment_number'], { unique: true })
@Index('IDX_receiving_line_warehouse_id', ['warehouse_id'], { unique: true })
export class ReceivingLine extends BaseEntity {
    @Field(() => String, { description: 'Tracking number for the receiving line.' })
    @PrimaryColumn({ type: 'varchar', length: 255 })
    tracking_number: string;

    @Field(() => String, { description: 'Client ID.' })
    @PrimaryColumn({ type: 'varchar', length: 255 })
    client_id: string;

    @Field(() => String, { description: 'Supplier number.' })
    @PrimaryColumn({ type: 'varchar', length: 255 })
    supplier_number: string;

    @Field(() => String, { description: 'Invoice number.' })
    @PrimaryColumn({ type: 'varchar', length: 255 })
    invoice_number: string;

    @Field(() => String, { description: 'Invoice line number.' })
    @PrimaryColumn({ type: 'varchar', length: 255 })
    invoice_line_number: string;

    @Field(() => String, { description: 'Invoice subline number.' })
    @PrimaryColumn({ type: 'varchar', length: 255 })
    invoice_subline_number: string;

    @Field(() => String, { description: 'Segment number.' })
    @PrimaryColumn({ type: 'varchar', length: 255 })
    segment_number: string;

    @Field(() => String, { description: 'Warehouse ID.' })
    @PrimaryColumn({ type: 'varchar', length: 255 })
    warehouse_id: string;

    @Field(() => CustomsConsignment, { description: 'Foreign key referencing Customs_Consignment.' })
    @ManyToOne(() => CustomsConsignment)
    @JoinColumn({ name: 'customs_consignment_id', referencedColumnName: 'customs_consignment_id' })
    customs_consignment_id: CustomsConsignment;
} 