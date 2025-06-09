import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Lookup_Configuration')
export class LookupConfiguration {
  @PrimaryColumn()
  lookup_id: string;

  @PrimaryColumn()
  customer_level: string;

  @Column({ nullable: true })
  lookup_command: string;

  @Column({ nullable: true })
  lookup_component: string;

  @Column({ nullable: true })
  return_field: string;

  @Column({ nullable: true })
  group_name: string;
} 