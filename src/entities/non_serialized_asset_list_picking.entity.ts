import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { AssetTypeAssetListPicking } from './asset_type_asset_list_picking.entity';

@ObjectType()
@Entity('non_serialized_asset_list_picking')
export class NonSerializedAssetListPicking {
  @Field(() => String, { description: 'Asset status code.' })
  @PrimaryColumn({ name: 'asset_status_code' })
  asset_status_code: string;

  @Field(() => String, { description: 'Source address ID.' })
  @PrimaryColumn({ name: 'source_address_id' })
  source_address_id: string;

  @Field(() => String, { description: 'Address ID.' })
  @PrimaryColumn({ name: 'address_id' })
  address_id: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => AssetTypeAssetListPicking, { description: 'Foreign key to Asset Type.' })
  @ManyToOne(() => AssetTypeAssetListPicking)
  @JoinColumn({ name: 'asset_type_id' })
  asset_type_id: AssetTypeAssetListPicking;
} 