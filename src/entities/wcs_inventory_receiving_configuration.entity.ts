import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { WCSMaster } from './wcs_master.entity';

@ObjectType('WCSInventoryReceivingConfiguration')
@Entity('wcs_inventory_receiving_configuration')
export class WCSInventoryReceivingConfiguration {
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

  @Field(() => String, { description: 'Field name for configuration.' })
  @PrimaryColumn({ name: 'field_name' })
  field_name: string;

  @Field(() => Number, { description: 'Sort sequence for the configuration.' })
  @Column({ name: 'sort_sequence', type: 'int', nullable: true })
  sort_sequence: number;
} 