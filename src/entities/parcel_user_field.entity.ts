import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { CustomerMaster } from './customer_master.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('ParcelUserField')
@Entity('parcel_user_field')
export class ParcelUserField {
  @Field(() => String, { description: 'Unique ID for parcel user field.' })
  @PrimaryColumn({ name: 'parcel_user_field_id' })
  parcel_user_field_id: string;

  @Field(() => CustomerMaster, { description: 'Foreign key referencing Customer_Master.' })
  @ManyToOne(() => CustomerMaster)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => CustomerMaster, { description: 'Foreign key referencing Customer_Master.' })
  @ManyToOne(() => CustomerMaster)
  @JoinColumn({ name: 'customer_number', referencedColumnName: 'customer_number' })
  customer_number: string;

  @Field(() => String, { description: 'User-defined column 1.' })
  @Column({ name: 'user_column_1', nullable: true })
  user_column_1: string;

  @Field(() => String, { description: 'User-defined column 2.' })
  @Column({ name: 'user_column_2', nullable: true })
  user_column_2: string;

  @Field(() => String, { description: 'User-defined column 3.' })
  @Column({ name: 'user_column_3', nullable: true })
  user_column_3: string;

  @Field(() => String, { description: 'User-defined column 4.' })
  @Column({ name: 'user_column_4', nullable: true })
  user_column_4: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insert_date', type: 'timestamp', nullable: true })
  insert_date: Date;

  @Field(() => UserMaster, { description: 'User who inserted the record.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'insert_user_id', referencedColumnName: 'user_id' })
  insert_user_id: string;

  @Field(() => Date, { description: 'Date of last modification.' })
  @Column({ name: 'modification_date', type: 'timestamp', nullable: true })
  modification_date: Date;

  @Field(() => UserMaster, { description: 'User who last modified the record.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'modification_user_id', referencedColumnName: 'user_id' })
  modification_user_id: string;
} 