import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceAsset } from './service_asset.entity';
import { AssetFeature } from './asset_feature.entity';

@ObjectType('ServiceAssetFeature')
@Entity('service_asset_feature')
export class ServiceAssetFeature {
  @Field(() => ServiceAsset, { description: 'Primary and Foreign key referencing Service_Asset.' })
  @PrimaryColumn({ name: 'asset_id' })
  @ManyToOne(() => ServiceAsset)
  @JoinColumn({ name: 'asset_id', referencedColumnName: 'asset_id' })
  asset_id: string;

  @Field(() => AssetFeature, { description: 'Primary and Foreign key referencing Asset_Feature.' })
  @PrimaryColumn({ name: 'feature_id' })
  @ManyToOne(() => AssetFeature)
  @JoinColumn({ name: 'feature_id', referencedColumnName: 'feature_id' })
  feature_id: string;

  @Field(() => Number, { description: 'Maximum value for the feature.' })
  @Column({ name: 'maximum_value', type: 'float', nullable: true })
  maximum_value: number;

  @Field(() => Number, { description: 'Minimum value for the feature.' })
  @Column({ name: 'minimum_value', type: 'float', nullable: true })
  minimum_value: number;

  @Field(() => Date, { description: 'Date of the last reading.' })
  @Column({ name: 'last_read_date', type: 'date', nullable: true })
  last_read_date: Date;

  @Field(() => String, { description: 'Time of the last reading.' })
  @Column({ name: 'last_read_time', type: 'time', nullable: true })
  last_read_time: string;
} 