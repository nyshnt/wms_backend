import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType()
@Entity('order_type_rf_pick_validation')
export class OrderTypeRFPickValidation {
  @Field(() => String, { description: 'Unique order type code.' })
  @PrimaryColumn({ name: 'order_type_code' })
  order_type_code: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: Warehouse;

  @Field(() => Number, { description: 'Figure related to bulk picking.' })
  @Column({ name: 'bulk_pick_figure' })
  bulk_pick_figure: number;
} 