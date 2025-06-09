import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserAuthentication } from './user_authentication.entity';
import { ApplicationAuthorizationRole } from './application_authorization_role.entity';

@Entity('User_Role')
export class UserRole {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  role_id: string;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'user_id' })
  userAuthentication: UserAuthentication;

  @ManyToOne(() => ApplicationAuthorizationRole)
  @JoinColumn({ name: 'role_id' })
  applicationAuthorizationRole: ApplicationAuthorizationRole;

  @Column({ nullable: true })
  ldap_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 