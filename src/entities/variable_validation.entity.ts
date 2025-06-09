import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { VariableConfiguration } from './variable_configuration.entity';

@Entity('Variable_Validation')
export class VariableValidation {
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

  @Column({ nullable: true })
  validation_command: string;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  validation_mode: string;

  @Column({ nullable: true })
  return_field_figure: string;

  @Column({ nullable: true })
  return_field: string;

  @Column({ nullable: true })
  group_name: string;
} 