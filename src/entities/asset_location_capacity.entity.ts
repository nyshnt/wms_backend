import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { AssetType } from './asset_type.entity';
import { Client } from './client.entity';
import { Warehouse } from './warehouse.entity';
import { LocationMaster } from './location_master.entity';

@ObjectType('AssetLocationCapacity')
@Entity('asset_location_capacity')
export class AssetLocationCapacity {
  @Field(() => String, { description: 'Asset type.' })
  @PrimaryColumn({ name: 'asset_type' })
  @ManyToOne(() => AssetType)
  @JoinColumn({ name: 'asset_type', referencedColumnName: 'asset_type_id' })
  asset_type: AssetType;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: Client;

  @Field(() => String, { description: 'Manual ID.' })
  @PrimaryColumn({ name: 'manual_id' })
  manual_id: string;

  @Field(() => String, { description: 'Model of the asset.' })
  @Column({ name: 'model', type: 'varchar' })
  model: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => LocationMaster, { description: 'Storage location.' })
  @ManyToOne(() => LocationMaster)
  @JoinColumn({ name: 'storage_location', referencedColumnName: 'storage_location' })
  storage_location: LocationMaster;
} 