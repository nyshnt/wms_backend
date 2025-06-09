import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WorkflowApplication } from './workflow_application.entity';
import { WorkflowForm } from './workflow_form.entity';
import { CommandConfiguration } from './command_configuration.entity';
import { UserAuthentication } from './user_authentication.entity';

@Entity('Dynamic_Configuration')
export class DynamicConfiguration {
  @PrimaryColumn()
  dynamic_config_id: string;

  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  addon_id: string;

  @PrimaryColumn()
  customer_level: string;

  @ManyToOne(() => WorkflowApplication)
  @JoinColumn({ name: 'application_id' })
  workflowApplication: WorkflowApplication;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'form_id' })
  workflowForm: WorkflowForm;

  @ManyToOne(() => CommandConfiguration)
  @JoinColumn({ name: 'command_id' })
  commandConfiguration: CommandConfiguration;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'modification_user_id' })
  modificationUser: UserAuthentication;

  @Column({ nullable: true })
  input_mode: string;

  @Column({ type: 'simple-array', nullable: true })
  variable_name_list: string[];

  @Column({ type: 'timestamp', nullable: true })
  modification_date: Date;

  @Column({ nullable: true })
  group_name: string;
} 