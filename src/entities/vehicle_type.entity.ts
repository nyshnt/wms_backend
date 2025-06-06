import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('VehicleType')
@Entity('vehicle_type')
export class VehicleType {
  @Field(() => String, { description: 'Vehicle Type ID.' })
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
}
