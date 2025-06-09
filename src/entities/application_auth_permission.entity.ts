import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Application_Auth_Permission')
export class ApplicationAuthPermission {
  @PrimaryGeneratedColumn()
  permission_id: string;

  @Column({ nullable: true })
  bit_position: number;

  @Column({ nullable: true })
  permission_type_code: string;

  @Column({ nullable: true })
  group_name: string;
} 