import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserNavigationBar } from './user_navigation_bar.entity';
import { MenuGroup } from './menu_group.entity';

@Entity('Navigation_Bar_Tab')
export class NavigationBarTab {
  @PrimaryColumn()
  navigation_bar_id: string;

  @PrimaryColumn()
  menu_group_id: string;

  @ManyToOne(() => UserNavigationBar)
  @JoinColumn({ name: 'navigation_bar_id' })
  userNavigationBar: UserNavigationBar;

  @ManyToOne(() => MenuGroup)
  @JoinColumn({ name: 'menu_group_id' })
  menuGroup: MenuGroup;

  @Column({ nullable: true })
  sort_sequence: number;

  @Column({ nullable: true })
  all_users_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 