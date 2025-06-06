import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ConfirmService } from './confirm_service.entity';

@ObjectType('WarehouseInventory')
@Entity('wh_inv')
export class WarehouseInventory {
  @Field(() => String, { description: 'Inventory ID.' })
  @PrimaryColumn({ name: 'inventory_ID' })
  inventory_ID: string;

  @Field(() => String, { description: 'Load level.' })
  @Column({ name: 'load_level', type: 'varchar', length: 255 })
  load_level: string;

  @Field(() => String, { description: 'Exit point type.' })
  @Column({ name: 'exitpoint_type', type: 'varchar', length: 255 })
  exitpoint_type: string;

  @Field(() => String, { description: 'Exit point.' })
  @Column({ name: 'exitpoint', type: 'varchar', length: 255 })
  exitpoint: string;

  @Field(() => String, { description: 'Service registration.' })
  @Column({ name: 'service_registration', type: 'varchar', length: 255 })
  service_registration: string;

  @Field(() => Date, { description: 'Addition date.' })
  @Column({ name: 'addition_date', type: 'timestamp' })
  addition_date: Date;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @Field(() => String, { description: 'Foreign key referencing Confirm_Service.' })
  @Column({ name: 'confirm_service_id', type: 'varchar'})
  confirm_service_id: string;

  @Field(() => String, { description: 'Version.' })
  @Column({ name: 'version', type: 'varchar', length: 255 })
  version: string;

  @Field(() => String, { description: 'Detailed location.' })
  @Column({ name: 'detailed_location', type: 'varchar', length: 255 })
  detailed_location: string;

  @Field(() => String, { description: 'Service meter.' })
  @Column({ name: 'service_meter', type: 'varchar', length: 255 })
  service_meter: string;

  @Field(() => String, { description: 'User ID who inserted the record.' })
  @Column({ name: 'insertion_user_id', type: 'varchar', length: 255 })
  insertion_user_id: string;

  @Field(() => String, { description: 'Last update ID.' })
  @Column({ name: 'last_update_id', type: 'varchar', length: 255 })
  last_update_id: string;

  @ManyToOne(() => ConfirmService)
  @JoinColumn({ name: 'confirm_service_id', referencedColumnName: 'confirm_service_id' })
  confirmService: ConfirmService;
} 