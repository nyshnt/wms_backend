import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PickListAssetListPicking } from './pick_list_asset_list_picking.entity';
import { PickListAssetSlotDefinition } from './pick_list_asset_slot_definition.entity';

@ObjectType()
@Entity('pick_work_header_asset_list_picking')
export class PickWorkHeaderAssetListPicking {
  @Field(() => String, { description: 'Unique work reference identifier.' })
  @PrimaryColumn({ name: 'work_reference' })
  work_reference: string;

  @Field(() => String, { description: 'Work type.' })
  @Column({ name: 'work_type' })
  work_type: string;

  @Field(() => String, { description: 'Source location.' })
  @Column({ name: 'source_location' })
  source_location: string;

  @Field(() => String, { description: 'Source area code.' })
  @Column({ name: 'source_area_code' })
  source_area_code: string;

  @Field(() => Number, { description: 'Picked quantity.' })
  @Column({ name: 'picked_quantity' })
  picked_quantity: number;

  @Field(() => Number, { description: 'Approved quantity.' })
  @Column({ name: 'approved_quantity' })
  approved_quantity: number;

  @Field(() => String, { description: 'Pick status.' })
  @Column({ name: 'pick_status' })
  pick_status: string;

  @Field(() => String, { description: 'Part number.' })
  @Column({ name: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Part client ID.' })
  @Column({ name: 'part_client_id' })
  part_client_id: string;

  @Field(() => String, { description: 'Load division ID.' })
  @Column({ name: 'load_division_id' })
  load_division_id: string;

  @Field(() => PickListAssetListPicking, { description: 'Foreign key to Pick List.' })
  @ManyToOne(() => PickListAssetListPicking)
  @JoinColumn({ name: 'pick_list_id' })
  pick_list: PickListAssetListPicking;

  @Field(() => PickListAssetSlotDefinition, { description: 'Foreign key to Pick List Asset Slot.' })
  @ManyToOne(() => PickListAssetSlotDefinition)
  @JoinColumn({ name: 'asset_slot_id' })
  asset_slot: PickListAssetSlotDefinition;
} 