import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { StorageZoneConfigurationHeader } from './storage_zone_configuration_header.entity';

@ObjectType('StorageZoneConfigurationDetail')
@Entity('storage_zone_configuration_detail')
export class StorageZoneConfigurationDetail {
  @Field(() => String, { description: 'Name of the column.' })
  @PrimaryColumn({ name: 'column_name' })
  column_name: string;

  @Field(() => StorageZoneConfigurationHeader, { description: 'Storage zone configuration ID.' })
  @ManyToOne(() => StorageZoneConfigurationHeader)
  @JoinColumn({ name: 'storage_zone_configuration_id', referencedColumnName: 'storage_zone_configuration_id' })
  storage_zone_configuration_id: StorageZoneConfigurationHeader;

  @Field(() => String, { description: 'Value of the column.' })
  @Column({ name: 'column_value', type: 'varchar' })
  column_value: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insertion_date', type: 'timestamp' })
  insertion_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp' })
  last_update_date: Date;

  @Field(() => String, { description: 'User ID who inserted the record.' })
  @Column({ name: 'insertion_user_id', type: 'varchar' })
  insertion_user_id: string;

  @Field(() => String, { description: 'User ID who last updated the record.' })
  @Column({ name: 'last_update_user_id', type: 'varchar' })
  last_update_user_id: string;
} 