import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { WCSMaster } from './wcs_master.entity';

@ObjectType('WCSDiscreteHeader')
@Entity('wcs_discrete_header')
export class WCSDiscreteHeader {
  @Field(() => String, { description: 'Unique identifier for the WCS discrete header.' })
  @PrimaryColumn({ name: 'header_id' })
  header_id: string;

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
} 