import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { RFVendorMaster } from './rf_vendor_master.entity';
import { DeviceMaster } from './device_master.entity';

@ObjectType('RFTerminalMaster')
@Entity('rf_terminal_master')
export class RFTerminalMaster {
  @Field(() => String, { description: 'Primary and Foreign key referencing RF_Vendor_Master.' })
  @PrimaryColumn({ name: 'RF_vendor_name' })
  RF_vendor_name: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Unique identifier for the terminal.' })
  @PrimaryColumn({ name: 'terminal_id' })
  terminal_id: string;

  @Field(() => String, { description: 'Foreign key referencing Device_Master.' })
  @Column({ name: 'device_code', type: 'varchar' })
  device_code: string;

  @ManyToOne(() => RFVendorMaster)
  @JoinColumn({ name: 'RF_vendor_name', referencedColumnName: 'RF_vendor_name' })
  rfVendorMaster: RFVendorMaster;

  @ManyToOne(() => DeviceMaster)
  @JoinColumn({ name: 'device_code', referencedColumnName: 'device_code' })
  deviceMaster: DeviceMaster;
} 