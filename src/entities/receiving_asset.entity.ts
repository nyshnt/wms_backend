import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceAsset } from './service_asset.entity';
import { AssetType } from './asset_type.entity';
import { AddressMaster } from './address_master.entity';
import { Client } from './client.entity';
import { NonServiceAsset } from './non_service_asset.entity';

@ObjectType('ReceivingAsset')
@Entity('receiving_asset')
export class ReceivingAsset {
  @Field(() => String, { description: 'Unique key for the receiving asset.' })
  @PrimaryColumn({ name: 'receiving_asset_key' })
  receiving_asset_key: string;

  @Field(() => ServiceAsset, { description: 'Asset ID.' })
  @ManyToOne(() => ServiceAsset)
  @JoinColumn({ name: 'asset_id', referencedColumnName: 'asset_id' })
  asset_id: ServiceAsset;

  @Field(() => String, { description: 'Asset tag.' })
  @Column({ name: 'asset_tag', type: 'varchar' })
  asset_tag: string;

  @Field(() => AssetType, { description: 'Asset type.' })
  @ManyToOne(() => AssetType)
  @JoinColumn({ name: 'asset_type', referencedColumnName: 'asset_type_id' })
  asset_type: AssetType;

  @Field(() => AddressMaster, { description: 'Source address ID.' })
  @ManyToOne(() => AddressMaster)
  @JoinColumn({ name: 'source_address_id', referencedColumnName: 'address_id' })
  source_address_id: AddressMaster;

  @Field(() => Client, { description: 'Client ID.' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: Client;

  @Field(() => NonServiceAsset, { description: 'Asset status.' })
  @ManyToOne(() => NonServiceAsset)
  @JoinColumn({ name: 'asset_status', referencedColumnName: 'asset_status' })
  asset_status: NonServiceAsset;

  @Field(() => Number, { description: 'Identified quantity.' })
  @Column({ name: 'identified_quantity', type: 'int' })
  identified_quantity: number;

  @Field(() => Number, { description: 'Received quantity.' })
  @Column({ name: 'received_quantity', type: 'int' })
  received_quantity: number;

  @Field(() => String, { description: 'Carrier code.' })
  @Column({ name: 'carrier_code', type: 'varchar' })
  carrier_code: string;

  @Field(() => String, { description: 'Tracking number.' })
  @Column({ name: 'tracking_number', type: 'varchar' })
  tracking_number: string;
} 