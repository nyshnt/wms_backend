import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('WCSMaster')
@Entity('wcs_master')
export class WCSMaster {
  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Unique identifier for the WCS instance.' })
  @PrimaryColumn({ name: 'wcs_id' })
  wcs_id: string;

  @Field(() => String, { description: 'Identifier of the external WCS system.' })
  @Column({ name: 'system_id', nullable: true })
  system_id: string;
} 