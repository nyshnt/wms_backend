import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Address_Master_Client')
export class AddressMasterClient {
  @PrimaryColumn()
  address_id: string;

  @Column({ nullable: true })
  street_address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  postal_code: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  enabled_flag: boolean;
}
