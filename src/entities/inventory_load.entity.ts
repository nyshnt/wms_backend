import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';
import { PalletDetail } from './pallet_detail.entity';
import { LocationMaster } from './location_master.entity';

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
    warehouse: Warehouse;

    @Field(() => LocationMaster, { description: 'Foreign key referencing Location_Master.' })
    @ManyToOne(() => LocationMaster)
    @JoinColumn({ name: 'storage_location', referencedColumnName: 'storage_location' })
    storage_location: LocationMaster;

    @Field(() => String, { description: 'Unit of cargo code for the load.' })
    @Column({ name: 'load_unit_of_cargo_code', type: 'varchar', length: 255, nullable: true })
    load_unit_of_cargo_code: string;

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
