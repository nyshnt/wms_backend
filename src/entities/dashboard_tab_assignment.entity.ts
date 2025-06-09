import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DashboardTabs } from './dashboard_tabs.entity';

@Entity('Dashboard_Tab_Assignment')
export class DashboardTabAssignment {
  @PrimaryColumn()
  auth_id: string;

  @PrimaryColumn()
  auth_type: string;

  @PrimaryColumn()
  tab_id: string;

  @ManyToOne(() => DashboardTabs)
  @JoinColumn({ name: 'tab_id' })
  tab: DashboardTabs;

  @Column({ nullable: true })
  sort_sequence: number;
} 