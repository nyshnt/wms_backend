import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WorkflowApplication } from './workflow_application.entity';
import { WorkflowForm } from './workflow_form.entity';

@Entity('Grid_Definition')
export class GridDefinition {
  @PrimaryColumn()
  level_id: string;

  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  addon_id: string;

  @Column({ nullable: true })
  customer_level: string;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'parent_level_id' })
  parentLevel: GridDefinition;

  @Column({ nullable: true })
  grid_variable_name: string;

  @Column({ nullable: true })
  grid_command: string;

  @Column({ nullable: true })
  parent_column: string;

  @Column({ nullable: true })
  child_column: string;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  grid_menu_name: string;

  @Column({ nullable: true })
  group_name: string;

  @ManyToOne(() => WorkflowApplication)
  @JoinColumn({ name: 'application_id' })
  application: WorkflowApplication;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'form_id' })
  form: WorkflowForm;
} 