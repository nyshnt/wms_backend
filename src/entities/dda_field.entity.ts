import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DDAMaster } from './dda_master.entity';
import { DDAFilterGroup } from './dda_filter_group.entity';

@Entity('DDA_Field')
export class DDAField {
  @PrimaryColumn()
  dda_id: string;

  @PrimaryColumn()
  customer_level: string;

  @PrimaryColumn()
  dda_field_type: string;

  @PrimaryColumn()
  variable_name: string;

  @ManyToOne(() => DDAMaster)
  @JoinColumn({ name: 'dda_id' })
  dda: DDAMaster;

  @ManyToOne(() => DDAMaster)
  @JoinColumn({ name: 'customer_level' })
  customerLevel: DDAMaster;

  @Column({ nullable: true })
  sort_sequence: number;

  @ManyToOne(() => DDAMaster)
  @JoinColumn({ name: 'link_dda_id' })
  linkDDA: DDAMaster;

  @Column({ nullable: true })
  link_fields: string;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  radio_figure: string;

  @Column({ nullable: true })
  group_name: string;

  @Column({ nullable: true })
  default_flag: boolean;

  @Column({ nullable: true })
  display_only_flag: boolean;

  @ManyToOne(() => DDAFilterGroup)
  @JoinColumn({ name: 'filter_group_id' })
  filterGroup: DDAFilterGroup;

  @Column({ nullable: true })
  context_fields: string;

  @Column({ nullable: true })
  primary_key_field_flag: boolean;

  @Column({ nullable: true })
  primary_key_layout_flag: boolean;

  @Column({ nullable: true })
  aggregate_function: string;
} 