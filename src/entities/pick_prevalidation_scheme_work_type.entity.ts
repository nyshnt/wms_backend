import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PickPreValidationSchemeMaster } from './pick_prevalidation_scheme_master.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('PickPreValidationSchemeWorkType')
@Entity('pick_prevalidation_scheme_work_type')
export class PickPreValidationSchemeWorkType {
  @Field(() => String, { description: 'Scheme ID.' })
  @PrimaryColumn({ name: 'scheme_id' })
  @ManyToOne(() => PickPreValidationSchemeMaster)
  @JoinColumn({ name: 'scheme_id', referencedColumnName: 'scheme_id' })
  scheme_id: string;

  @Field(() => String, { description: 'Type of work.' })
  @PrimaryColumn({ name: 'work_type' })
  work_type: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insert_date', type: 'timestamp', nullable: true })
  insert_date: Date;

  @Field(() => String, { description: 'User who inserted the record.' })
  @Column({ name: 'insert_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'insert_user_id', referencedColumnName: 'user_id' })
  insert_user_id: string;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp', nullable: true })
  last_update_date: Date;

  @Field(() => String, { description: 'User who last updated the record.' })
  @Column({ name: 'last_update_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'last_update_user_id', referencedColumnName: 'user_id' })
  last_update_user_id: string;
} 