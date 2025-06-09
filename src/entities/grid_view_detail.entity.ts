import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GridViewDefinition } from './grid_view_definition.entity';

@Entity('Grid_View_Detail')
export class GridViewDetail {
  @PrimaryColumn()
  level_id: string;

  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  addon_id: string;

  @PrimaryColumn()
  grid_variable_name: string;

  @PrimaryColumn()
  view_name: string;

  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  view_type: string;

  @PrimaryColumn()
  view_field_name: string;

  @ManyToOne(() => GridViewDefinition)
  @JoinColumn({ name: 'level_id' })
  level: GridViewDefinition;

  @ManyToOne(() => GridViewDefinition)
  @JoinColumn({ name: 'application_id' })
  application: GridViewDefinition;

  @ManyToOne(() => GridViewDefinition)
  @JoinColumn({ name: 'form_id' })
  form: GridViewDefinition;

  @ManyToOne(() => GridViewDefinition)
  @JoinColumn({ name: 'addon_id' })
  addon: GridViewDefinition;

  @ManyToOne(() => GridViewDefinition)
  @JoinColumn({ name: 'grid_variable_name' })
  gridVariable: GridViewDefinition;

  @ManyToOne(() => GridViewDefinition)
  @JoinColumn({ name: 'view_name' })
  view: GridViewDefinition;

  @ManyToOne(() => GridViewDefinition)
  @JoinColumn({ name: 'user_id' })
  user: GridViewDefinition;

  @Column({ nullable: true })
  view_field_width: number;

  @Column({ nullable: true })
  view_field_sequence: number;

  @Column({ nullable: true })
  view_field_visible_flag: boolean;

  @Column({ nullable: true })
  view_field_sort_order: string;

  @Column({ nullable: true })
  view_field_sort_type: string;

  @Column({ nullable: true })
  view_group_order: number;

  @Column({ nullable: true })
  view_formula: string;

  @Column({ nullable: true })
  group_name: string;
} 