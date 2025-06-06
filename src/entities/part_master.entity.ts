import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { SupplierMaster } from './supplier_master.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('PartMaster')
@Entity('part_master')
export class PartMaster {
  @Field(() => String, { description: 'Unique identifier for the part.' })
  @PrimaryColumn({ name: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Client ID for the part.' })
  @PrimaryColumn({ name: 'part_client_id' })
  part_client_id: string;

  @Field(() => String, { description: 'Generic string attribute 1.' })
  @Column({ name: 'attribute_string_1', type: 'varchar', length: 255, nullable: true })
  attribute_string_1: string;

  @Field(() => String, { description: 'Generic string attribute 10.' })
  @Column({ name: 'attribute_string_10', type: 'varchar', length: 255, nullable: true })
  attribute_string_10: string;

  @Field(() => Number, { description: 'Generic integer attribute 1.' })
  @Column({ name: 'attribute_integer_1', type: 'int', nullable: true })
  attribute_integer_1: number;

  @Field(() => Number, { description: 'Generic integer attribute 5.' })
  @Column({ name: 'attribute_integer_5', type: 'int', nullable: true })
  attribute_integer_5: number;

  @Field(() => Number, { description: 'Generic float attribute 1.' })
  @Column({ name: 'attribute_float_1', type: 'float', nullable: true })
  attribute_float_1: number;

  @Field(() => Number, { description: 'Generic float attribute 3.' })
  @Column({ name: 'attribute_float_3', type: 'float', nullable: true })
  attribute_float_3: number;

  @Field(() => Date, { description: 'Generic date attribute 1.' })
  @Column({ name: 'attribute_date_1', type: 'date', nullable: true })
  attribute_date_1: Date;

  @Field(() => Date, { description: 'Generic date attribute 2.' })
  @Column({ name: 'attribute_date_2', type: 'date', nullable: true })
  attribute_date_2: Date;

  @Field(() => String, { description: 'Additional part master column.' })
  @Column({ name: 'part_master_column_1', type: 'varchar', length: 255, nullable: true })
  part_master_column_1: string;

  @Field(() => String, { description: 'Display part number.' })
  @Column({ name: 'display_part_number', type: 'varchar', length: 255, nullable: true })
  display_part_number: string;

  @Field(() => String, { description: 'Alternate part type.' })
  @Column({ name: 'alternate_part_type', type: 'varchar', length: 255, nullable: true })
  alternate_part_type: string;

  @Field(() => SupplierMaster, { description: 'Foreign key referencing the SupplierMaster table.' })
  @ManyToOne(() => SupplierMaster)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplier_number: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;
}
