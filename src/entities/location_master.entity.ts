import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { PickZone } from './pick_zone.entity';
import { StorageZone } from './storage_zone.entity';
import { MovementZone } from './movement_zone.entity';
import { WorkZoneMaster } from './work_zone_master.entity';
import { Warehouse } from './warehouse.entity';
import { ContainerZone } from './container_zone.entity';
import { LocationType } from './location_type.entity';
import { DeviceMaster } from './device_master.entity';
import { AreaMaster } from './area_master.entity';
import { BuildingMaster } from './building_master.entity';

@ObjectType('LocationMaster')
@Entity('location_master')
export class LocationMaster extends BaseEntity {
    @Field(() => PickZone, { description: 'Primary and Foreign key referencing Pick_Zone.' })
    @PrimaryColumn({ name: 'pick_zone_id' })
    @ManyToOne(() => PickZone)
    @JoinColumn({ name: 'pick_zone_id', referencedColumnName: 'pick_zone_id' })
    pickZone: PickZone;

    @Field(() => String, { description: 'Storage location.' })
    @PrimaryColumn({ name: 'storage_location' })
    storage_location: string;

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

    @Field(() => LocationType, { description: 'Primary and Foreign key referencing Location_Type.' })
    @PrimaryColumn({ name: 'location_type_id' })
    @ManyToOne(() => LocationType)
    @JoinColumn({ name: 'location_type_id', referencedColumnName: 'location_type_id' })
    locationType: LocationType;

    @Field(() => AreaMaster, { description: 'Foreign key referencing Area_Master.' })
    @ManyToOne(() => AreaMaster)
    @JoinColumn({ name: 'area_code', referencedColumnName: 'area_code' })
    area: AreaMaster;

    @Field(() => String, { description: 'ABC classification code.' })
    @Column({ name: 'ABC_code', type: 'varchar', length: 255, nullable: true })
    ABC_code: string;

    @Field(() => BuildingMaster, { description: 'Foreign key referencing Building_Master.' })
    @ManyToOne(() => BuildingMaster)
    @JoinColumn({ name: 'building_id', referencedColumnName: 'building_id' })
    building: BuildingMaster;

    @Field(() => String, { description: 'Area code.' })
    @Column({ name: 'area_code', type: 'varchar', length: 255, nullable: true })
    area_code: string;

    @Field(() => String, { description: 'Status of the location.' })
    @Column({ name: 'location_status', type: 'varchar', length: 255, nullable: true })
    location_status: string;

    @Field(() => Number, { description: 'Length of the location.' })
    @Column({ name: 'location_length', type: 'float', nullable: true })
    location_length: number;

    @Field(() => Number, { description: 'Width of the location.' })
    @Column({ name: 'location_width', type: 'float', nullable: true })
    location_width: number;

    @Field(() => Number, { description: 'Volume capacity of the location.' })
    @Column({ name: 'location_volume_capacity', type: 'float', nullable: true })
    location_volume_capacity: number;

    @Field(() => DeviceMaster, { description: 'Foreign key referencing Device_Master.' })
    @ManyToOne(() => DeviceMaster)
    @JoinColumn({ name: 'device_code', referencedColumnName: 'device_code' })
    device: DeviceMaster;

    @Field(() => Number, { description: 'Top-left X coordinate.' })
    @Column({ name: 'top_left_x_coordinate', type: 'float', nullable: true })
    top_left_x_coordinate: number;

    @Field(() => Number, { description: 'Top-left Y coordinate.' })
    @Column({ name: 'top_left_y_coordinate', type: 'float', nullable: true })
    top_left_y_coordinate: number;

    @Field(() => Number, { description: 'Top-right X coordinate.' })
    @Column({ name: 'top_right_x_coordinate', type: 'float', nullable: true })
    top_right_x_coordinate: number;

    @Field(() => Number, { description: 'Top-right Y coordinate.' })
    @Column({ name: 'top_right_y_coordinate', type: 'float', nullable: true })
    top_right_y_coordinate: number;

    @Field(() => Number, { description: 'Bottom-left X coordinate.' })
    @Column({ name: 'bottom_left_x_coordinate', type: 'float', nullable: true })
    bottom_left_x_coordinate: number;

    @Field(() => Number, { description: 'Bottom-left Y coordinate.' })
    @Column({ name: 'bottom_left_y_coordinate', type: 'float', nullable: true })
    bottom_left_y_coordinate: number;

    @Field(() => Number, { description: 'Bottom-right X coordinate.' })
    @Column({ name: 'bottom_right_x_coordinate', type: 'float', nullable: true })
    bottom_right_x_coordinate: number;

    @Field(() => Number, { description: 'Bottom-right Y coordinate.' })
    @Column({ name: 'bottom_right_y_coordinate', type: 'float', nullable: true })
    bottom_right_y_coordinate: number;

    @Field(() => Number, { description: 'Padding for the border.' })
    @Column({ name: 'border_padding', type: 'float', nullable: true })
    border_padding: number;

    @Field(() => Boolean, { description: 'Auto move flag.' })
    @Column({ name: 'auto_move_flag', type: 'boolean', nullable: true })
    auto_move_flag: boolean;

    @Field(() => String, { description: 'Location access details.' })
    @Column({ name: 'location_access' })
    locationAccess: string;
} 