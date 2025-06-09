import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CountryMasterI18N } from './country_master_i18n.entity';
import { StateMasterI18N } from './state_master_i18n.entity';

@Entity('City_Postal_State_I18N')
export class CityPostalStateI18N {
  @PrimaryColumn()
  country_name: string;

  @PrimaryColumn()
  state_code: string;

  @PrimaryColumn()
  city: string;

  @PrimaryColumn()
  postal_code: string;

  @ManyToOne(() => CountryMasterI18N)
  @JoinColumn({ name: 'country_name', referencedColumnName: 'country_name' })
  country: CountryMasterI18N;

  @ManyToOne(() => StateMasterI18N)
  @JoinColumn({ name: 'state_code', referencedColumnName: 'state_code' })
  state: StateMasterI18N;

  @Column({ nullable: true })
  customer_level: string;

  @Column({ nullable: true })
  latitude: number;

  @Column({ nullable: true })
  longitude: number;

  @Column({ nullable: true })
  invalid_flag: boolean;

  @Column({ nullable: true, type: 'timestamp' })
  invalid_date: Date;

  @Column({ nullable: true })
  gmt_offset: number;

  @Column({ nullable: true })
  dst_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
}
