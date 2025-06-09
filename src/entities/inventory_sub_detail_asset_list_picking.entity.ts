import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { InventoryLoadAssetListPicking } from './inventory_load_asset_list_picking.entity';

@ObjectType()
@Entity('inventory_sub_detail_asset_list_picking')
export class InventorySubDetailAssetListPicking {
  @Field(() => String, { description: 'Unique sub-detail number.' })
  @PrimaryColumn({ name: 'sub_detail_number' })
  sub_detail_number: string;

  @Field(() => InventoryLoadAssetListPicking, { description: 'Foreign key to Inventory Load.' })
  @PrimaryColumn({ name: 'load_number' })
  @ManyToOne(() => InventoryLoadAssetListPicking)
  @JoinColumn({ name: 'load_number' })
  load_number: InventoryLoadAssetListPicking;
} 