import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';
import { PalletDetail } from './pallet_detail.entity';

@ObjectType('InventoryLoad')
@Entity('inventory_load')
@Index('IDX_inventory_load_load_number', ['load_number'], { unique: true })
export class InventoryLoad extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the inventory load.' })
    @PrimaryColumn({ name: 'load_number' })
    load_number: string;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: string;

    @Field(() => String, { description: 'Storage location for the load.' })
    @Column({ name: 'storage_location', type: 'varchar', length: 255, nullable: true })
    storage_location: string;

    @Field(() => PalletDetail, { description: 'Foreign key referencing the Pallet_Detail table.' })
    @ManyToOne(() => PalletDetail)
    @JoinColumn({ name: 'pallet_id', referencedColumnName: 'pallet_id' })
    pallet_id: PalletDetail;

    @Field(() => String, { description: 'Dynamic name associated with the load.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    dynamic_name: string;

    @Field(() => String, { description: 'Device code.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    device_code: string;
}
