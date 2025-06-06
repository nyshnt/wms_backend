import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';
import { BuildingMaster } from './building_master.entity';

@ObjectType('AreaMaster')
@Entity('area_master')
export class AreaMaster extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the area code.' })
    @PrimaryColumn({ name: 'area_code' })
    area_code: string;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @PrimaryColumn({ name: 'warehouse_id' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse: Warehouse;

    @Field(() => BuildingMaster, { description: 'Primary and Foreign key referencing Building_Master.' })
    @PrimaryColumn({ name: 'building_id' })
    @ManyToOne(() => BuildingMaster)
    @JoinColumn({ name: 'building_id', referencedColumnName: 'building_id' })
    building: BuildingMaster;
} 