import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LocaleMaster } from './locale_master.entity';

@Entity('Description_Master_Dashboard')
export class DescriptionMasterDashboard {
  @PrimaryColumn()
  column_name: string;

  @PrimaryColumn()
  column_value: string;

  @PrimaryColumn()
  locale_id: string;

  @ManyToOne(() => LocaleMaster)
  @JoinColumn({ name: 'locale_id' })
  locale: LocaleMaster;

  @Column({ nullable: true })
  long_description: string;

  @Column({ nullable: true })
  short_description: string;

  @Column({ nullable: true })
  group_name: string;
} 