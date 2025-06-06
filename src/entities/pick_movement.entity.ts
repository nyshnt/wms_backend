import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { LocationMaster } from './location_master.entity';

@ObjectType('PickMovement')
@Entity('pick_movement')
export class PickMovement {
  @Field(() => String, { description: 'Combination code.' })
  @PrimaryColumn({ name: 'combination_code' })
  combination_code: string;

  @Field(() => Number, { description: 'Segment number.' })
  @PrimaryColumn({ name: 'segment_number' })
  segment_number: number;

  @Field(() => LocationMaster, { description: 'Foreign key referencing Location_Master.' })
  @ManyToOne(() => LocationMaster)
  @JoinColumn({ name: 'storage_location', referencedColumnName: 'storage_location' })
  storage_location: string;
} 