import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { WCSMaster } from './wcs_master.entity';

@ObjectType('WCSPickGroups')
@Entity('wcs_pick_groups')
export class WCSPickGroups {
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

  @Field(() => String, { description: 'Type of work associated with pick groups.' })
  @Column({ name: 'work_type' })
  work_type: string;

  @Field(() => String, { description: 'Pick group identifier or definition.' })
  @Column({ name: 'pick_groups', nullable: true })
  pick_groups: string;
} 