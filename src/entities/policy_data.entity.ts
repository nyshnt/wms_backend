import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserAuthentication } from './user_authentication.entity';

@Entity('Policy_Data')
export class PolicyData {
  @PrimaryColumn()
  policy_code: string; // Code for the policy data.

  @PrimaryColumn()
  policy_variable: string; // Variable for the policy data.

  @PrimaryColumn()
  policy_value: string; // Value for the policy data.

  @PrimaryColumn()
  sort_sequence: number; // Sort sequence for the policy data.

  @PrimaryColumn()
  warehouse_id_template: string; // Warehouse template ID.

  @Column({ nullable: true })
  description: string; // Description of the policy data.

  @Column({ nullable: true })
  effective_date: Date; // Effective date of the policy data.

  @Column({ nullable: true })
  expiration_date: Date; // Expiration date of the policy data.

  @Column({ nullable: true })
  string_value1: string; // String value 1.

  @Column({ nullable: true })
  string_value2: string; // String value 2.

  @Column({ nullable: true })
  number_value1: number; // Number value 1.

  @Column({ nullable: true })
  number_value2: number; // Number value 2.

  @Column({ nullable: true })
  float_value1: number; // Float value 1.

  @Column({ nullable: true })
  float_value2: number; // Float value 2.

  @Column({ type: 'timestamp', nullable: true })
  modification_date: Date; // Date of modification.

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'modification_user_id' })
  modificationUser: UserAuthentication; // User who made the modification.

  @Column({ nullable: true })
  group_name: string; // Group name for the policy data.
}
