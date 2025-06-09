import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ClientMaster } from './client_master.entity';

@Entity('Address_Master_Client')
export class AddressMasterClient {
  @PrimaryColumn()
  address_id: string; // Unique address identifier.

  @Column({ nullable: true })
  host_external_id: string; // Host external ID.

  @Column({ nullable: true })
  address_name: string; // Name for the address.

  @Column({ nullable: true })
  address_type: string; // Type of address.

  @Column({ nullable: true })
  address_line_1: string; // Address line 1.

  @Column({ nullable: true })
  address_line_2: string; // Address line 2.

  @Column({ nullable: true })
  address_line_3: string; // Address line 3.

  @Column({ nullable: true })
  city: string; // City.

  @Column({ nullable: true })
  state_code: string; // State code.

  @Column({ nullable: true })
  postal_code: string; // Postal code.

  @Column({ nullable: true })
  country_name: string; // Country name.

  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'client_id_link' })
  client_id_link: ClientMaster; // Link to client (if address specific to one client).

  @Column({ nullable: true })
  enabled_flag: boolean;
}
