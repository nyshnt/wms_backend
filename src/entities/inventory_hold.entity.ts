import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { HoldMaster } from './hold_master.entity';
import { InventoryDetail } from './inventory_detail.entity';

@ObjectType('InventoryHold')
@Entity('inventory_hold')
export class InventoryHold {
  @Field(() => HoldMaster, { description: 'Primary and Foreign key referencing Hold_Master.' })
  @PrimaryColumn({ name: 'hold_number' })
  @ManyToOne(() => HoldMaster)
  @JoinColumn({ name: 'hold_number', referencedColumnName: 'hold_number' })
  hold_number: HoldMaster;

  @Field(() => InventoryDetail, { description: 'Primary and Foreign key referencing Inventory_Detail.' })
  @PrimaryColumn({ name: 'inventory_detail_number' })
  @ManyToOne(() => InventoryDetail)
  @JoinColumn({ name: 'inventory_detail_number', referencedColumnName: 'inventory_detail_number' })
  inventory_detail: InventoryDetail;

  @Field(() => HoldMaster, { description: 'Primary and Foreign key referencing Hold_Master.' })
  @PrimaryColumn({ name: 'hold_prefix' })
  @ManyToOne(() => HoldMaster)
  @JoinColumn({ name: 'hold_prefix', referencedColumnName: 'hold_prefix' })
  hold_prefix: HoldMaster;

  @Field(() => HoldMaster, { description: 'Primary and Foreign key referencing Hold_Master.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => HoldMaster)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: HoldMaster;

  @Field(() => Date, { description: 'Date the hold was placed.' })
  @Column({ name: 'hold_date', type: 'date', nullable: true })
  hold_date: Date;

  @Field(() => String, { description: 'User ID who placed the hold.' })
  @Column({ name: 'hold_user_id', type: 'varchar', length: 255, nullable: true })
  hold_user_id: string;
} 