import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { WCSMaster } from './wcs_master.entity';

@ObjectType('WCSEventMap')
@Entity('wcs_event_map')
export class WCSEventMap {
  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'WCS ID.' })
  @PrimaryColumn({ name: 'wcs_id' })
  @ManyToOne(() => WCSMaster)
  @JoinColumn({ name: 'wcs_id', referencedColumnName: 'wcs_id' })
  wcs_id: string;

  @Field(() => String, { description: 'Type of WCS event.' })
  @PrimaryColumn({ name: 'event_type' })
  event_type: string;

  @Field(() => String, { description: 'Direction of the event (e.g., inbound/outbound).' })
  @PrimaryColumn({ name: 'direction' })
  direction: string;

  @Field(() => String, { description: 'Unique identifier for the event mapping.' })
  @PrimaryColumn({ name: 'event_id' })
  event_id: string;
} 