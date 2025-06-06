import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { WarehouseTransportationMode } from './warehouse_transportation_mode.entity';

@ObjectType('WarehouseTransportationModeUnitOfMeasure')
@Entity('warehouse_transportation_mode_unit_of_measure')
export class WarehouseTransportationModeUnitOfMeasure {
  @Field(() => WarehouseTransportationMode, { description: 'Transportation mode.' })
  @PrimaryColumn({ name: 'transportation_mode' })
  @ManyToOne(() => WarehouseTransportationMode)
  @JoinColumn({ name: 'transportation_mode', referencedColumnName: 'transportation_mode' })
  transportation_mode: WarehouseTransportationMode;

  @Field(() => WarehouseTransportationMode, { description: 'Unit of measure code.' })
  @PrimaryColumn({ name: 'unit_of_measure_code' })
  @ManyToOne(() => WarehouseTransportationMode)
  @JoinColumn({ name: 'unit_of_measure_code', referencedColumnName: 'unit_of_measure_code' })
  unit_of_measure_code: WarehouseTransportationMode;

  @Field(() => WarehouseTransportationMode, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => WarehouseTransportationMode)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: WarehouseTransportationMode;

  @Field(() => Boolean, { description: 'Flag for optimal dock.' })
  @Column({ name: 'optimal_dock_flag', type: 'boolean' })
  optimal_dock_flag: boolean;
} 