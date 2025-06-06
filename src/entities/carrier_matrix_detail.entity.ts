import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { CarrierMatrixHeader } from './carrier_matrix_header.entity';

@ObjectType('CarrierMatrixDetail')
@Entity('carrier_matrix_detail')
export class CarrierMatrixDetail {
  @Field(() => CarrierMatrixHeader, { description: 'Carrier matrix ID.' })
  @PrimaryColumn({ name: 'carrier_matrix_id' })
  @ManyToOne(() => CarrierMatrixHeader)
  @JoinColumn({ name: 'carrier_matrix_id', referencedColumnName: 'carrier_matrix_id' })
  carrier_matrix_id: CarrierMatrixHeader;

  @Field(() => String, { description: 'Name of the column.' })
  @PrimaryColumn({ name: 'column_name' })
  column_name: string;

  @Field(() => String, { description: 'Value of the column.' })
  @Column({ name: 'column_value', type: 'varchar' })
  column_value: string;
} 