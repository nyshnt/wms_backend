import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WorkflowApplication } from './workflow_application.entity';
import { WorkflowForm } from './workflow_form.entity';

@Entity('Variable_Configuration')
export class VariableConfiguration {
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

  @ManyToOne(() => WorkflowApplication)
  @JoinColumn({ name: 'application_id' })
  workflowApplication: WorkflowApplication;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'form_id' })
  workflowForm: WorkflowForm;

  @Column({ nullable: true })
  visible_flag: boolean;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  field_type: string;

  @Column({ nullable: true })
  control_type: string;

  @Column({ nullable: true })
  context_flag: boolean;

  @Column({ nullable: true })
  display_width: number;

  @Column({ nullable: true })
  display_height: number;

  @Column({ type: 'json', nullable: true })
  control_properties: any;

  @Column({ nullable: true })
  group_name: string;
} 