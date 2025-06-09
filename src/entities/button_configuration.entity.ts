import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MultiLanguageSupportCategory } from './multi_language_support_category.entity';

@Entity('Button_Configuration')
export class ButtonConfiguration {
  @PrimaryColumn()
  button_key: string;

  @PrimaryColumn()
  customer_level: string;

  @Column({ nullable: true })
  button_type: string;

  @Column({ nullable: true })
  button_style: string;

  @Column({ nullable: true })
  position: string;

  @Column({ nullable: true })
  function_name: string;

  @Column({ nullable: true })
  parameters: string;

  @Column({ nullable: true })
  event_name: string;

  @Column({ nullable: true })
  permissions: string;

  @ManyToOne(() => MultiLanguageSupportCategory)
  @JoinColumn({ name: 'caption_mls_id' })
  captionMls: MultiLanguageSupportCategory;

  @Column({ nullable: true })
  image_id: string;

  @Column({ nullable: true })
  disabled_image_id: string;

  @Column({ nullable: true })
  hot_image_id: string;

  @ManyToOne(() => MultiLanguageSupportCategory)
  @JoinColumn({ name: 'tooltip_text_mls_id' })
  tooltipTextMls: MultiLanguageSupportCategory;

  @Column({ nullable: true })
  cause_validation_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 