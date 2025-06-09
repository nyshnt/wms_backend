import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PolicyData } from './policy_data.entity';

@Entity('Policy_Information')
export class PolicyInformation {
  @PrimaryColumn()
  policy_id: string;

  @ManyToOne(() => PolicyData)
  @JoinColumn([
    { name: 'policy_code', referencedColumnName: 'policy_code' },
    { name: 'policy_variable', referencedColumnName: 'policy_variable' },
    { name: 'policy_value', referencedColumnName: 'policy_value' },
    { name: 'sort_sequence', referencedColumnName: 'sort_sequence' }
  ])
  policyData: PolicyData;

  @Column({ nullable: true })
  allow_multiple_flag: boolean;

  @Column({ nullable: true })
  allow_delete_flag: boolean;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  allow_override_figure: string;

  @Column({ nullable: true })
  group_name: string;
} 