import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('WarehouseMaster')
@Entity('warehouse_master')
export class WarehouseMaster {
  @Field(() => String, { description: 'Unique identifier for the warehouse.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;
} 