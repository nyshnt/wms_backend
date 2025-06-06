import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ReplenishmentWork')
@Entity('replenishment_work')
export class ReplenishmentWork {
  @Field(() => String, { description: 'Unique identifier for the replenishment work.' })
  @PrimaryColumn({ name: 'replenishment_reference' })
  replenishment_reference: string;

  @Field(() => Number, { description: 'Quantity picked.' })
  @Column({ name: 'picked_quantity', type: 'int' })
  picked_quantity: number;

  @Field(() => String, { description: 'Part number.' })
  @Column({ name: 'part_number', type: 'varchar' })
  part_number: string;

  @Field(() => String, { description: 'Part client ID.' })
  @Column({ name: 'part_client_id', type: 'varchar' })
  part_client_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @Column({ name: 'warehouse_id', type: 'varchar' })
  warehouse_id: string;

  @Field(() => String, { description: 'Origin code.' })
  @Column({ name: 'origin_code', type: 'varchar' })
  origin_code: string;

  @Field(() => String, { description: 'Revision level.' })
  @Column({ name: 'revision_level', type: 'varchar' })
  revision_level: string;

  @Field(() => String, { description: 'Lot number.' })
  @Column({ name: 'lot_number', type: 'varchar' })
  lot_number: string;
} 