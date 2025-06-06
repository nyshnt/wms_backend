import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ArchivedCompartmentHeader } from './archived_compartment_header.entity';

@ObjectType('ArchivedComponentShipment')
@Entity('arc_cmp_shipment')
export class ArchivedComponentShipment {
  @Field(() => String, { description: 'Primary and Foreign key referencing Archived_Compartment_Header.' })
  @PrimaryColumn({ name: 'compartment_key' })
  compartment_key: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Order number.' })
  @PrimaryColumn({ name: 'order_number' })
  order_number: string;

  @Field(() => String, { description: 'Order line number.' })
  @PrimaryColumn({ name: 'order_line_number' })
  order_line_number: string;

  @Field(() => String, { description: 'Order subline number.' })
  @PrimaryColumn({ name: 'order_subline_number' })
  order_subline_number: string;

  @ManyToOne(() => ArchivedCompartmentHeader)
  @JoinColumn({ name: 'compartment_key', referencedColumnName: 'compartment_key' })
  archivedCompartmentHeader: ArchivedCompartmentHeader;
} 