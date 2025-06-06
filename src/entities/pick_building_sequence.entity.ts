import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('PickBuildingSequence')
@Entity('pick_building_sequence')
export class PickBuildingSequence extends BaseEntity {
    @Field(() => String, { description: 'Building ID.' })
    @PrimaryColumn({ name: 'building_id' })
    buildingId: string;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse: Warehouse;
} 