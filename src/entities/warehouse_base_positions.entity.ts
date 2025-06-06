import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('WarehouseBasePositions')
@Entity('warehouse_base_positions')
export class WarehouseBasePositions {
  @Field(() => String, { description: 'Unique identifier for the basepoint.' })
  @PrimaryColumn({ name: 'basepoint_id' })
  basepoint_id: string;

  @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  @Field(() => Number, { description: 'X coordinate from the warehouse base position.' })
  @Column({ name: 'x_coordinate_from_warehouse_baseposition', type: 'float', nullable: true })
  x_coordinate_from_warehouse_baseposition: number;

  @Field(() => Number, { description: 'Y coordinate from the warehouse base position.' })
  @Column({ name: 'y_coordinate_from_warehouse_baseposition', type: 'float', nullable: true })
  y_coordinate_from_warehouse_baseposition: number;
} 