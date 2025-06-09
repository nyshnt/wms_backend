import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { VariableConfiguration } from './variable_configuration.entity';

@Entity('Variable_Definition')
export class VariableDefinition {
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
  enabled_flag: boolean;

  @Column({ nullable: true })
  constant_flag: boolean;

  @Column({ nullable: true })
  char_value: string;

  @Column({ nullable: true })
  integer_value: number;

  @Column({ nullable: true })
  float_value: number;

  @Column({ type: 'date', nullable: true })
  date_value: Date;

  @Column({ nullable: true })
  default_command: string;

  @Column({ nullable: true })
  group_name: string;
} 