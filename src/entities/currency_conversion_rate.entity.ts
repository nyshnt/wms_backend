import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CurrencyMasterI18N } from './currency_master_i18n.entity';

@Entity('Currency_Conversion_Rate')
export class CurrencyConversionRate {
  @PrimaryColumn()
  currency_code: string;

  @PrimaryColumn({ type: 'date' })
  effective_date: Date;

  @ManyToOne(() => CurrencyMasterI18N)
  @JoinColumn({ name: 'currency_code' })
  currency: CurrencyMasterI18N;

  @Column({ type: 'decimal', nullable: true })
  conversion_rate: number;
} 