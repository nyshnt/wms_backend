import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { AssetTypeAssetListPicking } from './asset_type_asset_list_picking.entity';

@ObjectType()
@Entity('serialized_asset_list_picking')
export class SerializedAssetListPicking {
  @Field(() => String, { description: 'Unique asset identifier.' })
  @PrimaryGeneratedColumn({ name: 'asset_id' })
  asset_id: string;

  @Field(() => String, { description: 'Source address ID.' })
  @Column({ name: 'source_address_id' })
  source_address_id: string;

  @Field(() => String, { description: 'Address ID.' })
  @Column({ name: 'address_id' })
  address_id: string;

  @Field(() => String, { description: 'Asset status code.' })
  @Column({ name: 'asset_status_code' })
  asset_status_code: string;

  @Field(() => String, { description: 'Client ID.' })
  @Column({ name: 'client_id' })
  client_id: string;

  @Field(() => AssetTypeAssetListPicking, { description: 'Foreign key to Asset Type.' })
  @ManyToOne(() => AssetTypeAssetListPicking)
  @JoinColumn({ name: 'asset_type_id' })
  asset_type_id: AssetTypeAssetListPicking;
} 