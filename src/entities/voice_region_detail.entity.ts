import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { VoiceRegion } from './voice_region.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('VoiceRegionDetail')
@Entity('voice_region_detail')
export class VoiceRegionDetail {
  @Field(() => String, { description: 'Region number.' })
  @PrimaryColumn({ name: 'region_number' })
  @ManyToOne(() => VoiceRegion)
  @JoinColumn({ name: 'region_number', referencedColumnName: 'region_number' })
  region_number: string;

  @Field(() => String, { description: 'Voice validation function.' })
  @PrimaryColumn({ name: 'voice_validation_function' })
  @ManyToOne(() => VoiceRegion)
  @JoinColumn({ name: 'voice_validation_function', referencedColumnName: 'voice_validation_function' })
  voice_validation_function: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => VoiceRegion)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Name of the variable for the region detail.' })
  @PrimaryColumn({ name: 'variable_name' })
  variable_name: string;

  @Field(() => String, { description: 'Value of the variable.' })
  @Column({ name: 'value', nullable: true })
  value: string;

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

  @Field(() => String, { description: 'Redundant voice validation function reference.' })
  @Column({ name: 'voice_validation_function_ref', nullable: true })
  voice_validation_function_ref: string;

  @Field(() => String, { description: 'Redundant warehouse ID reference.' })
  @Column({ name: 'warehouse_id_ref', nullable: true })
  warehouse_id_ref: string;
} 