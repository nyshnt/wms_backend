import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CountryMasterI18N } from './country_master_i18n.entity';

@Entity('State_Master_I18N')
export class StateMasterI18N {
  @PrimaryColumn()
  country_name: string;

  @PrimaryColumn()
  state_code: string;

  @ManyToOne(() => CountryMasterI18N)
  @JoinColumn({ name: 'country_name' })
  country: CountryMasterI18N;

  @Column({ nullable: true })
  group_name: string;
}
