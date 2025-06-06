import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('CarrierMatrixHeader')
@Entity('carrier_matrix_header')
export class CarrierMatrixHeader {
  @Field(() => String, { description: 'Unique identifier for the carrier matrix header.' })
  @PrimaryColumn({ name: 'carrier_matrix_id' })
  carrier_matrix_id: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => Number, { description: 'Sequence number.' })
  @Column({ name: 'sequence_number', type: 'int' })
  sequence_number: number;

  @Field(() => String, { description: 'Carrier code.' })
  @Column({ name: 'carrier_code', type: 'varchar' })
  carrier_code: string;

  @Field(() => String, { description: 'Service level.' })
  @Column({ name: 'service_level', type: 'varchar' })
  service_level: string;

  @Field(() => String, { description: 'Carrier group.' })
  @Column({ name: 'carrier_group', type: 'varchar' })
  carrier_group: string;
} 