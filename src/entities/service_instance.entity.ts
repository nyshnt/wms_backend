import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceRateMaster } from './service_rate_master.entity';
import { ConfirmService } from './confirm_service.entity';

@ObjectType('ServiceInstance')
@Entity('service_instance')
export class ServiceInstance {
  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Master.' })
  @PrimaryColumn({ name: 'service_id' })
  service_id: string;

  @Field(() => String, { description: 'Unique identifier for the service instance.' })
  @PrimaryGeneratedColumn('uuid', { name: 'service_instance_id' })
  service_instance_id: string;

  @Field(() => String, { description: 'Segment number.' })
  @Column({ name: 'segment_number', type: 'varchar', length: 255 })
  segment_number: string;

  @Field(() => String, { description: 'Type of service instance.' })
  @Column({ name: 'service_instance_type', type: 'varchar', length: 255 })
  service_instance_type: string;

  @Field(() => Boolean, { description: 'Stop service flag.' })
  @Column({ name: 'stop_service_flag', type: 'boolean' })
  stop_service_flag: boolean;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @Field(() => ServiceRateMaster, { description: 'Foreign key referencing Service_Rate_Master.' })
  @ManyToOne(() => ServiceRateMaster)
  @JoinColumn({ name: 'service_rate_id', referencedColumnName: 'service_rate_id' })
  service_rate: ServiceRateMaster;

  @Field(() => ConfirmService, { description: 'Foreign key referencing Confirm_Service.' })
  @ManyToOne(() => ConfirmService)
  @JoinColumn({ name: 'confirm_service_id', referencedColumnName: 'confirm_service_id' })
  confirm_service: ConfirmService;
}
