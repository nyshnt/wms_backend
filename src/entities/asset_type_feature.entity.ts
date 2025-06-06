import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { AssetType } from './asset_type.entity';
import { AssetFeature } from './asset_feature.entity';

@ObjectType('AssetTypeFeature')
@Entity('asset_type_feature')
export class AssetTypeFeature {
  @Field(() => AssetType, { description: 'Primary and Foreign key referencing Asset_Type.' })
  @PrimaryColumn({ name: 'asset_type' })
  @ManyToOne(() => AssetType)
  @JoinColumn({ name: 'asset_type', referencedColumnName: 'asset_type' })
  asset_type: AssetType;

  @Field(() => AssetFeature, { description: 'Primary and Foreign key referencing Asset_Feature.' })
  @PrimaryColumn({ name: 'feature_id' })
  @ManyToOne(() => AssetFeature)
  @JoinColumn({ name: 'feature_id', referencedColumnName: 'feature_id' })
  feature_id: AssetFeature;

  @Field(() => Number, { description: 'Maximum value for the feature.' })
  @Column({ name: 'maximum_value', type: 'float', nullable: true })
  maximum_value: number;

  @Field(() => Number, { description: 'Minimum value for the feature.' })
  @Column({ name: 'minimum_value', type: 'float', nullable: true })
  minimum_value: number;
} 