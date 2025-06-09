import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { WCSMaster } from './wcs_master.entity';
import { LoadMaster } from './load_master.entity';
import { LocationMaster } from './location_master.entity';

@ObjectType('WCSDiscreteSnapshot')
@Entity('wcs_discrete_snapshot')
export class WCSDiscreteSnapshot {
  @Field(() => String, { description: 'Unique identifier for the snapshot.' })
  @PrimaryColumn({ name: 'snapshot_id' })
  snapshot_id: string;

  @Field(() => String, { description: 'WCS ID.' })
  @Column({ name: 'wcs_id', nullable: true })
  @ManyToOne(() => WCSMaster)
  @JoinColumn({ name: 'wcs_id', referencedColumnName: 'wcs_id' })
  wcs_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @Column({ name: 'warehouse_id', nullable: true })
  @ManyToOne(() => WCSMaster)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Transaction identifier.' })
  @Column({ name: 'transaction_id', nullable: true })
  transaction_id: string;

  @Field(() => Date, { description: 'Transaction date.' })
  @Column({ name: 'transaction_date', type: 'timestamp', nullable: true })
  transaction_date: Date;

  @Field(() => String, { description: 'Load number.' })
  @Column({ name: 'load_number', nullable: true })
  @ManyToOne(() => LoadMaster)
  @JoinColumn({ name: 'load_number', referencedColumnName: 'load_number' })
  load_number: string;

  @Field(() => String, { description: 'Stock location.' })
  @Column({ name: 'stock_location', nullable: true })
  @ManyToOne(() => LocationMaster)
  @JoinColumn({ name: 'stock_location', referencedColumnName: 'stock_location' })
  stock_location: string;
} 