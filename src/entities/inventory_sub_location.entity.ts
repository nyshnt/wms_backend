import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { InventoryLoad } from './inventory_load.entity';

@ObjectType('InventorySubLocation')
@Entity('inventory_sub_location')
export class InventorySubLocation {
  @Field(() => String, { description: 'Unique identifier for the sub-location.' })
  @PrimaryColumn({ name: 'sub_number' })
  sub_number: string;

  @Field(() => InventoryLoad, { description: 'Foreign key referencing Inventory_Load.' })
  @ManyToOne(() => InventoryLoad)
  @JoinColumn({ name: 'load_number', referencedColumnName: 'load_number' })
  load_number: InventoryLoad;

  @Field(() => String, { description: 'Work reference.' })
  @Column({ name: 'work_reference', type: 'varchar', length: 255, nullable: true })
  work_reference: string;

  @Field(() => String, { description: 'Sub unit of cargo code.' })
  @Column({ name: 'sub_unit_of_cargo_code', type: 'varchar', length: 255, nullable: true })
  sub_unit_of_cargo_code: string;
} 