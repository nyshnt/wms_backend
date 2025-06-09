import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProfileDefinition } from './profile_definition.entity';

@Entity('Profile_Definition_Fields')
export class ProfileDefinitionFields {
  @PrimaryColumn()
  application_id: string;

  @PrimaryColumn()
  form_id: string;

  @PrimaryColumn()
  profile_name: string;

  @PrimaryColumn()
  variable_name: string;

  @ManyToOne(() => ProfileDefinition)
  @JoinColumn({ name: 'application_id' })
  application: ProfileDefinition;

  @ManyToOne(() => ProfileDefinition)
  @JoinColumn({ name: 'form_id' })
  form: ProfileDefinition;

  @ManyToOne(() => ProfileDefinition)
  @JoinColumn({ name: 'profile_name' })
  profile: ProfileDefinition;

  @Column({ nullable: true })
  field_radio_flag: boolean;

  @Column({ nullable: true })
  sort_sequence: number;

  @Column({ nullable: true })
  group_name: string;
} 