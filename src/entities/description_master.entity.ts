import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { LocaleMaster } from './locale_master.entity';

@ObjectType('DescriptionMaster')
@Entity('description_master')
export class DescriptionMaster {
  @Field(() => String, { description: 'Name of the column being described.' })
  @PrimaryColumn({ name: 'column_name' })
  column_name: string;

  @Field(() => String, { description: 'Value of the column being described.' })
  @PrimaryColumn({ name: 'column_value' })
  column_value: string;

  @Field(() => String, { description: 'Foreign key to Locale_Master.' })
  @ManyToOne(() => LocaleMaster)
  @JoinColumn({ name: 'locale_id', referencedColumnName: 'locale_id' })
  locale_id: string;

  @Field(() => String, { description: 'Long description text.' })
  @Column({ name: 'long_description', type: 'text', nullable: true })
  long_description: string;

  @Field(() => String, { description: 'Short description text.' })
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