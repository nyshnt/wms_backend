import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('VoiceRegion')
@Entity('voice_region')
export class VoiceRegion {
  @Field(() => String, { description: 'Unique identifier for the voice region.' })
  @PrimaryColumn({ name: 'region_number' })
  region_number: string;

  @Field(() => String, { description: 'Name of the voice validation function.' })
  @Column({ name: 'voice_validation_function', nullable: true })
  voice_validation_function: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @Column({ name: 'warehouse_id', nullable: true })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

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