import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('AreaMaster')
@Entity('area_master')
export class AreaMaster {
    @Field(() => String, { description: 'Unique identifier for the area code.' })
    @PrimaryColumn({ name: 'area_code' })
    area_code: string;

    @Field(() => String, { description: 'Warehouse ID.' })
    @PrimaryColumn({ name: 'warehouse_id' })
    warehouse_id: string;

    @Field(() => String, { description: 'Building ID.' })
    @Column({ name: 'building_id', type: 'varchar' })
    building_id: string;

    @Field(() => Boolean, { description: 'Shipment dock flag.' })
    @Column({ name: 'shipment_dock_flag', type: 'boolean' })
    shipment_dock_flag: boolean;

    @Field(() => Boolean, { description: 'Receiving dock flag.' })
    @Column({ name: 'receiving_dock_flag', type: 'boolean' })
    receiving_dock_flag: boolean;
} 