import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { TransportationMode } from './transportation_mode.entity';
import { WarehouseUnitOfMeasure } from './warehouse_unit_of_measure.entity';

@ObjectType('WarehouseTransportationMode')
@Entity('warehouse_transportation_mode')
export class WarehouseTransportationMode {
  @Field(() => TransportationMode, { description: 'Transportation mode.' })
  @PrimaryColumn({ name: 'transportation_mode' })
  @ManyToOne(() => TransportationMode)
  @JoinColumn({ name: 'transportation_mode', referencedColumnName: 'transportation_mode' })
  transportation_mode: TransportationMode;

  @Field(() => TransportationMode, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => TransportationMode)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: TransportationMode;

  @Field(() => Boolean, { description: 'Lock user flag.' })
  @Column({ name: 'lock_user_flag', type: 'boolean' })
  lock_user_flag: boolean;

  @Field(() => WarehouseUnitOfMeasure, { description: 'Unit of measure code.' })
  @ManyToOne(() => WarehouseUnitOfMeasure)
  @JoinColumn({ name: 'unit_of_measure_code', referencedColumnName: 'unit_of_measure_code' })
  unit_of_measure_code: WarehouseUnitOfMeasure;
}