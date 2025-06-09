import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PolicyInformation } from './policy_information.entity';
import { MultiLanguageSupportCategory } from './multi_language_support_category.entity';

@Entity('Policy_Field')
export class PolicyField {
  @PrimaryColumn()
  policy_id: string;

  @PrimaryColumn()
  policy_field_name: string;

  @ManyToOne(() => PolicyInformation)
  @JoinColumn({ name: 'policy_id' })
  policyInformation: PolicyInformation;

  @Column({ nullable: true })
  field_alias: string;

  @Column({ nullable: true })
  field_type: string;

  @ManyToOne(() => MultiLanguageSupportCategory)
  @JoinColumn({ name: 'tooltip_mls_id' })
  tooltipMls: MultiLanguageSupportCategory;

  @Column({ nullable: true })
  group_name: string;
} 