import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('RFVendorMaster')
@Entity('rf_vendor_master')
export class RFVendorMaster {
  @Field(() => String, { description: 'Unique identifier for the RF vendor.' })
  @PrimaryColumn({ name: 'RF_vendor_name' })
  RF_vendor_name: string;
} 