import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('DDA_Master')
export class DDAMaster {
  @PrimaryColumn()
  dda_id: string;

  @PrimaryColumn()
  customer_level: string;

  @Column({ nullable: true })
  dda_type: string;

  @Column({ nullable: true })
  dda_usage: string;

  @Column({ nullable: true })
  top_flag: boolean;

  @Column({ nullable: true })
  dda_command: string;

  @Column({ nullable: true })
  dda_qualifier: string;

  @Column({ nullable: true })
  dda_initial_qualifier: string;

  @Column({ nullable: true })
  dda_form: string;

  @Column({ nullable: true })
  dda_image: string;

  @Column({ nullable: true })
  initial_command: string;

  @Column({ nullable: true })
  radio_figure: string;

  @Column({ nullable: true })
  group_name: string;

  @Column({ nullable: true })
  summary_fields: string;

  @Column({ nullable: true })
  excel_figure: string;

  @Column({ nullable: true })
  excel_template: string;

  @Column({ nullable: true })
  reference_info: string;

  @Column({ nullable: true })
  tree_node_widget_type: string;

  @Column({ nullable: true })
  grid_position: string;

  @Column({ nullable: true })
  publish_data_flag: boolean;

  @Column({ nullable: true })
  profile_criteria_mode: string;

  @Column({ nullable: true })
  auto_find_flag: boolean;
} 