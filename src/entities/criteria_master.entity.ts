import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProfileMaster } from './profile_master.entity';

@Entity('Criteria_Master')
export class CriteriaMaster {
  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  profile_name: string;

  @PrimaryColumn()
  criteria_name: string;

  @ManyToOne(() => ProfileMaster)
  @JoinColumn({ name: 'application_id' })
  application: ProfileMaster;

  @ManyToOne(() => ProfileMaster)
  @JoinColumn({ name: 'form_id' })
  form: ProfileMaster;

  @ManyToOne(() => ProfileMaster)
  @JoinColumn({ name: 'profile_name' })
  profile: ProfileMaster;

  @Column({ nullable: true })
  variable_name: string;

  @Column({ nullable: true })
  criteria_value: string;

  @Column({ nullable: true })
  group_name: string;
} 