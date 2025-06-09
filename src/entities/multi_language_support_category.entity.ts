import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LocaleMaster } from './locale_master.entity';
import { WorkflowApplication } from './workflow_application.entity';
import { WorkflowForm } from './workflow_form.entity';

@Entity('Multi_Language_Support_Category')
export class MultiLanguageSupportCategory {
  @PrimaryColumn()
  mls_id: string;

  @PrimaryColumn()
  locale_id: string;

  @PrimaryColumn()
  product_id: string;

  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  variation_number: number;

  @PrimaryColumn()
  sort_sequence: number;

  @PrimaryColumn()
  customer_level: string;

  @ManyToOne(() => LocaleMaster)
  @JoinColumn({ name: 'locale_id' })
  localeMaster: LocaleMaster;

  @ManyToOne(() => WorkflowApplication)
  @JoinColumn({ name: 'application_id' })
  workflowApplication: WorkflowApplication;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'form_id' })
  workflowForm: WorkflowForm;

  @Column({ nullable: true })
  mls_text: string;

  @Column({ nullable: true })
  group_name: string;
} 