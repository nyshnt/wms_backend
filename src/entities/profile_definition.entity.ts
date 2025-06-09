import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WorkflowApplication } from './workflow_application.entity';
import { WorkflowForm } from './workflow_form.entity';

@Entity('Profile_Definition')
export class ProfileDefinition {
  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  profile_name: string;

  @ManyToOne(() => WorkflowApplication)
  @JoinColumn({ name: 'application_id' })
  application: WorkflowApplication;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'form_id' })
  form: WorkflowForm;

  @Column({ nullable: true })
  profile_command: string;

  @Column({ nullable: true })
  group_name: string;
} 