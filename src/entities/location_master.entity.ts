import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('LocationMaster')
@Entity('location_master')
export class LocationMaster {
  @Field(() => String, { description: 'Storage location.' })
  @PrimaryColumn({ name: 'storage_location' })
  storage_location: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;
}