import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Menu_Option_Dashboard')
export class MenuOptionDashboard {
  @PrimaryColumn()
  option_name: string;

  @Column({ nullable: true })
  option_type: string;

  @Column({ nullable: true })
  permission_mask: string;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  executable_name: string;

  @Column({ nullable: true })
  executable_parameter: string;

  @Column({ nullable: true })
  button_image_id: string;

  @Column({ nullable: true })
  auth_group_name: string;

  @Column({ nullable: true })
  addon_id: string;

  @Column({ nullable: true })
  group_name_option: string;
} 