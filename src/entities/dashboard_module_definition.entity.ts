import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DDAMaster } from './dda_master.entity';
import { MenuOptionDashboard } from './menu_option_dashboard.entity';

@Entity('Dashboard_Module_Definition')
export class DashboardModuleDefinition {
  @PrimaryColumn()
  module_id: string;

  @Column({ nullable: true })
  module_type: string;

  @Column({ nullable: true })
  module_width: number;

  @Column({ nullable: true })
  module_height: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  refresh_seconds: number;

  @ManyToOne(() => DDAMaster)
  @JoinColumn({ name: 'dashboard_dda_id' })
  dashboardDDA: DDAMaster;

  @Column({ nullable: true })
  dda_qualifier: string;

  @ManyToOne(() => MenuOptionDashboard)
  @JoinColumn({ name: 'option_name' })
  option: MenuOptionDashboard;

  @Column({ nullable: true })
  webservice_wsdl_url: string;

  @Column({ nullable: true })
  webservice_service_name: string;

  @Column({ nullable: true })
  webservice_port_name: string;

  @Column({ nullable: true })
  webservice_wsml_content: string;

  @Column({ nullable: true })
  webservice_function_name: string;

  @Column({ nullable: true })
  custom_subscribe_handler: string;

  @Column({ nullable: true })
  custom_unsubscribe_handler: string;

  @Column({ nullable: true })
  moca_connection_string: string;

  @Column({ nullable: true })
  multi_instance_flag: boolean;

  @Column({ nullable: true })
  session_qualifiers: string;

  @Column({ nullable: true })
  group_name: string;
} 