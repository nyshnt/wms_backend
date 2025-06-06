import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceAsset } from './service_asset.entity';

@ObjectType('AssetFeature')
@Entity('asset_feature')
export class AssetFeature {
  @Field(() => String, { description: 'Unique identifier for the asset feature.' })
  @PrimaryColumn({ name: 'feature_id' })
  feature_id: string;

  @Field(() => String, { description: 'Name of the asset feature.' })
  @Column({ name: 'feature_name', type: 'varchar', length: 255, nullable: true })
  feature_name: string;

  @Field(() => String, { description: 'Description of the asset feature.' })
  @Column({ name: 'description', type: 'varchar', length: 255, nullable: true })
  description: string;

  @Field(() => ServiceAsset, { description: 'Foreign key referencing Service_Asset.' })
  @ManyToOne(() => ServiceAsset)
  @JoinColumn({ name: 'asset_id', referencedColumnName: 'asset_id' })
  serviceAsset: ServiceAsset;
}
