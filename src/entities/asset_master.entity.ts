import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Index, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Client } from './client.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('AssetMaster')
@Entity('asset_master')
@Index('IDX_asset_master_asset_id', ['asset_id'], { unique: true })
export class AssetMaster extends BaseEntity {
    @Field(() => String)
    @PrimaryGeneratedColumn('uuid')
    asset_id: string;

    @Field(() => String)
    @Column({ type: 'varchar', length: 255, nullable: false })
    asset_number: string;

    @Field(() => Client)
    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id' })
    client_id: Client;

    @Field(() => Warehouse)
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id' })
    warehouse_id: Warehouse;
}
