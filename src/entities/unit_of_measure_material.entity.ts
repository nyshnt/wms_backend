import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UnitOfMeasureMasterI18N } from './unit_of_measure_master_i18n.entity';

@Entity('Unit_Of_Measure_Material')
export class UnitOfMeasureMaterial {
  @PrimaryColumn()
  uom_category_id: string;

  @PrimaryColumn()
  unit_of_measure_code: string;

  @ManyToOne(() => UnitOfMeasureMasterI18N)
  @JoinColumn({ name: 'uom_category_id' })
  uomCategory: UnitOfMeasureMasterI18N;

  @Column({ nullable: true })
  conversion_factor_numerator: number;

  @Column({ nullable: true })
  conversion_factor_denominator: number;

  @Column({ nullable: true })
  display_precision: number;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  host_uom_code: string;

  @Column({ nullable: true })
  group_name: string;
} 