import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { InventorySubDetailAssetListPicking } from './inventory_sub_detail_asset_list_picking.entity';
import { PickWorkDetailAssetListPicking } from './pick_work_detail_asset_list_picking.entity';

@ObjectType()
@Entity('inventory_detail_asset_list_picking')
export class InventoryDetailAssetListPicking {
  @Field(() => String, { description: 'Unique inventory detail number.' })
  @PrimaryColumn({ name: 'inventory_detail_number' })
  inventory_detail_number: string;

  @Field(() => InventorySubDetailAssetListPicking, { description: 'Foreign key to Inventory Sub Detail.' })
  @ManyToOne(() => InventorySubDetailAssetListPicking)
  @JoinColumn({ name: 'sub_detail_number' })
  sub_detail_number: InventorySubDetailAssetListPicking;

  @Field(() => String, { description: 'Part number.' })
  @Column({ name: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Inventory status code.' })
  @Column({ name: 'inventory_status_code' })
  inventory_status_code: string;

  @Field(() => Number, { description: 'Unit quantity.' })
  @Column({ name: 'unit_quantity' })
  unit_quantity: number;

  @Field(() => Number, { description: 'Unit cases.' })
  @Column({ name: 'unit_cases' })
  unit_cases: number;

  @Field(() => Number, { description: 'Unit packs.' })
  @Column({ name: 'unit_packs' })
  unit_packs: number;

  @Field(() => PickWorkDetailAssetListPicking, { description: 'Foreign key to Pick Work Detail.' })
  @ManyToOne(() => PickWorkDetailAssetListPicking)
  @JoinColumn({ name: 'work_reference_detail_id' })
  work_reference_detail_id: PickWorkDetailAssetListPicking;
} 