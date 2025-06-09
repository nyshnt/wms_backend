import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LocaleMaster } from './locale_master.entity';
import { UnitOfMeasureDefinition } from './unit_of_measure_definition.entity';

@Entity('Unit_Of_Measure_Master_I18N')
export class UnitOfMeasureMasterI18N {
  @PrimaryColumn()
  uom_category_id: string;

  @PrimaryColumn()
  locale_id: string;

  @ManyToOne(() => LocaleMaster)
  @JoinColumn({ name: 'locale_id' })
  locale: LocaleMaster;

  @ManyToOne(() => UnitOfMeasureDefinition)
  @JoinColumn({ name: 'master_uom_system_fk' })
  masterUomSystem: UnitOfMeasureDefinition;

  @Column({ nullable: true })
  uom_name: string;

  @Column({ nullable: true })
  uom_symbol: string;
}
