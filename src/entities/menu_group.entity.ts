import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('Menu_Group')
export class MenuGroup {
  @PrimaryGeneratedColumn()
  menu_group_id: string;

  @ManyToOne(() => MenuGroup)
  @JoinColumn({ name: 'parent_group_id' })
  parentGroup: MenuGroup;

  @Column({ nullable: true })
  menu_sequence: number;

  @Column({ nullable: true })
  button_image_id: string;

  @Column({ nullable: true })
  group_name: string;

  @Column()
  description: string;
} 