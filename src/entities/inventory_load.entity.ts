import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('InventoryLoad')
@Entity('inventory_load')
export class InventoryLoad {
  @Field(() => String, { description: 'Load ID.' })
  @PrimaryColumn({ name: 'load_id' })
  load_id: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

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

  @Field(() => String, { description: 'Load number.' })
  @PrimaryColumn({ name: 'load_number' })
  load_number: string;
}
