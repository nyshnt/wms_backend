import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { CustomerMaster } from './customer_master.entity';
import { ClientMaster } from './client_master.entity';
import { CarrierMaster } from './carrier_master.entity';

@ObjectType('ReturnHeader')
@Entity('return_header')
export class ReturnHeader {
  @Field(() => String, { description: 'Return Material Authorization number.' })
  @PrimaryColumn({ name: 'rma_number' })
  rma_number: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Customer number.' })
  @Column({ name: 'customer_number', nullable: true })
  @ManyToOne(() => CustomerMaster)
  @JoinColumn({ name: 'customer_number', referencedColumnName: 'customer_number' })
  customer_number: string;

  @Field(() => String, { description: 'Client ID.' })
  @Column({ name: 'client_id', nullable: true })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Type of return source.' })
  @Column({ name: 'return_source_type', nullable: true })
  return_source_type: string;

  @Field(() => String, { description: 'Carrier code.' })
  @Column({ name: 'carrier_code', nullable: true })
  @ManyToOne(() => CarrierMaster)
  @JoinColumn({ name: 'carrier_code', referencedColumnName: 'carrier_code' })
  carrier_code: string;
} 