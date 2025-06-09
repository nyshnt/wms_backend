import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ZoneMaster } from './zone_master.entity';
import { VehicleType } from './vehicle_type.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('WorkZoneVehicleType')
@Entity('work_zone_vehicle_type')
export class WorkZoneVehicleType {
  @Field(() => ZoneMaster, { description: 'Foreign key referencing Zone_Master.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => ZoneMaster)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => ZoneMaster, { description: 'Foreign key referencing Zone_Master.' })
  @PrimaryColumn({ name: 'work_zone_code' })
  @ManyToOne(() => ZoneMaster)
  @JoinColumn({ name: 'work_zone_code', referencedColumnName: 'work_zone_code' })
  work_zone_code: string;

  @Field(() => VehicleType, { description: 'Foreign key referencing Vehicle_Type.' })
  @PrimaryColumn({ name: 'vehicle_type_id' })
  @ManyToOne(() => VehicleType)
  @JoinColumn({ name: 'vehicle_type_id', referencedColumnName: 'vehicle_type_id' })
  vehicle_type_id: string;

  @Field(() => Number, { description: 'Maximum devices allowed of this vehicle type in the zone.' })
  @Column({ name: 'max_devices', type: 'int', nullable: true })
  max_devices: number;

  @Field(() => Number, { description: 'Version number of the record.' })
  @Column({ name: 'version_number', type: 'int', nullable: true })
  version_number: number;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insert_date', type: 'timestamp', nullable: true })
  insert_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp', nullable: true })
  last_update_date: Date;

  @Field(() => UserMaster, { description: 'User who inserted the record.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'insert_user_id', referencedColumnName: 'user_id' })
  insert_user_id: string;

  @Field(() => UserMaster, { description: 'User who last updated the record.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'last_update_user_id', referencedColumnName: 'user_id' })
  last_update_user_id: string;
} 