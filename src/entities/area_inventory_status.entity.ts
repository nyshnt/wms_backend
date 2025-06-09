import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { AreaMasterPickface } from './area_master_pickface.entity';
import { InventoryStatusMaster } from './inventory_status_master.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('AreaInventoryStatus')
@Entity('area_inventory_status')
export class AreaInventoryStatus {
  @Field(() => AreaMasterPickface, { description: 'Foreign key referencing Area_Master_Pickface.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => AreaMasterPickface)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => AreaMasterPickface, { description: 'Foreign key referencing Area_Master_Pickface.' })
  @PrimaryColumn({ name: 'area_code' })
  @ManyToOne(() => AreaMasterPickface)
  @JoinColumn({ name: 'area_code', referencedColumnName: 'area_code' })
  area_code: string;

  @Field(() => InventoryStatusMaster, { description: 'Foreign key referencing Inventory_Status_Master.' })
  @PrimaryColumn({ name: 'inventory_status_code' })
  @ManyToOne(() => InventoryStatusMaster)
  @JoinColumn({ name: 'inventory_status_code', referencedColumnName: 'inventory_status_code' })
  inventory_status_code: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insert_date', type: 'timestamp', nullable: true })
  insert_date: Date;

  @Field(() => UserMaster, { description: 'User who inserted the record.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'insert_user_id', referencedColumnName: 'user_id' })
  insert_user_id: string;

  @Field(() => Date, { description: 'Date of last modification.' })
  @Column({ name: 'modification_date', type: 'timestamp', nullable: true })
  modification_date: Date;

  @Field(() => UserMaster, { description: 'User who last modified the record.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'modification_user_id', referencedColumnName: 'user_id' })
  modification_user_id: string;
} 