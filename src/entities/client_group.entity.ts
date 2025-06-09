import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { ClientGroupClientAssociation } from './client_group_client_association.entity';
import { UserAuthentication } from './user_authentication.entity';

@Entity('Client_Group')
export class ClientGroup {
  @PrimaryColumn()
  client_group_id: string;

  @Column({ nullable: true })
  group_name: string;

  @Column({ nullable: true })
  description: string;

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

  @OneToMany(() => ClientGroupClientAssociation, clientGroupClientAssociation => clientGroupClientAssociation.clientGroup)
  clientAssociations: ClientGroupClientAssociation[];
} 