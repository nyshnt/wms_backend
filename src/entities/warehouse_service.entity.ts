import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceMaster } from './service_master.entity';
import { Warehouse } from './warehouse.entity';
import { ConfirmService } from './confirm_service.entity';
import { ServiceInstance } from './service_instance.entity';

@ObjectType('WarehouseService')
@Entity('wh_serv')
export class WarehouseService {
  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Master.' })
  @PrimaryColumn({ name: 'serv_id' })
  service_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Warehouse table.' })
  @PrimaryColumn({ name: 'wh_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Segment number.' })
  @Column({ name: 'segnum', type: 'varchar', length: 255 })
  segment_number: string;

  @Field(() => Boolean, { description: 'Flag indicating if parts are mixed.' })
  @Column({ name: 'mixed_prt_fig', type: 'boolean' })
  mixed_part_flag: boolean;

  @Field(() => String, { description: 'Special service code.' })
  @Column({ name: 'spec_serv_cod', type: 'varchar', length: 255 })
  special_service_code: string;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'moddte', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'mod_usr_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @Field(() => Boolean, { description: 'Service enabled flag.' })
  @Column({ name: 'serv_enafig', type: 'boolean' })
  service_enabled_flag: boolean;

  @Field(() => String, { description: 'Load level.' })
  @Column({ name: 'lodivl', type: 'varchar', length: 255 })
  load_level: string;

  @ManyToOne(() => ServiceMaster)
  @JoinColumn({ name: 'serv_id', referencedColumnName: 'service_id' })
  serviceMaster: ServiceMaster;

  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'wh_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  @ManyToOne(() => ConfirmService)
  @JoinColumn({ name: 'cnfrm_serv_id', referencedColumnName: 'confirm_service_id' })
  confirmService: ConfirmService;

  @ManyToOne(() => ServiceInstance)
  @JoinColumn({ name: 'serv_ins_id', referencedColumnName: 'service_instance_id' })
  serviceInstance: ServiceInstance;
} 