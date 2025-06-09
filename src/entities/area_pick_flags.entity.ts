import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { AreaMasterRFPickValidation } from './area_master_rf_pick_validation.entity';

@ObjectType()
@Entity('area_pick_flags')
export class AreaPickFlags {
  @Field(() => AreaMasterRFPickValidation, { description: 'FK to Area Master.' })
  @PrimaryColumn({ name: 'source_area_code' })
  @ManyToOne(() => AreaMasterRFPickValidation)
  @JoinColumn({ name: 'source_area_code' })
  source_area_code: AreaMasterRFPickValidation;

  @Field(() => String, { description: 'Load division ID.' })
  @PrimaryColumn({ name: 'load_division_id' })
  load_division_id: string;

  @Field(() => String, { description: 'Work type.' })
  @PrimaryColumn({ name: 'work_type' })
  work_type: string;

  @Field(() => AreaMasterRFPickValidation, { description: 'FK to Area Master.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => AreaMasterRFPickValidation)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse_id: AreaMasterRFPickValidation;

  @Field(() => Boolean, { description: 'Lot tracking flag.' })
  @Column({ name: 'lot_tracking_flag' })
  lot_tracking_flag: boolean;

  @Field(() => Boolean, { description: 'Super lot flag.' })
  @Column({ name: 'super_lot_flag' })
  super_lot_flag: boolean;

  @Field(() => Boolean, { description: 'Revision level flag.' })
  @Column({ name: 'revision_level_flag' })
  revision_level_flag: boolean;

  @Field(() => Boolean, { description: 'Origin code flag.' })
  @Column({ name: 'origin_code_flag' })
  origin_code_flag: boolean;

  @Field(() => Boolean, { description: 'Supplier flag.' })
  @Column({ name: 'supplier_flag' })
  supplier_flag: boolean;

  @Field(() => Boolean, { description: 'Date in flag.' })
  @Column({ name: 'date_in_flag' })
  date_in_flag: boolean;

  @Field(() => Boolean, { description: 'Sub-inventory flag.' })
  @Column({ name: 'sub_inventory_flag' })
  sub_inventory_flag: boolean;

  @Field(() => Boolean, { description: 'Load flag.' })
  @Column({ name: 'load_flag' })
  load_flag: boolean;

  @Field(() => Boolean, { description: 'Part flag.' })
  @Column({ name: 'part_flag' })
  part_flag: boolean;

  @Field(() => Boolean, { description: 'Location flag.' })
  @Column({ name: 'location_flag' })
  location_flag: boolean;

  @Field(() => Boolean, { description: 'Quantity flag.' })
  @Column({ name: 'quantity_flag' })
  quantity_flag: boolean;

  @Field(() => Boolean, { description: 'Catch weight quantity flag.' })
  @Column({ name: 'catch_weight_qty_flag' })
  catch_weight_qty_flag: boolean;

  @Field(() => Boolean, { description: 'Manufacture date flag.' })
  @Column({ name: 'manufacture_date_flag' })
  manufacture_date_flag: boolean;

  @Field(() => Boolean, { description: 'Expiration date flag.' })
  @Column({ name: 'expiration_date_flag' })
  expiration_date_flag: boolean;

  @Field(() => Boolean, { description: 'Return reason ID flag.' })
  @Column({ name: 'return_reason_id_flag' })
  return_reason_id_flag: boolean;

  @Field(() => String, { description: 'Modified user ID.' })
  @Column({ name: 'modified_user_id' })
  modified_user_id: string;

  @Field(() => Number, { description: 'Version number.' })
  @Column({ name: 'version_number' })
  version_number: number;
} 