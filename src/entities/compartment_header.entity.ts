import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { InventoryDetail } from './inventory_detail.entity';
import { ShipmentLine } from './shipment_line.entity';

@ObjectType('CompartmentHeader')
@Entity('compartment_header')
export class CompartmentHeader {
  @Field(() => String, { description: 'Unique identifier for the compartment header.' })
  @PrimaryColumn({ name: 'compartment_key' })
  compartment_key: string;

  @Field(() => InventoryDetail, { description: 'Foreign key referencing Inventory_Detail.' })
  @ManyToOne(() => InventoryDetail)
  @JoinColumn({ name: 'inventory_detail_number', referencedColumnName: 'inventory_detail_number' })
  inventory_detail: InventoryDetail;

  @Field(() => ShipmentLine, { description: 'Foreign key referencing Shipment_Line.' })
  @ManyToOne(() => ShipmentLine)
  @JoinColumn({ name: 'shipment_line_id', referencedColumnName: 'shipment_line_id' })
  shipment_line: ShipmentLine;
} 