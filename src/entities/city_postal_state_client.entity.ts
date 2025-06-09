import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CountryMasterClient } from './country_master_client.entity';
import { StateMasterClient } from './state_master_client.entity';

@Entity('City_Postal_State_Client')
export class CityPostalStateClient {
  @PrimaryColumn()
  country_name: string;

  @PrimaryColumn()
  state_code: string;

  @PrimaryColumn()
  postal_code: string;

  @ManyToOne(() => CountryMasterClient)
  @JoinColumn({ name: 'country_name' })
  country: CountryMasterClient;

  @ManyToOne(() => StateMasterClient)
  @JoinColumn({ name: 'state_code' })
  state: StateMasterClient;

  @Column({ nullable: true })
  city: string;
} 