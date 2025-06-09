import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { VariableConfiguration } from './variable_configuration.entity';
import { LookupConfiguration } from './lookup_configuration.entity';

@Entity('Variable_Lookup_Association')
export class VariableLookupAssociation {
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

  @PrimaryColumn()
  lookup_id: string;

  @ManyToOne(() => VariableConfiguration)
  @JoinColumn([{ name: 'variable_name' }, { name: 'application_id' }, { name: 'form_id' }, { name: 'addon_id' }, { name: 'customer_level' }])
  variableConfiguration: VariableConfiguration;

  @ManyToOne(() => LookupConfiguration)
  @JoinColumn({ name: 'lookup_id' })
  lookupConfiguration: LookupConfiguration;

  @Column({ nullable: true })
  sort_sequence: number;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  return_field: string;

  @Column({ nullable: true })
  input_field: string;

  @Column({ nullable: true })
  multi_select_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 