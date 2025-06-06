import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { AssetFeature } from './asset_feature.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('AssetType')
@Entity('asset_type')
export class AssetType {
  @Field(() => String, { description: 'Unique identifier for the asset type.' })
  @PrimaryColumn({ name: 'asset_type' })
  asset_type: string;

  @Field(() => AssetFeature, { description: 'Primary and Foreign key referencing Asset_Feature.' })
  @PrimaryColumn({ name: 'feature_id' })
  @ManyToOne(() => AssetFeature)
  @JoinColumn({ name: 'feature_id', referencedColumnName: 'feature_id' })
  feature: AssetFeature;

  @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  // Add additional fields as necessary
} 