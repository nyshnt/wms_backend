import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LookupConfiguration } from './lookup_configuration.entity';

@Entity('Lookup_Field_Configuration')
export class LookupFieldConfiguration {
  @PrimaryColumn()
  lookup_id: string;

  @PrimaryColumn()
  customer_level: string;

  @PrimaryColumn()
  field_name: string;

  @ManyToOne(() => LookupConfiguration)
  @JoinColumn([{ name: 'lookup_id' }, { name: 'customer_level' }])
  lookupConfiguration: LookupConfiguration;

  @Column({ nullable: true })
  sort_sequence: number;

  @Column({ nullable: true })
  field_variable: string;

  @Column({ nullable: true })
  input_flag: boolean;

  @Column({ nullable: true })
  group_name: string;
} 