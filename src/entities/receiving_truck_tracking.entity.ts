import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('ReceivingTruckTracking')
@Entity('receiving_truck_tracking')
export class ReceivingTruckTracking {
  @Field(() => String, { description: 'Unique tracking number for the truck.' })
  @PrimaryColumn({ name: 'tracking_number' })
  tracking_number: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;
}