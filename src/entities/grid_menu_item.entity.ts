import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GridDefinition } from './grid_definition.entity';
import { ButtonConfiguration } from './button_configuration.entity';

@Entity('Grid_Menu_Item')
export class GridMenuItem {
  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  addon_id: string;

  @PrimaryColumn()
  grid_variable_name: string;

  @PrimaryColumn()
  level_id: string;

  @PrimaryColumn()
  menu_item_name: string;

  @PrimaryColumn()
  customer_level: string;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'application_id' })
  application: GridDefinition;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'form_id' })
  form: GridDefinition;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'addon_id' })
  addon: GridDefinition;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'grid_variable_name' })
  gridVariable: GridDefinition;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'level_id' })
  level: GridDefinition;

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'customer_level' })
  customerLevel: GridDefinition;

  @ManyToOne(() => GridMenuItem)
  @JoinColumn({ name: 'parent_item_name' })
  parentItem: GridMenuItem;

  @Column({ nullable: true })
  menu_sequence: number;

  @Column({ nullable: true })
  enable_formula: string;

  @Column({ nullable: true })
  selection_rule: string;

  @ManyToOne(() => ButtonConfiguration)
  @JoinColumn({ name: 'button_key' })
  button: ButtonConfiguration;

  @Column({ nullable: true })
  group_name: string;
} 