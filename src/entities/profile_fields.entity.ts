import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProfileMaster } from './profile_master.entity';

@Entity('Profile_Fields')
export class ProfileFields {
  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  profile_name: string;

  @PrimaryColumn()
  variable_name: string;

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
  sort_sequence: number;

  @Column({ nullable: true })
  group_name: string;
} 