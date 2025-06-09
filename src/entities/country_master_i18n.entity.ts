import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Country_Master_I18N')
export class CountryMasterI18N {
  @PrimaryColumn()
  country_name: string;

  @Column({ nullable: true })
  iso_2_country_code: string;

  @Column({ nullable: true })
  iso_3_country_code: string;

  @Column({ nullable: true })
  iso_country_number: string;

  @Column({ nullable: true })
  address_format: string;

  @Column({ nullable: true })
  domestic_id_access_code: string;

  @Column({ nullable: true })
  international_access_code: string;

  @Column({ nullable: true })
  country_phone_code: string;

  @Column({ nullable: true })
  customs_country_name: string;

  @Column({ nullable: true })
  zip_code_length: number;

  @Column({ nullable: true })
  group_name: string;
}
