import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ClientMaster')
@Entity('client_master')
export class ClientMaster {
  @Field(() => String, { description: 'Unique identifier for the client.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Name of the client.' })
  @Column({ name: 'client_name', type: 'varchar' })
  client_name: string;

  @Field(() => String, { description: 'Address of the client.' })
  @Column({ name: 'client_address', type: 'varchar' })
  client_address: string;

  @Field(() => String, { description: 'Contact number of the client.' })
  @Column({ name: 'client_contact_number', type: 'varchar' })
  client_contact_number: string;
}
