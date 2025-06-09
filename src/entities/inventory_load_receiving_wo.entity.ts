import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { LocationMaster } from './location_master.entity';

@ObjectType('InventoryLoadReceivingWO')
@Entity('inventory_load_receiving_wo')
export class InventoryLoadReceivingWO {
  @Field(() => String, { description: 'Unique load number.' })
  @PrimaryColumn({ name: 'load_number' })
  load_number: string;

  @Field(() => LocationMaster, { description: 'Part of FK to Location_Master.' })
  @ManyToOne(() => LocationMaster)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => LocationMaster, { description: 'Part of FK to Location_Master.' })
  @ManyToOne(() => LocationMaster)
  @JoinColumn({ name: 'stock_location', referencedColumnName: 'stock_location' })
  stock_location: string;
} 