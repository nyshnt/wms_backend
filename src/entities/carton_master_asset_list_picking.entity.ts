import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType()
@Entity('carton_master_asset_list_picking')
export class CartonMasterAssetListPicking {
  @Field(() => String, { description: 'Unique carton code.' })
  @PrimaryColumn({ name: 'carton_code' })
  carton_code: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: Warehouse;

  @Field(() => Number, { description: 'Carton length.' })
  @Column({ name: 'carton_length' })
  carton_length: number;

  @Field(() => Number, { description: 'Carton width.' })
  @Column({ name: 'carton_width' })
  carton_width: number;

  @Field(() => Number, { description: 'Carton height.' })
  @Column({ name: 'carton_height' })
  carton_height: number;

  @Field(() => Number, { description: 'Carton weight.' })
  @Column({ name: 'carton_weight' })
  carton_weight: number;

  @Field(() => Number, { description: 'Carton volume (weight/length/master?).' })
  @Column({ name: 'carton_volume' })
  carton_volume: number;

  @Field(() => String, { description: 'Carton footprint code.' })
  @Column({ name: 'carton_footprint_code' })
  carton_footprint_code: string;

  @Field(() => String, { description: 'Last carton footprint code.' })
  @Column({ name: 'last_carton_footprint_code' })
  last_carton_footprint_code: string;

  @Field(() => Boolean, { description: 'Pick order flag.' })
  @Column({ name: 'pick_order_flag' })
  pick_order_flag: boolean;

  @Field(() => Boolean, { description: 'Pre-print label flag.' })
  @Column({ name: 'pre_print_label_flag' })
  pre_print_label_flag: boolean;

  @Field(() => Boolean, { description: 'Ship overflow flag.' })
  @Column({ name: 'ship_overflow_flag' })
  ship_overflow_flag: boolean;
} 