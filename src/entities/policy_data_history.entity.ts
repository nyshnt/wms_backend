import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PolicyData } from './policy_data.entity';
import { UserAuthentication } from './user_authentication.entity';

@Entity('Policy_Data_History')
export class PolicyDataHistory {
  @PrimaryColumn()
  history_id: string;

  @ManyToOne(() => PolicyData)
  @JoinColumn([
    { name: 'policy_code', referencedColumnName: 'policy_code' },
    { name: 'policy_variable', referencedColumnName: 'policy_variable' },
    { name: 'policy_value', referencedColumnName: 'policy_value' },
    { name: 'warehouse_id', referencedColumnName: 'warehouse_id_template' },
    { name: 'sort_sequence', referencedColumnName: 'sort_sequence' }
  ])
  policyData: PolicyData;

  @Column({ type: 'timestamp', nullable: true })
  transaction_date: Date;

  @Column({ nullable: true })
  action_type: string;

  @Column({ nullable: true })
  old_string_value1: string;

  @Column({ nullable: true })
  new_string_value1: string;

  @Column({ nullable: true })
  old_string_value2: string;

  @Column({ nullable: true })
  new_string_value2: string;

  @Column({ nullable: true })
  old_number_value1: number;

  @Column({ nullable: true })
  new_number_value1: number;

  @Column({ nullable: true })
  old_number_value2: number;

  @Column({ nullable: true })
  new_number_value2: number;

  @Column({ nullable: true })
  old_float_value1: number;

  @Column({ nullable: true })
  new_float_value1: number;

  @Column({ nullable: true })
  old_float_value2: number;

  @Column({ nullable: true })
  new_float_value2: number;

  @Column({ nullable: true })
  comment_text: string;

  @Column({ type: 'timestamp', nullable: true })
  modification_date: Date;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'modification_user_id' })
  modificationUser: UserAuthentication;
} 