import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { VariableConfiguration } from './variable_configuration.entity';
import { LookupConfiguration } from './lookup_configuration.entity';

@Entity('Variable_View_Properties')
export class VariableViewProperties {
  @PrimaryColumn()
  variable_name: string;

  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  addon_id: string;

  @PrimaryColumn()
  customer_level: string;

  @ManyToOne(() => VariableConfiguration)
  @JoinColumn([{ name: 'variable_name' }, { name: 'application_id' }, { name: 'form_id' }, { name: 'addon_id' }, { name: 'customer_level' }])
  variableConfiguration: VariableConfiguration;

  @ManyToOne(() => LookupConfiguration)
  @JoinColumn({ name: 'lookup_id' })
  lookupConfiguration: LookupConfiguration;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  code_column: string;

  @Column({ nullable: true })
  description_column: string;

  @Column({ nullable: true })
  add_null_flag: boolean;

  @Column({ nullable: true })
  display_single_flag: boolean;

  @Column({ nullable: true })
  edit_flag: boolean;

  @Column({ nullable: true })
  sort_column: string;

  @Column({ nullable: true })
  group_name: string;
} 