import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { VariableConfiguration } from './variable_configuration.entity';

@Entity('Variable_Identifier_Type')
export class VariableIdentifierType {
  @PrimaryColumn()
  variable_name: string;

  @PrimaryColumn()
  identifier_type: string;

  @ManyToOne(() => VariableConfiguration)
  @JoinColumn({ name: 'variable_name' })
  variableConfiguration: VariableConfiguration;

  @Column({ nullable: true })
  field_identifier: string;

  @Column({ nullable: true })
  system_id_flag: boolean;

  @Column({ nullable: true })
  reference_flag: boolean;

  @Column({ nullable: true })
  work_key_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 