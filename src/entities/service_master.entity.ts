import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceRateMaster } from './service_rate_master.entity';
import { WarehouseService } from './warehouse_service.entity';

@ObjectType('ServiceMaster')
@Entity('service_master')
export class ServiceMaster {
  // Old Column
  @Field(() => String, { description: 'Unique identifier for the service.' })
  @PrimaryGeneratedColumn('uuid', { name: 'service_id' })
  service_id: string;

  // New Column
  @Field(() => String, { description: 'Unique identifier for the service.' })
  @PrimaryGeneratedColumn('uuid', { name: 'service_id' })
  serv_id: string;

  // Old Column
  @Field(() => String, { description: 'Type of service.' })
  @Column({ name: 'service_type', type: 'varchar', length: 255 })
  service_type: string;

  // New Column
  @Field(() => String, { description: 'Type of service.' })
  @Column({ name: 'service_type', type: 'varchar', length: 255 })
  serv_typ: string;

  // Old Column
  @Field(() => String, { description: 'Activity code.' })
  @Column({ name: 'activity_code', type: 'varchar', length: 255 })
  activity_code: string;

  // New Column
  @Field(() => String, { description: 'Activity code.' })
  @Column({ name: 'activity_code', type: 'varchar', length: 255 })
  actcod: string;

  // Old Column
  @Field(() => String, { description: 'Image file associated with the service.' })
  @Column({ name: 'image_file', type: 'varchar', length: 255 })
  image_file: string;

  // New Column
  @Field(() => String, { description: 'Image file associated with the service.' })
  @Column({ name: 'image_file', type: 'varchar', length: 255 })
  imgfil: string;

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

  @Field(() => WarehouseService, { description: 'Foreign key referencing Warehouse_Service.' })
  @ManyToOne(() => WarehouseService)
  @JoinColumn({ name: 'warehouse_service_id', referencedColumnName: 'service_id' })
  warehouse_service: WarehouseService;

  @Field(() => Date, { description: 'Date of service master creation.' })
  @Column({ name: 'creation_date', type: 'timestamp' })
  creation_date: Date;

  @Field(() => String, { description: 'User ID who created the service master.' })
  @Column({ name: 'created_user_id', type: 'varchar', length: 255 })
  created_user_id: string;

  @Field(() => Boolean, { description: 'Active status of the service master.' })
  @Column({ name: 'active_status', type: 'boolean' })
  active_status: boolean;
}
