import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { VehicleType } from './vehicle_type.entity';

@ObjectType('RFMaster')
@Entity('rf_master')
export class RFMaster {
  @Field(() => String, { description: 'Device code.' })
  @PrimaryColumn({ name: 'device_code' })
  device_code: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Foreign key referencing Vehicle_Type.' })
  @Column({ name: 'vehicle_type', type: 'varchar' })
  vehicle_type: string;

  @ManyToOne(() => VehicleType)
  @JoinColumn({ name: 'vehicle_type', referencedColumnName: 'vehicle_type_id' })
  vehicleType: VehicleType;
} 