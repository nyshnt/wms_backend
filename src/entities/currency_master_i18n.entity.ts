import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Currency_Master_I18N')
export class CurrencyMasterI18N {
  @PrimaryColumn()
  currency_code: string; // Unique currency code (e.g., USD).

  @Column({ nullable: true })
  decimal_places: number; // Number of decimal places.

  @Column({ nullable: true })
  thousands_separator: string; // Thousands separator character.

  @Column({ nullable: true })
  grouping_length: number; // Grouping length for numbers.

  @Column({ nullable: true })
  currency_symbol: string; // Currency symbol (e.g., $).

  @Column({ nullable: true })
  positive_format: string; // Format for positive currency values.

  @Column({ nullable: true })
  negative_format: string; // Format for negative currency values.

  @Column({ nullable: true })
  fractional_digits: number; // Number of fractional digits.

  @Column({ nullable: true })
  enabled_flag: boolean; // Enabled flag.

  @Column({ nullable: true })
  group_name: string; // Group name.
}
