import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { ClientMaster } from './client_master.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType()
@Entity('order_header_rf_pick_validation')
export class OrderHeaderRFPickValidation {
  @Field(() => String, { description: 'Unique order number.' })
  @PrimaryColumn({ name: 'order_number' })
  order_number: string;

  @Field(() => ClientMaster, { description: 'Foreign key referencing Client_Master.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'client_id' })
  client_id: ClientMaster;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse_id: Warehouse;
} 