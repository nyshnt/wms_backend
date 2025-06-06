import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PartMaster } from './part_master.entity';

@ObjectType('PickWork')
@Entity('pick_work')
export class PickWork {
  @Field(() => String, { description: 'Unique identifier for the pick work.' })
  @PrimaryColumn({ name: 'work_reference' })
  work_reference: string;

  @Field(() => String, { description: 'Schedule batch ID.' })
  @Column({ name: 'schedule_batch_id', type: 'varchar', length: 255, nullable: true })
  schedule_batch_id: string;

  @Field(() => PartMaster, { description: 'Foreign key referencing Part_Master.' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: PartMaster;

  @Field(() => PartMaster, { description: 'Foreign key referencing Part_Master.' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'part_client_id' })
  part_client_id: PartMaster;
} 