import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceMaster } from './service_master.entity';
import { ReportConfiguration } from './report_configuration.entity';

@ObjectType('ServiceAction')
@Entity('serv_action')
export class ServiceAction {
  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Master.' })
  @PrimaryColumn({ name: 'serv_id' })
  service_id: string;

  @Field(() => String, { description: 'Type of service action.' })
  @PrimaryColumn({ name: 'serv_action_typ' })
  service_action_type: string;

  @Field(() => String, { description: 'Code for the service action.' })
  @PrimaryColumn({ name: 'serv_action_cod' })
  service_action_code: string;

  @Field(() => String, { description: 'Segment number.' })
  @PrimaryColumn({ name: 'segnum' })
  segment_number: string;

  @Field(() => String, { description: 'EMS event name.' })
  @Column({ name: 'ems_evt_nam', type: 'varchar', length: 255 })
  EMS_event_name: string;

  @Field(() => ReportConfiguration, { description: 'Foreign key referencing Report_Configuration.' })
  @ManyToOne(() => ReportConfiguration)
  @JoinColumn({ name: 'rpt_id', referencedColumnName: 'report_id' })
  report: ReportConfiguration;

  @Field(() => String, { description: 'Service level.' })
  @Column({ name: 'srvivl', type: 'varchar', length: 255 })
  service_level: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'ins_dt', type: 'timestamp' })
  insertion_date: Date;

  @Field(() => String, { description: 'User ID who inserted the record.' })
  @Column({ name: 'ins_user_id', type: 'varchar', length: 255 })
  insertion_user_id: string;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_upd_dt', type: 'timestamp' })
  last_update_date: Date;

  @Field(() => String, { description: 'User ID who last updated the record.' })
  @Column({ name: 'last_upd_user_id', type: 'varchar', length: 255 })
  last_update_user_id: string;

  @ManyToOne(() => ServiceMaster)
  @JoinColumn({ name: 'serv_id', referencedColumnName: 'service_id' })
  serviceMaster: ServiceMaster;
} 