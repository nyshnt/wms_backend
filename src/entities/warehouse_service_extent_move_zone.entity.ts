import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { WarehouseServiceExpoint } from './warehouse_service_expoint.entity';

@ObjectType('WarehouseServiceExtentMoveZone')
@Entity('wh_serv_extent_mov_zone')
export class WarehouseServiceExtentMoveZone {
  @Field(() => String, { description: 'Primary and Foreign key referencing Warehouse_Service_Expoint.' })
  @PrimaryColumn({ name: 'serv_id' })
  service_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Warehouse_Service_Expoint.' })
  @PrimaryColumn({ name: 'wh_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Warehouse_Service_Expoint.' })
  @PrimaryColumn({ name: 'exitpnt_typ' })
  exitpoint_type: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Warehouse_Service_Expoint.' })
  @PrimaryColumn({ name: 'exitpnt' })
  exitpoint: string;

  @Field(() => String, { description: 'Source movement zone ID.' })
  @Column({ name: 'src_mov_zone_id', type: 'varchar', length: 255 })
  source_move_zone_id: string;

  @Field(() => String, { description: 'Destination movement zone ID.' })
  @Column({ name: 'dst_mov_zone_id', type: 'varchar', length: 255 })
  destination_move_zone_id: string;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'moddte', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'mod_usr_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @ManyToOne(() => WarehouseServiceExpoint)
  @JoinColumn([{ name: 'serv_id', referencedColumnName: 'service_id' }, { name: 'wh_id', referencedColumnName: 'warehouse_id' }, { name: 'exitpnt_typ', referencedColumnName: 'exitpoint_type' }, { name: 'exitpnt', referencedColumnName: 'exitpoint' }])
  warehouseServiceExpoint: WarehouseServiceExpoint;
} 