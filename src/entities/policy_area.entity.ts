import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Policy_Area')
export class PolicyArea {
  @PrimaryColumn()
  policy_area_id: string;

  @Column({ nullable: true })
  group_name: string;
} 