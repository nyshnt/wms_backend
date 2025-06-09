import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LocaleMaster } from './locale_master.entity';
import { UserAuthentication } from './user_authentication.entity';
import { CurrencyMasterI18N } from './currency_master_i18n.entity';

@Entity('Locale_Parameter')
export class LocaleParameter {
  @PrimaryColumn()
  locale_id: string;

  @PrimaryColumn()
  user_id: string;

  @ManyToOne(() => LocaleMaster)
  @JoinColumn({ name: 'locale_id' })
  locale: LocaleMaster;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'user_id' })
  user: UserAuthentication;

  @ManyToOne(() => CurrencyMasterI18N)
  @JoinColumn({ name: 'currency_code' })
  currency: CurrencyMasterI18N;

  @Column({ nullable: true })
  boolean_true_char: string;

  @Column({ nullable: true })
  boolean_false_char: string;

  @Column({ nullable: true })
  boolean_toggle_char: string;

  @Column({ nullable: true })
  positive_sign_char: string;

  @Column({ nullable: true })
  negative_sign_char: string;

  @Column({ nullable: true })
  positive_sign_position: string;

  @Column({ nullable: true })
  negative_sign_position: string;

  @Column({ nullable: true })
  decimal_point_char: string;

  @Column({ nullable: true })
  thousands_separator_char: string;

  @Column({ nullable: true })
  number_grouping_pattern: string;

  @Column({ nullable: true })
  date_format_code: string;

  @Column({ nullable: true })
  month_display_type: string;

  @Column({ nullable: true })
  date_separator_char: string;

  @Column({ nullable: true })
  time_format_code: string;

  @Column({ nullable: true })
  time_separator_char: string;

  @Column({ nullable: true })
  am_string: string;

  @Column({ nullable: true })
  pm_string: string;

  @Column({ nullable: true })
  group_name: string;
} 