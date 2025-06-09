import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ClientGroup } from './client_group.entity';
import { ClientMaster } from './client_master.entity';
import { UserAuthentication } from './user_authentication.entity';

@Entity('Client_Group_Client_Association')
export class ClientGroupClientAssociation {
  @PrimaryColumn()
  client_group_id: string;

  @PrimaryColumn()
  client_id: string;

  @ManyToOne(() => ClientGroup)
  @JoinColumn({ name: 'client_group_id' })
  clientGroup: ClientGroup;

  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'client_id' })
  client: ClientMaster;

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