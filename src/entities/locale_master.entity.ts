import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserMaster } from './user_master.entity';
import { CountryMasterI18N } from './country_master_i18n.entity';

@ObjectType('LocaleMaster')
@Entity('locale_master')
export class LocaleMaster {
  @Field(() => String, { description: 'Unique identifier for the locale.' })
  @PrimaryColumn({ name: 'locale_id' })
  locale_id: string;

  @Field(() => String, { description: 'Name of the locale.' })
  @Column({ name: 'locale_name', nullable: true })
  locale_name: string;

  @Field(() => String, { description: 'Description of the locale.' })
  @Column({ name: 'locale_description', nullable: true })
  locale_description: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insert_date', type: 'timestamp', nullable: true })
  insert_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp', nullable: true })
  last_update_date: Date;

  @Field(() => String, { description: 'User who inserted the record.' })
  @Column({ name: 'insert_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'insert_user_id', referencedColumnName: 'user_id' })
  insert_user_id: string;

  @Field(() => String, { description: 'User who last updated the record.' })
  @Column({ name: 'last_update_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'last_update_user_id', referencedColumnName: 'user_id' })
  last_update_user_id: string;

  @ManyToOne(() => CountryMasterI18N)
  @JoinColumn({ name: 'country_name' })
  country: CountryMasterI18N;

  @Column({ nullable: true })
  oracle_language_code: string;

  @Column({ nullable: true })
  oracle_territory_code: string;

  @Column({ nullable: true })
  oracle_nls_sort: string;

  @Column({ nullable: true })
  windows_client_lcid: string;

  @Column({ nullable: true })
  windows_server_lcid: string;

  @Column({ nullable: true })
  unix_server_locale_name: string;

  @Column({ nullable: true })
  rf_device_locale_name: string;

  @Column({ nullable: true })
  voice_language_code: string;

  @Column({ nullable: true })
  group_name: string;
}
