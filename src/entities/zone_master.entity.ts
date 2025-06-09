import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('ZoneMaster')
@Entity('zone_master')
export class ZoneMaster {
  @Field(() => String, { description: 'Unique work zone code.' })
  @PrimaryColumn({ name: 'work_zone_code' })
  work_zone_code: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing Warehouse.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Number, { description: 'Maximum devices allowed in the zone (general).' })
  @Column({ name: 'max_devices', type: 'int', nullable: true })
  max_devices: number;

  @Field(() => String, { description: 'Description of the zone.' })
  @Column({ name: 'zone_description', type: 'varchar', length: 255, nullable: true })
  zone_description: string;

  @Field(() => Date, { description: 'Date of creation.' })
  @Column({ name: 'creation_date', type: 'timestamp', nullable: true })
  creation_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp', nullable: true })
  last_update_date: Date;
}
