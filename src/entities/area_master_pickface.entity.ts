import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('AreaMasterPickface')
@Entity('area_master_pickface')
export class AreaMasterPickface {
  @Field(() => String, { description: 'Unique area code.' })
  @PrimaryColumn({ name: 'area_code' })
  area_code: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Boolean, { description: 'Flag for inventory status at error location.' })
  @Column({ name: 'error_location_inv_status_flag', type: 'boolean', nullable: true })
  error_location_inv_status_flag: boolean;
} 