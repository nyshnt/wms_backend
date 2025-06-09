import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { AssetType } from './asset_type.entity';

@ObjectType()
@Entity('pick_list_asset_slot')
export class PickListAssetSlot {
  @Field(() => String, { description: 'Unique ID for the asset slot type.' })
  @PrimaryGeneratedColumn({ name: 'slot_type_id' })
  slot_type_id: string;

  @Field(() => String, { description: 'Code for the asset slot.' })
  @Column({ name: 'asset_slot_code' })
  asset_slot_code: string;

  @Field(() => AssetType, { description: 'Foreign key to Asset_Type.' })
  @ManyToOne(() => AssetType)
  @JoinColumn({ name: 'slot_asset_type_id' })
  slot_asset_type: AssetType;

  @Field(() => AssetType, { description: '(Redundant FK, confirm) Foreign key to Asset_Type.' })
  @ManyToOne(() => AssetType)
  @JoinColumn({ name: 'asset_type_id_fk' })
  asset_type_id_fk: AssetType;
} 