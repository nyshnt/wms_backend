import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { LocationMaster } from './location_master.entity';
import { WCSMaster } from './wcs_master.entity';

@ObjectType('WCSLocation')
@Entity('wcs_location')
export class WCSLocation {
  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Stock Location.' })
  @PrimaryColumn({ name: 'stock_location' })
  @ManyToOne(() => LocationMaster)
  @JoinColumn({ name: 'stock_location', referencedColumnName: 'location_id' })
  stock_location: string;

  @Field(() => String, { description: 'WCS ID.' })
  @PrimaryColumn({ name: 'wcs_id' })
  @ManyToOne(() => WCSMaster)
  @JoinColumn({ name: 'wcs_id', referencedColumnName: 'wcs_id' })
  wcs_id: string;
}