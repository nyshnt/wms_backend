import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserAuthentication } from './user_authentication.entity';
import { MenuOption } from './menu_option.entity';

@Entity('User_Favorite')
export class UserFavorite {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  option_name: string;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'user_id' })
  userAuthentication: UserAuthentication;

  @ManyToOne(() => MenuOption)
  @JoinColumn({ name: 'option_name' })
  menuOption: MenuOption;

  @Column({ nullable: true })
  menu_sequence: number;

  @Column({ nullable: true })
  group_name: string;
} 