import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UnitOfMeasureMasterI18N } from './unit_of_measure_master_i18n.entity';

@Entity('Unit_Of_Measure_Definition')
export class UnitOfMeasureDefinition {
  @PrimaryColumn()
  master_uom_system: string;

  @PrimaryColumn()
  master_uom_category_id: string;

  @ManyToOne(() => UnitOfMeasureMasterI18N)
  @JoinColumn({ name: 'master_uom_category_id' })
  masterUomCategory: UnitOfMeasureMasterI18N;
} 