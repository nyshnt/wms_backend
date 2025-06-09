import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

@Entity('Dashboard_Tabs')
@Index(['tab_id'])
export class DashboardTabs {
  @PrimaryColumn()
  tab_id: string;

  @Column({ nullable: true })
  template_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 