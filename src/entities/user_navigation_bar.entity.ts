import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserAuthentication } from './user_authentication.entity';
import { MenuGroup } from './menu_group.entity';

@Entity('User_Navigation_Bar')
export class UserNavigationBar {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  navigation_bar_id: string;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'user_id' })
  userAuthentication: UserAuthentication;

  @Column({ nullable: true })
  navigation_bar_sequence: number;

  @Column({ nullable: true })
  group_name: string;

  @ManyToOne(() => MenuGroup)
  @JoinColumn({ name: 'menu_group_id' })
  menuGroup: MenuGroup;
} 