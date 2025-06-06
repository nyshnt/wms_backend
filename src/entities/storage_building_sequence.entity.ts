import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('StorageBuildingSequence')
@Entity('storage_building_sequence')
export class StorageBuildingSequence extends BaseEntity {
    @Field(() => String, { description: 'Destination building ID.' })
    @PrimaryColumn({ name: 'destination_building_id' })
    destinationBuildingId: string;

    @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse: Warehouse;
} 