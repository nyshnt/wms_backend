import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WorkflowForm } from './workflow_form.entity';

@Entity('Workflow_Application')
export class WorkflowApplication {
  @PrimaryGeneratedColumn()
  application_id: string;

  @Column()
  customer_level: string;

  @Column()
  description_id: string;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'start_form_id' })
  startForm: WorkflowForm;

  @Column()
  product_id: string;

  @Column()
  group_name: string;
} 