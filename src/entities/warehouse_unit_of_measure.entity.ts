import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('WarehouseUnitOfMeasure')
@Entity('warehouse_unit_of_measure')
export class WarehouseUnitOfMeasure {
  @Field(() => String, { description: 'Name of the column.' })
  @PrimaryColumn({ name: 'column_name' })
  column_name: string;

  @Field(() => String, { description: 'Value of the code.' })
  @PrimaryColumn({ name: 'code_value' })
  code_value: string;

  @Field(() => String, { description: 'Unit of measure code.' })
  @PrimaryColumn({ name: 'unit_of_measure_code' })
  unit_of_measure_code: string;

  @Field(() => Boolean, { description: 'Default shipment release flag.' })
  @Column({ name: 'default_ship_release_flag', type: 'boolean', nullable: true })
  default_ship_release_flag: boolean;

  @Field(() => Boolean, { description: 'Default work release flag.' })
  @Column({ name: 'default_work_release_flag', type: 'boolean', nullable: true })
  default_work_release_flag: boolean;
} 