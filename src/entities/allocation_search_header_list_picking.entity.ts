import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { AreaMaster } from './area_master.entity';
import { BuildingMaster } from './building_master.entity';

@ObjectType()
@Entity('allocation_search_header_list_picking')
export class AllocationSearchHeaderListPicking {
  @Field(() => String, { description: 'Unique ID for allocation search header.' })
  @PrimaryGeneratedColumn({ name: 'allocation_search_id' })
  allocation_search_id: string;

  @Field(() => AreaMaster, { description: 'Area code for search.' })
  @ManyToOne(() => AreaMaster)
  @JoinColumn({ name: 'area_code' })
  area_code: AreaMaster;

  @Field(() => AreaMaster, { description: 'Warehouse ID for search.' })
  @ManyToOne(() => AreaMaster)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse_id: AreaMaster;

  @Field(() => BuildingMaster, { description: 'Building ID for search.' })
  @ManyToOne(() => BuildingMaster)
  @JoinColumn({ name: 'building_id' })
  building_id: BuildingMaster;

  @Field(() => String, { description: 'Type of search path.' })
  @Column({ name: 'search_path_type' })
  search_path_type: string;

  @Field(() => Boolean, { description: 'Threshold flag.' })
  @Column({ name: 'threshold_flag' })
  threshold_flag: boolean;

  @Field(() => Boolean, { description: 'List pick flag for this search path.' })
  @Column({ name: 'list_pick_flag' })
  list_pick_flag: boolean;

  @Field(() => String, { description: 'Load division identifier.' })
  @Column({ name: 'load_division_id' })
  load_division_id: string;
} 