import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApplicationAuthPermission } from './application_auth_permission.entity';
import { ApplicationAuthorizationRole } from './application_authorization_role.entity';
import { WorkflowApplication } from './workflow_application.entity';
import { WorkflowForm } from './workflow_form.entity';

@Entity('Permission_Control_Association')
export class PermissionControlAssociation {
  @PrimaryColumn()
  permission_id: string;

  @PrimaryColumn()
  role_id: string;

  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @ManyToOne(() => ApplicationAuthPermission)
  @JoinColumn({ name: 'permission_id' })
  applicationAuthPermission: ApplicationAuthPermission;

  @ManyToOne(() => ApplicationAuthorizationRole)
  @JoinColumn({ name: 'role_id' })
  applicationAuthorizationRole: ApplicationAuthorizationRole;

  @ManyToOne(() => WorkflowApplication)
  @JoinColumn({ name: 'application_id' })
  workflowApplication: WorkflowApplication;

  @ManyToOne(() => WorkflowForm)
  @JoinColumn({ name: 'form_id' })
  workflowForm: WorkflowForm;

  @Column({ nullable: true })
  control_id: string;

  @Column({ nullable: true })
  permission_mask: string;

  @Column({ nullable: true })
  hidden_flag: boolean;

  @Column({ nullable: true })
  web_control_type: string;
} 