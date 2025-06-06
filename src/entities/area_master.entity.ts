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
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse: Warehouse;

    @Field(() => BuildingMaster, { description: 'Foreign key referencing the Building_Master table.' })
    @ManyToOne(() => BuildingMaster)
    @JoinColumn({ name: 'building_id', referencedColumnName: 'building_id' })
    building: BuildingMaster;
} 