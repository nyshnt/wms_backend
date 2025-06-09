import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DashboardModuleDefinition } from './dashboard_module_definition.entity';
import { DashboardTabs } from './dashboard_tabs.entity';

@Entity('Dashboard_Tab_Module_Configuration')
export class DashboardTabModuleConfiguration {
  @PrimaryColumn()
  module_config_id: string;

  @ManyToOne(() => DashboardModuleDefinition)
  @JoinColumn({ name: 'module_id' })
  module: DashboardModuleDefinition;

  @ManyToOne(() => DashboardTabs)
  @JoinColumn({ name: 'tab_id' })
  tab: DashboardTabs;

  @Column({ nullable: true })
  sort_sequence: number;

  @Column({ nullable: true })
  dda_qualifier: string;

  @Column({ nullable: true })
  refresh_seconds: number;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'timestamp', nullable: true })
  control_date: Date;

  @Column({ nullable: true })
  group_name: string;
} 