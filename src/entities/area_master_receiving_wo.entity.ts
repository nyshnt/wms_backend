import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { InventoryStatusMaster } from './inventory_status_master.entity';

@ObjectType('AreaMasterReceivingWO')
@Entity('area_master_receiving_wo')
export class AreaMasterReceivingWO {
  @Field(() => String, { description: 'Unique area code.' })
  @PrimaryColumn({ name: 'area_code' })
  area_code: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Boolean, { description: 'Flag for non-FIFO/LIFO receiving without order.' })
  @Column({ name: 'receive_wo_non_fifo_lifo_flag', type: 'boolean', nullable: true })
  receive_wo_non_fifo_lifo_flag: boolean;

  @Field(() => InventoryStatusMaster, { description: 'Default inventory status for receiving.' })
  @ManyToOne(() => InventoryStatusMaster)
  @JoinColumn({ name: 'default_receive_inventory_status', referencedColumnName: 'inventory_status_code' })
  default_receive_inventory_status: string;
} 