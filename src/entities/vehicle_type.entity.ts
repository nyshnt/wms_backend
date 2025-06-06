import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('VehicleType')
@Entity('vehicle_type')
export class VehicleType {
  @Field(() => String, { description: 'Unique identifier for the vehicle type.' })
  @PrimaryColumn({ name: 'vehicle_type_id' })
  vehicle_type_id: string;

  @Field(() => String, { description: 'Type of the vehicle.' })
  @Column({ name: 'vehicle_type', type: 'varchar', length: 255 })
  vehicle_type: string;

  @Field(() => String, { description: 'Name of the vehicle type.' })
  @Column({ name: 'vehicle_type_name', type: 'varchar', length: 255 })
  vehicle_type_name: string;

  @Field(() => String, { description: 'Description of the vehicle type.' })
  @Column({ name: 'vehicle_type_description', type: 'text', nullable: true })
  vehicle_type_description: string;

  @Field(() => String, { description: 'Voice code.' })
  @Column({ name: 'voice_code', type: 'varchar', length: 255 })
  voice_code: string;

  @Field(() => String, { description: 'Load limit for the vehicle.' })
  @Column({ name: 'vehicle_load_limit', type: 'varchar', length: 255 })
  vehicle_load_limit: string;
}
