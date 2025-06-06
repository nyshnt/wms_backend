import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('WarehouseAssetCategory')
@Entity('warehouse_asset_category')
export class WarehouseAssetCategory {
  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => String, { description: 'Category of the asset.' })
  @PrimaryColumn({ name: 'asset_category' })
  asset_category: string;
} 