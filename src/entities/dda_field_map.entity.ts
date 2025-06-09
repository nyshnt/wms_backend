import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DDAField } from './dda_field.entity';

@Entity('DDA_Field_Map')
export class DDAFieldMap {
  @PrimaryColumn()
  dda_id: string;

  @PrimaryColumn()
  customer_level: string;

  @PrimaryColumn()
  variable_name: string;

  @ManyToOne(() => DDAField)
  @JoinColumn({ name: 'dda_id' })
  dda: DDAField;

  @ManyToOne(() => DDAField)
  @JoinColumn({ name: 'customer_level' })
  customerLevel: DDAField;

  @ManyToOne(() => DDAField)
  @JoinColumn({ name: 'variable_name' })
  variable: DDAField;

  @Column({ nullable: true })
  link_variable_name: string;

  @Column({ nullable: true })
  map_variable_name: string;

  @Column({ nullable: true })
  group_name: string;
} 