import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('DeviceMaster')
@Entity('device_master')
export class DeviceMaster {
  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Unique identifier for the device.' })
  @PrimaryColumn({ name: 'device_code' })
  device_code: string;

  @Field(() => String, { description: 'Class of the device.' })
  @Column({ name: 'device_class', type: 'varchar', length: 255, nullable: true })
  device_class: string;

  @Field(() => String, { description: 'Name of the device.' })
  @Column({ name: 'device_name', type: 'varchar', length: 255, nullable: true })
  device_name: string;
} 