import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceInstance } from './service_instance.entity';
import { ServiceAction } from './service_action.entity';
import { UserMaster } from './user_master.entity';
import { HoldMaster } from './hold_master.entity';
import { ConfirmService } from './confirm_service.entity';
import { Warehouse } from './warehouse.entity';
import { ShipmentHeader } from './shipment_header.entity';

@ObjectType('ServiceInstanceAction')
@Entity('serv_ins_action')
export class ServiceInstanceAction {
  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Instance.' })
  @PrimaryColumn({ name: 'serv_id' })
  service_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Instance.' })
  @PrimaryColumn({ name: 'serv_ins_id' })
  service_instance_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Action.' })
  @PrimaryColumn({ name: 'serv_action_typ' })
  service_action_type: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Action.' })
  @PrimaryColumn({ name: 'serv_action_cod' })
  service_action_code: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Action.' })
  @PrimaryColumn({ name: 'segnum' })
  segment_number: string;

  @Field(() => String, { description: 'Form ID.' })
  @Column({ name: 'frm_id', type: 'varchar', length: 255 })
  form_id: string;

  @Field(() => String, { description: 'GUI form ID.' })
  @Column({ name: 'gui_frm_id', type: 'varchar', length: 255 })
  GUI_form_id: string;

  @Field(() => String, { description: 'Confirm value variable name.' })
  @Column({ name: 'cnfrm_val_var_nam', type: 'varchar', length: 255 })
  confirm_value_variable_name: string;

  @Field(() => UserMaster, { description: 'Foreign key referencing User_Master.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'usr_id', referencedColumnName: 'user_id' })
  user: UserMaster;

  @Field(() => String, { description: 'Version number.' })
  @Column({ name: 'u_version', type: 'varchar', length: 255 })
  version_number: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'ins_dt', type: 'timestamp' })
  insertion_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_upd_dt', type: 'timestamp' })
  last_update_date: Date;

  @Field(() => String, { description: 'User ID who inserted the record.' })
  @Column({ name: 'ins_user_id', type: 'varchar', length: 255 })
  insertion_user_id: string;

  @Field(() => String, { description: 'User ID who last updated the record.' })
  @Column({ name: 'last_upd_user_id', type: 'varchar', length: 255 })
  last_update_user_id: string;

  @Field(() => HoldMaster, { description: 'Foreign key referencing Hold_Master.' })
  @ManyToOne(() => HoldMaster)
  @JoinColumn({ name: 'hidnum', referencedColumnName: 'hold_number' })
  hold: HoldMaster;

  @Field(() => String, { description: 'Hold code.' })
  @Column({ name: 'hidcod', type: 'varchar', length: 255 })
  hold_code: string;

  @Field(() => String, { description: 'Hold point.' })
  @Column({ name: 'hidpt', type: 'varchar', length: 255 })
  hold_point: string;

  @Field(() => String, { description: 'Reason code.' })
  @Column({ name: 'reacod', type: 'varchar', length: 255 })
  reason_code: string;

  @Field(() => ConfirmService, { description: 'Foreign key referencing Confirm_Service.' })
  @ManyToOne(() => ConfirmService)
  @JoinColumn({ name: 'cnfrm_serv_id', referencedColumnName: 'confirm_service_id' })
  confirmService: ConfirmService;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'wh_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  @Field(() => String, { description: 'Sort sequence.' })
  @Column({ name: 'srtseq', type: 'varchar', length: 255 })
  sort_sequence: string;

  @Field(() => ShipmentHeader, { description: 'Foreign key referencing Shipment_Header.' })
  @ManyToOne(() => ShipmentHeader)
  @JoinColumn({ name: 'ship_id', referencedColumnName: 'shipment_id' })
  shipment: ShipmentHeader;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'moddte', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'mod_usr_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @ManyToOne(() => ServiceInstance)
  @JoinColumn([{ name: 'serv_id', referencedColumnName: 'service_id' }, { name: 'serv_ins_id', referencedColumnName: 'service_instance_id' }])
  serviceInstance: ServiceInstance;

  @ManyToOne(() => ServiceAction)
  @JoinColumn([{ name: 'serv_action_typ', referencedColumnName: 'service_action_type' }, { name: 'serv_action_cod', referencedColumnName: 'service_action_code' }, { name: 'segnum', referencedColumnName: 'segment_number' }])
  serviceAction: ServiceAction;
} 