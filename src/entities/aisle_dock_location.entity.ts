import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { Aisle } from './aisle.entity';
import { LocationMaster } from './location_master.entity';
import { BuildingMaster } from './building_master.entity';

@ObjectType('AisleDockLocation')
@Entity('aisle_dock_location')
export class AisleDockLocation {
  @Field(() => String, { description: 'Unique identifier for the aisle dock location.' })
  @PrimaryColumn({ name: 'aisle_dock_location_id' })
  aisle_dock_location_id: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => Aisle, { description: 'Aisle ID.' })
  @ManyToOne(() => Aisle)
  @JoinColumn({ name: 'aisle_id', referencedColumnName: 'aisle_id' })
  aisle_id: Aisle;

  @Field(() => String, { description: 'Dock location.' })
  @Column({ name: 'dock_location', type: 'varchar' })
  dock_location: string;

  @Field(() => LocationMaster, { description: 'Staging location.' })
  @ManyToOne(() => LocationMaster)
  @JoinColumn({ name: 'staging_location', referencedColumnName: 'storage_location' })
  staging_location: LocationMaster;

  @Field(() => BuildingMaster, { description: 'Building ID.' })
  @ManyToOne(() => BuildingMaster)
  @JoinColumn({ name: 'building_id', referencedColumnName: 'building_id' })
  building_id: BuildingMaster;

  @Field(() => String, { description: 'Dock mode.' })
  @Column({ name: 'dock_mode', type: 'varchar' })
  dock_mode: string;

  @Field(() => Number, { description: 'Primary sequence number.' })
  @Column({ name: 'sequence_number_primary', type: 'int' })
  sequence_number_primary: number;

  @Field(() => Number, { description: 'Secondary sequence number.' })
  @Column({ name: 'sequence_number_secondary', type: 'int' })
  sequence_number_secondary: number;
} 