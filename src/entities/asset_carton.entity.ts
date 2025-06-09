import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { CartonMasterAssetListPicking } from './carton_master_asset_list_picking.entity';
import { AssetTypeAssetListPicking } from './asset_type_asset_list_picking.entity';

@ObjectType()
@Entity('asset_carton')
export class AssetCarton {
  @Field(() => CartonMasterAssetListPicking, { description: 'Foreign key to Carton Master.' })
  @PrimaryColumn({ name: 'carton_code' })
  @ManyToOne(() => CartonMasterAssetListPicking)
  @JoinColumn({ name: 'carton_code' })
  carton_code: CartonMasterAssetListPicking;

  @Field(() => CartonMasterAssetListPicking, { description: 'Foreign key to Carton Master.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => CartonMasterAssetListPicking)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse_id: CartonMasterAssetListPicking;

  @Field(() => AssetTypeAssetListPicking, { description: 'Foreign key to Asset Type.' })
  @ManyToOne(() => AssetTypeAssetListPicking)
  @JoinColumn({ name: 'asset_type_id' })
  asset_type_id: AssetTypeAssetListPicking;
} 