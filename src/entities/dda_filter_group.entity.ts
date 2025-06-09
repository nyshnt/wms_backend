import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { UserAuthentication } from './user_authentication.entity';

@Index(['filter_group_id', 'customer_level'])
@Entity('DDA_Filter_Group')
export class DDAFilterGroup {
  @PrimaryColumn()
  filter_group_id: string;

  @PrimaryColumn()
  customer_level: string;

  @Column({ nullable: true })
  sort_sequence: number;

  @Column({ nullable: true })
  group_type: string;

  @ManyToOne(() => DDAFilterGroup)
  @JoinColumn({ name: 'parent_group_id' })
  parentGroup: DDAFilterGroup;

  @ManyToOne(() => DDAFilterGroup)
  @JoinColumn({ name: 'attach_group_id' })
  attachGroup: DDAFilterGroup;

  @Column({ nullable: true })
  attach_location: string;

  @Column({ nullable: true })
  attach_offset: number;

  @Column({ nullable: true })
  group_name: string;

  @Column({ type: 'timestamp', nullable: true })
  modification_date: Date;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'modification_user_id' })
  modificationUser: UserAuthentication;
} 