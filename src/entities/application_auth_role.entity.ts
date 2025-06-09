import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Application_Auth_Role')
export class ApplicationAuthRole {
  @PrimaryGeneratedColumn()
  role_id: string;

  @Column()
  role_name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  is_active: boolean;
}
