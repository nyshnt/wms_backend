import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { BuildingMaster } from './building_master.entity';

@ObjectType()
@Entity('area_master_list_picking')
export class AreaMasterListPicking {
  @Field(() => String, { description: 'Unique area code.' })
  @PrimaryColumn({ name: 'area_code' })
  area_code: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: Warehouse;

  @Field(() => BuildingMaster, { description: 'Foreign key referencing Building_Master.' })
  @ManyToOne(() => BuildingMaster)
  @JoinColumn({ name: 'building_id' })
  building: BuildingMaster;
} 