import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ArchivedCompartmentHeader } from './archived_compartment_header.entity';

@ObjectType('ArchivedCompartmentDetail')
@Entity('arc_cmpdtl')
export class ArchivedCompartmentDetail {
  @Field(() => String, { description: 'Primary and Foreign key referencing Archived_Compartment_Header.' })
  @PrimaryColumn({ name: 'compartment_key' })
  compartment_key: string;

  @Field(() => Date, { description: 'Primary and Foreign key referencing Archived_Compartment_Header.' })
  @PrimaryColumn({ name: 'added_date' })
  added_date: Date;

  @Field(() => String, { description: 'Part number.' })
  @PrimaryColumn({ name: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Client ID for the part.' })
  @PrimaryColumn({ name: 'part_client_id' })
  part_client_id: string;

  @Field(() => String, { description: 'Lot number.' })
  @Column({ name: 'lot_number', type: 'varchar' })
  lot_number: string;

  @Field(() => String, { description: 'Revision level.' })
  @Column({ name: 'revision_level', type: 'varchar' })
  revision_level: string;

  @Field(() => String, { description: 'Origin code.' })
  @Column({ name: 'origin_code', type: 'varchar' })
  origin_code: string;

  @Field(() => String, { description: 'Sub number.' })
  @Column({ name: 'sub_number', type: 'varchar' })
  sub_number: string;

  @Field(() => String, { description: 'Inventory detail number.' })
  @Column({ name: 'inventory_detail_number', type: 'varchar' })
  inventory_detail_number: string;

  @Field(() => String, { description: 'Inventory status.' })
  @Column({ name: 'inventory_status', type: 'varchar' })
  inventory_status: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @Column({ name: 'warehouse_id', type: 'varchar' })
  warehouse_id: string;

  @ManyToOne(() => ArchivedCompartmentHeader)
  @JoinColumn([{ name: 'compartment_key', referencedColumnName: 'compartment_key' }, { name: 'added_date', referencedColumnName: 'added_date' }])
  archivedCompartmentHeader: ArchivedCompartmentHeader;
} 