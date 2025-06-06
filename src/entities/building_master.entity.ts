import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('BuildingMaster')
@Entity('building_master')
export class BuildingMaster extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the building.' })
    @PrimaryColumn({ name: 'building_id' })
    building_id: string;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @PrimaryColumn({ name: 'warehouse_id' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse: Warehouse;
} 