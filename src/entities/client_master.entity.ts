import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AddressMasterClient } from './address_master_client.entity';
import { LocaleMaster } from './locale_master.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ClientMaster')
@Entity('Client_Master')
export class ClientMaster {
  @Field(() => String, { description: 'Unique identifier for the client.' })
  @PrimaryColumn()
  client_id: string;

  @ManyToOne(() => AddressMasterClient)
  @JoinColumn({ name: 'address_id' })
  address: AddressMasterClient;

  @ManyToOne(() => LocaleMaster)
  @JoinColumn({ name: 'bill_to_locale_id' })
  billToLocale: LocaleMaster;

  @Column({ nullable: true })
  iso_currency_flag: boolean;

  @Column({ nullable: true })
  storage_billing_type: string;

  @Column({ nullable: true })
  free_storage_days: number;

  @Column({ nullable: true })
  split_storage_code: string;

  @Column({ nullable: true })
  lot_anniversary_flag: boolean;

  @Column({ nullable: true })
  status_override_flag: boolean;

  @Column({ nullable: true })
  auto_add_service_flag: boolean;

  @Column({ nullable: true })
  lot_format_id: string;

  @Column({ nullable: true })
  group_name: string;
}
