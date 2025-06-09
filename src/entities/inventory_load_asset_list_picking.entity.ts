import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('inventory_load_asset_list_picking')
export class InventoryLoadAssetListPicking {
  @Field(() => String, { description: 'Unique load number.' })
  @PrimaryColumn({ name: 'load_number' })
  load_number: string;

  @Field(() => String, { description: 'Stock location.' })
  @Column({ name: 'stock_location' })
  stock_location: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @Column({ name: 'warehouse_id' })
  warehouse_id: string;
} 