import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MenuGroup } from './menu_group.entity';
import { MenuOption } from './menu_option.entity';

@Entity('Menu_Item')
export class MenuItem {
  @PrimaryColumn()
  menu_group_id: string;

  @PrimaryColumn()
  menu_item_id: string;

  @ManyToOne(() => MenuGroup)
  @JoinColumn({ name: 'menu_group_id' })
  menuGroup: MenuGroup;

  @ManyToOne(() => MenuOption)
  @JoinColumn({ name: 'option_name' })
  menuOption: MenuOption;

  @Column({ nullable: true })
  menu_sequence: number;

  @Column({ nullable: true })
  group_name: string;
} 