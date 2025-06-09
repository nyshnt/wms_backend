import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('System_Comment')
export class SystemComment {
  @PrimaryColumn()
  system_object_type: string;

  @PrimaryColumn()
  system_object_id: string;

  @PrimaryColumn()
  customer_level: string;

  @Column({ nullable: true })
  comment_text: string;

  @Column({ nullable: true })
  group_name: string;
} 