import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ServiceType')
@Entity('service_type')
export class ServiceType {
  @Field(() => String, { description: 'Service Type ID.' })
  @PrimaryColumn({ name: 'service_type_id' })
  service_type_id: string;

  @Field(() => String, { description: 'Name of the service type.' })
  @Column({ name: 'service_type_name', type: 'varchar', length: 255 })
  service_type_name: string;

  @Field(() => String, { description: 'Description of the service type.' })
  @Column({ name: 'service_type_description', type: 'text', nullable: true })
  service_type_description: string;
}
