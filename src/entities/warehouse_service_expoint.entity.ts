import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('WarehouseServiceExpoint')
@Entity('warehouse_service_expoint')
export class WarehouseServiceExpoint {
  @Field(() => String, { description: 'Service ID.' })
  @PrimaryColumn({ name: 'service_id' })
  service_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Exit point type.' })
  @PrimaryColumn({ name: 'exitpoint_type' })
  exitpoint_type: string;

  @Field(() => String, { description: 'Exit point.' })
  @PrimaryColumn({ name: 'exitpoint' })
  exitpoint: string;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'date', nullable: true })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar', length: 255, nullable: true })
  modified_user_id: string;
} 