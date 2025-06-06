import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('WarehouseServiceStorageLocation')
@Entity('Warehouse_Service_Storage_Location')
export class WarehouseServiceStorageLocation {
  @Field(() => String, { description: 'Service ID.' })
  @PrimaryColumn({ name: 'service_id' })
  service_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Exitpoint type.' })
  @PrimaryColumn({ name: 'exitpoint_type' })
  exitpoint_type: string;

  @Field(() => String, { description: 'Exitpoint.' })
  @PrimaryColumn({ name: 'exitpoint' })
  exitpoint: string;

  @Field(() => String, { description: 'Storage location.' })
  @PrimaryColumn({ name: 'storage_location' })
  storage_location: string;

  @Field(() => String, { description: 'Sequence number.' })
  @Column({ name: 'sequence_number', type: 'varchar' })
  sequence_number: string;
} 