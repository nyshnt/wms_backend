import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { VariableConfiguration } from './variable_configuration.entity';
import { LocaleMaster } from './locale_master.entity';

@Entity('Variable_Input_Properties')
export class VariableInputProperties {
  @PrimaryColumn()
  variable_name: string;

  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  addon_id: string;

  @PrimaryColumn()
  locale_id: string;

  @PrimaryColumn()
  customer_level: string;

  @ManyToOne(() => VariableConfiguration)
  @JoinColumn([{ name: 'variable_name' }, { name: 'application_id' }, { name: 'form_id' }, { name: 'addon_id' }, { name: 'customer_level' }])
  variableConfiguration: VariableConfiguration;

  @ManyToOne(() => LocaleMaster)
  @JoinColumn({ name: 'locale_id' })
  localeMaster: LocaleMaster;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  min_length: number;

  @Column({ nullable: true })
  max_length: number;

  @Column({ nullable: true })
  input_mask: string;

  @Column({ nullable: true })
  display_mask_flag: boolean;

  @Column({ nullable: true })
  auto_mask_flag: boolean;

  @Column({ nullable: true })
  multi_line_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 