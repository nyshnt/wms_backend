import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { LocationType } from './location_type.entity';
import { PickZone } from './pick_zone.entity';
import { StorageZone } from './storage_zone.entity';
import { MovementZone } from './movement_zone.entity';
import { WorkZoneMaster } from './work_zone_master.entity';
import { Warehouse } from './warehouse.entity';
import { ContainerZone } from './container_zone.entity';

@ObjectType('LocationMap')
@Entity('location_map')
export class LocationMap extends BaseEntity {
    @Field(() => LocationType, { description: 'Primary and Foreign key referencing Location_Type.' })
    @PrimaryColumn({ name: 'location_type_id' })
    @ManyToOne(() => LocationType)
    @JoinColumn({ name: 'location_type_id', referencedColumnName: 'location_type_id' })
    locationType: LocationType;

    @Field(() => PickZone, { description: 'Primary and Foreign key referencing Pick_Zone.' })
    @PrimaryColumn({ name: 'pick_zone_id' })
    @ManyToOne(() => PickZone)
    @JoinColumn({ name: 'pick_zone_id', referencedColumnName: 'pick_zone_id' })
    pickZone: PickZone;

    @Field(() => StorageZone, { description: 'Primary and Foreign key referencing Storage_Zone.' })
    @PrimaryColumn({ name: 'storage_zone_id' })
    @ManyToOne(() => StorageZone)
    @JoinColumn({ name: 'storage_zone_id', referencedColumnName: 'storage_zone_id' })
    storageZone: StorageZone;

    @Field(() => MovementZone, { description: 'Primary and Foreign key referencing Movement_Zone.' })
    @PrimaryColumn({ name: 'movement_zone_id' })
    @ManyToOne(() => MovementZone)
    @JoinColumn({ name: 'movement_zone_id', referencedColumnName: 'movement_zone_id' })
    movementZone: MovementZone;

    @Field(() => WorkZoneMaster, { description: 'Primary and Foreign key referencing Work_Zone_Master.' })
    @PrimaryColumn({ name: 'work_zone_id' })
    @ManyToOne(() => WorkZoneMaster)
    @JoinColumn({ name: 'work_zone_id', referencedColumnName: 'work_zone_id' })
    workZone: WorkZoneMaster;

    @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
    @PrimaryColumn({ name: 'warehouse_id' })
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse: Warehouse;

    @Field(() => ContainerZone, { description: 'Primary and Foreign key referencing Container_Zone.' })
    @PrimaryColumn({ name: 'container_zone_id' })
    @ManyToOne(() => ContainerZone)
    @JoinColumn({ name: 'container_zone_id', referencedColumnName: 'container_zone_id' })
    containerZone: ContainerZone;

    @Field(() => String, { description: 'Storage location.' })
    @Column({ name: 'storage_location' })
    storageLocation: string;
} 