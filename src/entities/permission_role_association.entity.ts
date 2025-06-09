import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApplicationAuthPermission } from './application_auth_permission.entity';
import { ApplicationAuthorizationRole } from './application_authorization_role.entity';

@Entity('Permission_Role_Association')
export class PermissionRoleAssociation {
  @PrimaryColumn()
  permission_id: string;

  @PrimaryColumn()
  role_id: string;

  @ManyToOne(() => ApplicationAuthPermission)
  @JoinColumn({ name: 'permission_id' })
  applicationAuthPermission: ApplicationAuthPermission;

  @ManyToOne(() => ApplicationAuthorizationRole)
  @JoinColumn({ name: 'role_id' })
  applicationAuthorizationRole: ApplicationAuthorizationRole;

  @Column({ nullable: true })
  permission_mask: string;
} 