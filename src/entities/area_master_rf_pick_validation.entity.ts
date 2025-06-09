import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType()
@Entity('area_master_rf_pick_validation')
export class AreaMasterRFPickValidation {
  @Field(() => String, { description: 'Unique area code.' })
  @PrimaryColumn({ name: 'area_code' })
  area_code: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: Warehouse;
} 