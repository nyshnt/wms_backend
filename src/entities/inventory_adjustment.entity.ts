import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('InventoryAdjustment')
@Entity('inventory_adjustment')
export class InventoryAdjustment {
  @Field(() => String, { description: 'Unique identifier for the inventory adjustment.' })
  @PrimaryColumn({ name: 'inventory_adjustment_id' })
  inventory_adjustment_id: string;

  @Field(() => String, { description: 'Part number.' })
  @Column({ name: 'part_number', type: 'varchar' })
  part_number: string;

  @Field(() => String, { description: 'Part client ID.' })
  @Column({ name: 'part_client_id', type: 'varchar' })
  part_client_id: string;

  @Field(() => String, { description: 'Lot number.' })
  @Column({ name: 'lot_number', type: 'varchar' })
  lot_number: string;

  @Field(() => String, { description: 'Supplier number.' })
  @Column({ name: 'supplier_number', type: 'varchar' })
  supplier_number: string;

  @Field(() => Boolean, { description: 'Consignment flag.' })
  @Column({ name: 'consignment_flag', type: 'boolean' })
  consignment_flag: boolean;
} 