import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DDAMaster } from './dda_master.entity';

@Entity('DDA_Child')
export class DDAChild {
  @PrimaryColumn()
  dda_id: string;

  @PrimaryColumn()
  dda_type: string;

  @PrimaryColumn()
  dda_child_id: string;

  @Column({ nullable: true })
  dda_child_type: string;

  @PrimaryColumn()
  customer_level: string;

  @ManyToOne(() => DDAMaster)
  @JoinColumn({ name: 'dda_id' })
  dda: DDAMaster;

  @ManyToOne(() => DDAMaster)
  @JoinColumn({ name: 'customer_level' })
  customerLevel: DDAMaster;

  @Column({ nullable: true })
  child_fields: string;

  @Column({ nullable: true })
  sort_sequence: number;

  @Column({ nullable: true })
  enabled_flag: boolean;

  @Column({ nullable: true })
  initial_visible_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 