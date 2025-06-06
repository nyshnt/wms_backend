import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('DescriptionMaster')
@Entity('description_master')
export class DescriptionMaster {
  @Field(() => String, { description: 'Name of the column.' })
  @PrimaryColumn({ name: 'column_name' })
  column_name: string;

  @Field(() => String, { description: 'Value of the column.' })
  @PrimaryColumn({ name: 'column_value' })
  column_value: string;

  @Field(() => String, { description: 'Locale ID.' })
  @Column({ name: 'locale_id', type: 'varchar', length: 255, nullable: true })
  locale_id: string;

  @Field(() => String, { description: 'Long description.' })
  @Column({ name: 'long_description', type: 'text', nullable: true })
  long_description: string;

  @Field(() => String, { description: 'Short description.' })
  @Column({ name: 'short_description', type: 'varchar', length: 255, nullable: true })
  short_description: string;

  @Field(() => String, { description: 'Group name.' })
  @Column({ name: 'group_name', type: 'varchar', length: 255, nullable: true })
  group_name: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;
} 