import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { BuildingMaster } from './building_master.entity';
import { StorageZone } from './storage_zone.entity';

@ObjectType('StorageZoneConfigurationHeader')
@Entity('storage_zone_configuration_header')
export class StorageZoneConfigurationHeader {
  @Field(() => String, { description: 'Unique identifier for the storage zone configuration header.' })
  @PrimaryColumn({ name: 'storage_zone_configuration_id' })
  storage_zone_configuration_id: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => BuildingMaster, { description: 'Building ID.' })
  @ManyToOne(() => BuildingMaster)
  @JoinColumn({ name: 'building_id', referencedColumnName: 'building_id' })
  building_id: BuildingMaster;

  @Field(() => StorageZone, { description: 'Storage zone ID.' })
  @ManyToOne(() => StorageZone)
  @JoinColumn({ name: 'storage_zone_id', referencedColumnName: 'storage_zone_id' })
  storage_zone_id: StorageZone;

  @Field(() => Number, { description: 'Sort sequence.' })
  @Column({ name: 'sort_sequence', type: 'int' })
  sort_sequence: number;

  @Field(() => String, { description: 'Storage strategy.' })
  @Column({ name: 'strategy', type: 'varchar' })
  strategy: string;

  @Field(() => Number, { description: 'Minimum level.' })
  @Column({ name: 'minimum_level', type: 'int' })
  minimum_level: number;

  @Field(() => Number, { description: 'Maximum level.' })
  @Column({ name: 'maximum_level', type: 'int' })
  maximum_level: number;

  @Field(() => Number, { description: 'Maximum load per aisle.' })
  @Column({ name: 'maximum_load_per_aisle', type: 'int' })
  maximum_load_per_aisle: number;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insertion_date', type: 'timestamp' })
  insertion_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp' })
  last_update_date: Date;

  @Field(() => String, { description: 'User ID who inserted the record.' })
  @Column({ name: 'insertion_user_id', type: 'varchar' })
  insertion_user_id: string;

  @Field(() => String, { description: 'User ID who last updated the record.' })
  @Column({ name: 'last_update_user_id', type: 'varchar' })
  last_update_user_id: string;
} 