import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LocaleMaster } from './locale_master.entity';
import { CityPostalStateI18N } from './city_postal_state_i18n.entity';
import { CountryMasterI18N } from './country_master_i18n.entity';

@Entity('Address_Master_I18N')
export class AddressMasterI18N {
  @PrimaryColumn()
  locale_id: string;

  @PrimaryColumn()
  address_id: string;

  @ManyToOne(() => LocaleMaster)
  @JoinColumn({ name: 'locale_id' })
  locale: LocaleMaster;

  @Column({ nullable: true })
  client_id: string;

  @Column({ nullable: true })
  host_external_id: string;

  @Column({ nullable: true })
  address_name: string;

  @Column({ nullable: true })
  address_type: string;

  @Column({ nullable: true })
  address_line_1: string;

  @Column({ nullable: true })
  address_line_2: string;

  @Column({ nullable: true })
  address_line_3: string;

  @ManyToOne(() => CityPostalStateI18N)
  @JoinColumn({ name: 'city' })
  city: CityPostalStateI18N;

  @ManyToOne(() => CityPostalStateI18N)
  @JoinColumn({ name: 'state_code' })
  stateCode: CityPostalStateI18N;

  @ManyToOne(() => CityPostalStateI18N)
  @JoinColumn({ name: 'postal_code' })
  postalCode: CityPostalStateI18N;

  @ManyToOne(() => CountryMasterI18N)
  @JoinColumn({ name: 'country_name' })
  countryName: CountryMasterI18N;
} 