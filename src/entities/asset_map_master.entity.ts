import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('AssetMapMaster')
@Entity('asset_map_master')
export class AssetMapMaster {
  @Field(() => String, { description: 'Unique identifier for the asset map.' })
  @PrimaryColumn({ name: 'map_id' })
  map_id: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;
} 