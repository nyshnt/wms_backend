import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ServiceMasterInventory')
@Entity('sery_m_inv')
export class ServiceMasterInventory {
  @Field(() => String, { description: 'Service ID.' })
  @PrimaryColumn({ name: 'service_id' })
  service_id: string;

  @Field(() => String, { description: 'Service type.' })
  @Column({ name: 'service_type', type: 'varchar', length: 255 })
  service_type: string;

  @Field(() => String, { description: 'Activity code.' })
  @Column({ name: 'activity_code', type: 'varchar', length: 255 })
  activity_code: string;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'modified_date', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'modified_user_id', type: 'varchar', length: 255 })
  modified_user_id: string;
} 