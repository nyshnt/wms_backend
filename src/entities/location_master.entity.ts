import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { AreaMaster } from './area_master.entity';

@ObjectType('LocationMaster')
@Entity('location_master')
export class LocationMaster {
  @Field(() => String, { description: 'Unique stock location identifier.' })
  @PrimaryColumn({ name: 'stock_location' })
  stock_location: string;

  @Field(() => String, { description: 'Storage location.' })
  @PrimaryColumn({ name: 'storage_location' })
  storage_location: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Foreign key referencing Area_Master.' })
  @Column({ name: 'area_code' })
  @ManyToOne(() => AreaMaster)
  @JoinColumn({ name: 'area_code', referencedColumnName: 'area_code' })
  area_code: string;
}