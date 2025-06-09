import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DDAMaster } from './dda_master.entity';

@Entity('Workflow_Form')
export class WorkflowForm {
  @PrimaryGeneratedColumn()
  form_id: string;

  @Column()
  customer_level: string;

  @Column()
  description_id: string;

  @Column()
  form_program_id: string;

  @ManyToOne(() => DDAMaster)
  @JoinColumn({ name: 'dda_id' })
  ddaMaster: DDAMaster;

  @Column()
  toolbar_config_form_id: string;

  @Column()
  group_name: string;
} 