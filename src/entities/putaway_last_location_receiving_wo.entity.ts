import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { AreaMaster } from './area_master.entity';
import { LocationMaster } from './location_master.entity';
import { PartMaster } from './part_master.entity';
import { ClientMaster } from './client_master.entity';

@ObjectType('PutawayLastLocationReceivingWO')
@Entity('putaway_last_location_receiving_wo')
export class PutawayLastLocationReceivingWO {
  @Field(() => Warehouse, { description: 'Warehouse identifier.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => AreaMaster, { description: 'Area code.' })
  @PrimaryColumn({ name: 'area_code' })
  @ManyToOne(() => AreaMaster)
  @JoinColumn({ name: 'area_code', referencedColumnName: 'area_code' })
  area_code: string;

  @Field(() => LocationMaster, { description: 'Stock location.' })
  @PrimaryColumn({ name: 'stock_location' })
  @ManyToOne(() => LocationMaster)
  @JoinColumn({ name: 'stock_location', referencedColumnName: 'stock_location' })
  stock_location: string;

  @Field(() => PartMaster, { description: 'Part number.' })
  @PrimaryColumn({ name: 'part_number' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: string;

  @Field(() => ClientMaster, { description: 'Client ID for the part.' })
  @PrimaryColumn({ name: 'part_client_id' })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'client_id' })
  part_client_id: string;
} 