import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WorkflowApplication } from './workflow_application.entity';
import { WorkflowForm } from './workflow_form.entity';
import { MenuOption } from './menu_option.entity';
import { UserAuthentication } from './user_authentication.entity';

@Entity('Profile_Master')
export class ProfileMaster {
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
  disable_edit_flag: boolean;

  @Column({ nullable: true })
  default_profile_flag: boolean;

  @ManyToOne(() => MenuOption)
  @JoinColumn({ name: 'option_name' })
  option: MenuOption;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'user_id' })
  user: UserAuthentication;

  @Column({ nullable: true })
  group_name: string;
} 