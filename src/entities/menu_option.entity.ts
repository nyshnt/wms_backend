import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WorkflowApplication } from './workflow_application.entity';

@Entity('Menu_Option')
export class MenuOption {
  @PrimaryGeneratedColumn()
  option_name: string;

  @Column()
  option_type: string;

  @Column()
  permission_mask: string;

  @Column()
  enabled_flag: boolean;

  @Column()
  executable_name: string;

  @Column()
  executable_parameter: string;

  @Column()
  button_image_id: string;

  @Column()
  auth_group_name: string;

  @Column()
  addon_id: string;

  @Column()
  group_name_option: string;

  @ManyToOne(() => WorkflowApplication)
  @JoinColumn({ name: 'application_id' })
  application: WorkflowApplication;

  @Column()
  customer_level: string;
} 