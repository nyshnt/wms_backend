import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { RFIDReader } from './rfid_reader.entity';
import { DeviceMaster } from './device_master.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('DeviceMasterReader')
@Entity('device_master_reader')
export class DeviceMasterReader {
  @Field(() => RFIDReader, { description: 'Primary and Foreign key referencing RFID_Reader.' })
  @PrimaryColumn({ name: 'reader_id' })
  @ManyToOne(() => RFIDReader)
  @JoinColumn({ name: 'reader_id', referencedColumnName: 'reader_id' })
  reader: RFIDReader;

  @Field(() => DeviceMaster, { description: 'Primary and Foreign key referencing Device_Master.' })
  @PrimaryColumn({ name: 'device_code' })
  @ManyToOne(() => DeviceMaster)
  @JoinColumn({ name: 'device_code', referencedColumnName: 'device_code' })
  device: DeviceMaster;

  @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;
} 