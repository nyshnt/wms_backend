import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('WarehouseServiceExitpoint')
@Entity('wh_serv_exitpnt')
export class WarehouseServiceExitpoint {
  @Field(() => String, { description: 'Service ID.' })
  @PrimaryColumn({ name: 'service_id' })
  service_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Exitpoint type.' })
  @PrimaryColumn({ name: 'exitpoint_type' })
  exitpoint_type: string;

  @Field(() => String, { description: 'Exitpoint.' })
  @PrimaryColumn({ name: 'exitpoint' })
  exitpoint: string;
} 