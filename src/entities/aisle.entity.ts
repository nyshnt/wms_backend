import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('Aisle')
@Entity('aisle')
export class Aisle {
  @Field(() => String, { description: 'Unique identifier for the aisle.' })
  @PrimaryColumn({ name: 'aisle_id' })
  aisle_id: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;
} 