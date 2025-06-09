import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GridDefinition } from './grid_definition.entity';
import { UserAuthentication } from './user_authentication.entity';

@Entity('Grid_Display_Rule')
export class GridDisplayRule {
  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  level_id: string;

  @PrimaryColumn()
  grid_name: string;

  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  grid_field_name: string;

  @PrimaryColumn()
  sort_sequence: number;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'application_id' })
  application: GridDefinition;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'form_id' })
  form: GridDefinition;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'level_id' })
  level: GridDefinition;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'grid_name' })
  grid: GridDefinition;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'user_id' })
  user: UserAuthentication;

  @Column({ nullable: true })
  display_rule_id: string;

  @Column({ nullable: true })
  comparison_operator: string;

  @Column({ nullable: true })
  comparison_value: string;

  @Column({ nullable: true })
  maximum_value: string;

  @Column({ nullable: true })
  foreground_color: string;

  @Column({ nullable: true })
  background_color: string;

  @Column({ nullable: true })
  fill_style: string;

  @Column({ nullable: true })
  fill_color: string;

  @Column({ nullable: true })
  font_name: string;

  @Column({ nullable: true })
  font_bold_flag: boolean;

  @Column({ nullable: true })
  font_italic_flag: boolean;

  @Column({ nullable: true })
  font_strikethrough_flag: boolean;

  @Column({ nullable: true })
  font_underline_flag: boolean;

  @Column({ nullable: true })
  whole_row_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 