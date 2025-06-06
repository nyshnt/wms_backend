import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceMaster } from './service_master.entity';
import { Warehouse } from './warehouse.entity';
import { InventoryStatus } from './inventory_status.entity';

@ObjectType('WarehouseServiceInventoryStatus')
@Entity('Warehouse_Service_Inventory_Status')
export class WarehouseServiceInventoryStatus {
  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Master.' })
  @PrimaryColumn({ name: 'service_id' })
  service_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Warehouse table.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Inventory_Status.' })
  @PrimaryColumn({ name: 'inventory_status' })
  inventory_status: string;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @ManyToOne(() => ServiceMaster)
  @JoinColumn({ name: 'service_id', referencedColumnName: 'service_id' })
  serviceMaster: ServiceMaster;

  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  @ManyToOne(() => InventoryStatus)
  @JoinColumn({ name: 'inventory_status', referencedColumnName: 'inventory_status' })
  inventoryStatus: InventoryStatus;
} 