import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PartMasterReceivingTemplate } from './part_master_receiving_template.entity';
import { ReceivingLineItem } from './receiving_line_item.entity';
import { Warehouse } from './warehouse.entity';
import { ReceivingTruckTracking } from './receiving_truck_tracking.entity';

@ObjectType('InventoryDetailReceiving')
@Entity('inventory_detail_receiving')
export class InventoryDetailReceiving {
  @Field(() => String, { description: 'Unique identifier for inventory detail.' })
  @PrimaryColumn({ name: 'inventory_detail_number' })
  inventory_detail_number: string;

  @Field(() => String, { description: 'Part number.' })
  @Column({ name: 'part_number', nullable: true })
  @ManyToOne(() => PartMasterReceivingTemplate)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Client identifier for the part.' })
  @Column({ name: 'part_client_id', nullable: true })
  @ManyToOne(() => PartMasterReceivingTemplate)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'part_client_id' })
  part_client_id: string;

  @Field(() => String, { description: 'Receiving key.' })
  @Column({ name: 'receiving_key', nullable: true })
  @ManyToOne(() => ReceivingLineItem)
  @JoinColumn({ name: 'receiving_key' })
  receiving_key: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @Column({ name: 'warehouse_id', nullable: true })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Tracking number.' })
  @Column({ name: 'tracking_number', nullable: true })
  @ManyToOne(() => ReceivingTruckTracking)
  @JoinColumn({ name: 'tracking_number', referencedColumnName: 'tracking_number' })
  tracking_number: string;
} 