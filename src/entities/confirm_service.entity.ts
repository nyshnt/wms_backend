import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceRateMaster } from './service_rate_master.entity';

@ObjectType('ConfirmService')
@Entity('confirm_service')
export class ConfirmService {
  @Field(() => String, { description: 'Unique identifier for the confirm service.' })
  @PrimaryGeneratedColumn('uuid', { name: 'confirm_service_id' })
  confirm_service_id: string;

  @Field(() => ServiceRateMaster, { description: 'Foreign key referencing Service_Rate_Master.' })
  @ManyToOne(() => ServiceRateMaster)
  @JoinColumn({ name: 'service_rate_id', referencedColumnName: 'service_rate_id' })
  service_rate: ServiceRateMaster;

  @Field(() => Date, { description: 'Date of confirmation.' })
  @Column({ name: 'confirmation_date', type: 'timestamp' })
  confirmation_date: Date;

  @Field(() => String, { description: 'User ID who confirmed the service.' })
  @Column({ name: 'confirmed_user_id', type: 'varchar', length: 255 })
  confirmed_user_id: string;

  @Field(() => Boolean, { description: 'Confirmation status flag.' })
  @Column({ name: 'confirmation_status', type: 'boolean' })
  confirmation_status: boolean;
}
