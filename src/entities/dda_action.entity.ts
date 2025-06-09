import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DDAMaster } from './dda_master.entity';
import { MultiLanguageSupportCategory } from './multi_language_support_category.entity';

@Entity('DDA_Action')
export class DDAAction {
  @PrimaryColumn()
  dda_id: string;

  @PrimaryColumn()
  action_name: string;

  @PrimaryColumn()
  customer_level: string;

  @ManyToOne(() => DDAMaster)
  @JoinColumn({ name: 'dda_id' })
  dda: DDAMaster;

  @ManyToOne(() => DDAMaster)
  @JoinColumn({ name: 'customer_level' })
  customerLevel: DDAMaster;

  @Column({ nullable: true })
  action_fields: string;

  @Column({ nullable: true })
  action_form: string;

  @Column({ nullable: true })
  image_link: string;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  group_name: string;

  @Column({ nullable: true })
  sort_sequence: number;

  @Column({ nullable: true })
  action_initial_command: string;

  @Column({ nullable: true })
  action_post_command: string;

  @Column({ nullable: true })
  radio_figure: string;

  @ManyToOne(() => MultiLanguageSupportCategory)
  @JoinColumn({ name: 'submit_button_mls_id' })
  submitButtonMLS: MultiLanguageSupportCategory;

  @ManyToOne(() => MultiLanguageSupportCategory)
  @JoinColumn({ name: 'post_action_mls_id' })
  postActionMLS: MultiLanguageSupportCategory;

  @Column({ nullable: true })
  auto_clear_flag: boolean;
} 