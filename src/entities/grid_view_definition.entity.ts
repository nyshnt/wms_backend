import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GridDefinition } from './grid_definition.entity';
import { UserAuthentication } from './user_authentication.entity';

@Entity('Grid_View_Definition')
export class GridViewDefinition {
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

  @ManyToOne(() => GridDefinition)
  @JoinColumn({ name: 'level_id' })
  level: GridDefinition;

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

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'user_id' })
  user: UserAuthentication;

  @Column({ nullable: true })
  system_flag: boolean;

  @Column({ nullable: true })
  group_flag: boolean;

  @Column({ nullable: true })
  group_title_formula: string;

  @Column({ nullable: true })
  group_name: string;
}
