import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { AreaMaster } from './area_master.entity';
import { WCSMaster } from './wcs_master.entity';

@ObjectType('WCSArea')
@Entity('wcs_area')
export class WCSArea {
  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Area code.' })
  @PrimaryColumn({ name: 'area_code' })
  @ManyToOne(() => AreaMaster)
  @JoinColumn({ name: 'area_code', referencedColumnName: 'area_code' })
  area_code: string;

  @Field(() => String, { description: 'WCS ID.' })
  @PrimaryColumn({ name: 'wcs_id' })
  @ManyToOne(() => WCSMaster)
  @JoinColumn({ name: 'wcs_id', referencedColumnName: 'wcs_id' })
  wcs_id: string;
} 