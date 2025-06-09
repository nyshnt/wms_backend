import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MenuOption } from './menu_option.entity';
import { ApplicationAuthRole } from './application_auth_role.entity';
import { UserAuthentication } from './user_authentication.entity';

@Entity('Option_Authorization')
export class OptionAuthorization {
  @PrimaryColumn()
  option_name: string;

  @PrimaryColumn()
  auth_type: string;

  @PrimaryColumn()
  auth_id: string;

  @ManyToOne(() => MenuOption)
  @JoinColumn({ name: 'option_name' })
  menuOption: MenuOption;

  @Column({ nullable: true })
  permission_mask: string;

  @Column({ nullable: true })
  group_name_option: string;

  @ManyToOne(() => ApplicationAuthRole)
  @JoinColumn({ name: 'role_id' })
  applicationAuthRole: ApplicationAuthRole;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'user_id' })
  userAuthentication: UserAuthentication;
} 