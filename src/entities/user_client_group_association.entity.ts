import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserAuthentication } from './user_authentication.entity';
import { ClientGroup } from './client_group.entity';

@Entity('User_Client_Group_Association')
export class UserClientGroupAssociation {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  client_group_id: string;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'user_id' })
  user: UserAuthentication;

  @ManyToOne(() => ClientGroup)
  @JoinColumn({ name: 'client_group_id' })
  clientGroup: ClientGroup;

  @Column({ nullable: true })
  version_number: number;

  @Column({ type: 'timestamp', nullable: true })
  insert_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  last_update_date: Date;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'insert_user_id' })
  insertUser: UserAuthentication;

  @ManyToOne(() => UserAuthentication)
  @JoinColumn({ name: 'last_update_user_id' })
  lastUpdateUser: UserAuthentication;
} 