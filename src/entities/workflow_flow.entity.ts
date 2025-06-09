import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WorkflowApplication } from './workflow_application.entity';
import { WorkflowForm } from './workflow_form.entity';

@Entity('Workflow_Flow')
export class WorkflowFlow {
  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  customer_level: string;

  @PrimaryColumn()
  form_id: string;

  @ManyToOne(() => WorkflowApplication)
  @JoinColumn([{ name: 'application_id' }, { name: 'customer_level' }])
  workflowApplication: WorkflowApplication;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'form_id' })
  workflowForm: WorkflowForm;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'next_form_id' })
  nextForm: WorkflowForm;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'previous_form_id' })
  previousForm: WorkflowForm;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'home_form_id' })
  homeForm: WorkflowForm;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'form_id_command' })
  formIdCommand: WorkflowForm;

  @Column({ nullable: true })
  static_form_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 