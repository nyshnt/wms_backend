import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Time_Zone_Mapping')
export class TimeZoneMapping {
  @PrimaryColumn()
  java_timezone_id: string; // Unique Java timezone ID.

  @Column({ nullable: true })
  win32_timezone_id: string; // Windows timezone ID.

  @Column({ nullable: true })
  enabled_flag: boolean; // Enabled flag.
}