import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserMaster } from './user_master.entity';

@ObjectType('CarrierMaster')
@Entity('carrier_master')
export class CarrierMaster {
  @Field(() => String, { description: 'Unique identifier for the carrier.' })
  @PrimaryColumn({ name: 'carrier_code' })
  carrier_code: string;

  @Field(() => String, { description: 'Name of the carrier.' })
  @Column({ name: 'carrier_name', nullable: true })
  carrier_name: string;

  @Field(() => String, { description: 'Description of the carrier.' })
  @Column({ name: 'carrier_description', nullable: true })
  carrier_description: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insert_date', type: 'timestamp', nullable: true })
  insert_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp', nullable: true })
  last_update_date: Date;

  @Field(() => String, { description: 'User who inserted the record.' })
  @Column({ name: 'insert_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'insert_user_id', referencedColumnName: 'user_id' })
  insert_user_id: string;

  @Field(() => String, { description: 'User who last updated the record.' })
  @Column({ name: 'last_update_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'last_update_user_id', referencedColumnName: 'user_id' })
  last_update_user_id: string;
}
