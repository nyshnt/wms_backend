import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceInstance } from './service_instance.entity';

@ObjectType('ConfirmServiceBackground')
@Entity('Confirm_Service_Background')
export class ConfirmServiceBackground {
  @Field(() => String, { description: 'Primary and Foreign key referencing Service_Instance.' })
  @PrimaryColumn({ name: 'service_instance_id' })
  service_instance_id: string;

  @Field(() => String, { description: 'Command to execute after confirmation.' })
  @PrimaryColumn({ name: 'post_confirmation_value_command' })
  post_confirmation_value_command: string;

  @ManyToOne(() => ServiceInstance)
  @JoinColumn({ name: 'service_instance_id', referencedColumnName: 'service_instance_id' })
  serviceInstance: ServiceInstance;
} 