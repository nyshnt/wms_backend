import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('TransportationMode')
@Entity('transportation_mode')
export class TransportationMode {
  @Field(() => String, { description: 'Unique identifier for the transportation mode.' })
  @PrimaryColumn({ name: 'transportation_mode' })
  transportation_mode: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Boolean, { description: 'Flag for small packages.' })
  @Column({ name: 'small_package_flag', type: 'boolean' })
  small_package_flag: boolean;

  @Field(() => Boolean, { description: 'Direct flag.' })
  @Column({ name: 'direct_flag', type: 'boolean' })
  direct_flag: boolean;

  @Field(() => Boolean, { description: 'Pallet control flag.' })
  @Column({ name: 'pallet_control_flag', type: 'boolean' })
  pallet_control_flag: boolean;

  @Field(() => String, { description: 'Version number.' })
  @Column({ name: 'version_number', type: 'varchar' })
  version_number: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insertion_date', type: 'timestamp' })
  insertion_date: Date;
} 