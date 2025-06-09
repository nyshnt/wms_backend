import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { CityPostalStateClient } from './city_postal_state_client.entity';
import { CountryMasterClient } from './country_master_client.entity';

@Entity('State_Master_Client')
export class StateMasterClient {
  @PrimaryColumn()
  country_name: string;

  @PrimaryColumn()
  state_code: string;

  @Column({ nullable: true })
  state_name: string;

  @ManyToOne(() => CountryMasterClient)
  @JoinColumn({ name: 'country_name' })
  country: CountryMasterClient;

  @OneToMany(() => CityPostalStateClient, cityPostalStateClient => cityPostalStateClient.state)
  cities: CityPostalStateClient[];
}
