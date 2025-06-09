import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PolicyArea } from './policy_area.entity';

@Entity('Policy_Group')
export class PolicyGroup {
  @PrimaryColumn()
  policy_area_id: string;

  @PrimaryColumn()
  policy_child_id: string;

  @PrimaryColumn()
  policy_child_type: string;

  @ManyToOne(() => PolicyArea)
  @JoinColumn({ name: 'policy_area_id' })
  policyArea: PolicyArea;

  @Column({ nullable: true })
  group_name: string;
} 