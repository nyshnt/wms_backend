import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { DeviceMaster } from './device_master.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('RFIDReader')
@Entity('rfid_reader')
export class RFIDReader {
  @Field(() => String, { description: 'Unique identifier for the RFID reader.' })
  @PrimaryColumn({ name: 'reader_id' })
  reader_id: string;

  @Field(() => String, { description: 'Group name for the reader.' })
  @Column({ name: 'group_name', type: 'varchar', length: 255, nullable: true })
  group_name: string;

  @Field(() => DeviceMaster, { description: 'Foreign key referencing Device_Master.' })
  @ManyToOne(() => DeviceMaster)
  @JoinColumn({ name: 'device_code', referencedColumnName: 'device_code' })
  device: DeviceMaster;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;
} 