import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('AddressMaster')
@Entity('address_master')
export class AddressMaster {
  @Field(() => String, { description: 'Address ID.' })
  @PrimaryColumn({ name: 'address_id' })
  address_id: string;

  @Field(() => String, { description: 'Street address.' })
  @Column({ name: 'street', type: 'varchar', length: 255 })
  street: string;

  @Field(() => String, { description: 'City name.' })
  @Column({ name: 'city', type: 'varchar', length: 255 })
  city: string;

  @Field(() => String, { description: 'State or province.' })
  @Column({ name: 'state', type: 'varchar', length: 255 })
  state: string;

  @Field(() => String, { description: 'Postal code.' })
  @Column({ name: 'postal_code', type: 'varchar', length: 20 })
  postal_code: string;

  @Field(() => String, { description: 'Country name.' })
  @Column({ name: 'country', type: 'varchar', length: 255 })
  country: string;
}
