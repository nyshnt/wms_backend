import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
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
  load_number: string;
} 