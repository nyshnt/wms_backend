import { Entity, PrimaryColumn } from 'typeorm';

@Entity('Country_Master_Client')
export class CountryMasterClient {
  @PrimaryColumn()
  country_name: string;
}
