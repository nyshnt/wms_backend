import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';
import { AssetMaster } from './asset_master.entity';

@ObjectType('ShipmentAssetTransaction')
@Entity('shipment_asset_transaction')
@Index('IDX_shipment_asset_transaction_id', ['shipment_asset_transaction_id'], { unique: true })
@Index('IDX_shipment_asset_transaction_warehouse_id', ['warehouse_id'])
@Index('IDX_shipment_asset_transaction_client_id', ['client_id'])
@Index('IDX_shipment_asset_transaction_asset_id', ['asset_id'])
export class ShipmentAssetTransaction extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the shipment asset transaction.' })
    @PrimaryGeneratedColumn('uuid')
    shipment_asset_transaction_id: string;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;

    @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
    client_id: Client;

    @Field(() => AssetMaster, { description: 'Foreign key referencing the Asset_Master table.' })
    @ManyToOne(() => AssetMaster)
    @JoinColumn({ name: 'asset_id', referencedColumnName: 'asset_id' })
    asset_id: AssetMaster;

    @Field(() => String, { description: 'Activity ID.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    activity_id: string;
}
