import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceRateMaster } from './service_rate_master.entity';

@ObjectType('ServiceRateSample')
@Entity('serv_rate_smpl')
export class ServiceRateSample {
  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Rate_Master.' })
  @PrimaryColumn({ name: 'serv_rate_id' })
  service_rate_id: string;

  @Field(() => Number, { description: 'Minimum quantity.' })
  @Column({ name: 'mingty', type: 'int' })
  minimum_quantity: number;

  @Field(() => Number, { description: 'Probable quantity.' })
  @Column({ name: 'prob_qty', type: 'int' })
  probable_quantity: number;

  @Field(() => Number, { description: 'Maximum probable quantity.' })
  @Column({ name: 'max_prob_qty', type: 'int' })
  maximum_probable_quantity: number;

  @Field(() => Date, { description: 'Date of modification.' })
  @Column({ name: 'moddte', type: 'timestamp' })
  modified_date: Date;

  @Field(() => String, { description: 'User ID who modified the record.' })
  @Column({ name: 'mod_usr_id', type: 'varchar', length: 255 })
  modified_user_id: string;

  @ManyToOne(() => ServiceRateMaster)
  @JoinColumn({ name: 'serv_rate_id', referencedColumnName: 'service_rate_id' })
  serviceRateMaster: ServiceRateMaster;
} 