import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LocaleMaster } from './locale_master.entity';
import { AddressMaster } from './address_master.entity';
import { ClientMaster } from './client_master.entity';

@Entity('User_Authentication')
export class UserAuthentication {
  @PrimaryGeneratedColumn()
  user_id: string;

  @Column()
  login_id: string;

  @Column()
  user_password: string;

  @ManyToOne(() => LocaleMaster)
  @JoinColumn({ name: 'locale_id' })
  locale: LocaleMaster;

  @Column()
  user_status: string;

  @Column()
  super_user_flag: boolean;

  @Column({ type: 'date', nullable: true })
  account_expiration_date: Date;

  @Column({ type: 'date', nullable: true })
  password_change_date: Date;

  @Column()
  password_change_flag: boolean;

  @Column()
  password_expiration_flag: boolean;

  @ManyToOne(() => AddressMaster)
  @JoinColumn({ name: 'address_id' })
  address: AddressMaster;

  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'client_id' })
  client: ClientMaster;

  @Column({ type: 'date', nullable: true })
  last_modified_date: Date;

  @Column({ type: 'date', nullable: true })
  last_login_date: Date;

  @Column({ type: 'date', nullable: true })
  last_logout_date: Date;

  @Column()
  intruder_attempt_count: number;

  @Column()
  single_sign_on_flag: boolean;

  @Column()
  external_auth_flag: boolean;

  @Column({ type: 'date', nullable: true })
  modification_date: Date;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'modification_user_id' })
  modificationUser: UserAuthentication;

  @Column()
  pin_number: string;

  @Column()
  incentive_flag: boolean;

  @Column()
  differential_flag: boolean;

  @Column()
  unmeasured_flag: boolean;

  @Column()
  payroll_flag: boolean;

  @Column()
  auth_group_name_user: string;

  @Column()
  countback_enabled_code: string;

  @Column()
  adj_threshold_cost_user: number;

  @Column()
  adj_threshold_unit_user: number;

  @Column()
  group_name_user: string;
} 