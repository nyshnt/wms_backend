import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PartMaster } from './part_master.entity';

@ObjectType('AlternatePartMaster')
@Entity('alternate_part_master')
export class AlternatePartMaster {
  @Field(() => PartMaster, { description: 'Primary and Foreign key referencing Part_Master.' })
  @PrimaryColumn({ name: 'part_number' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: PartMaster;

  @Field(() => PartMaster, { description: 'Primary and Foreign key referencing Part_Master.' })
  @PrimaryColumn({ name: 'part_client_id' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'part_client_id' })
  part_client_id: PartMaster;

  @Field(() => String, { description: 'Type of alternate part.' })
  @PrimaryColumn({ name: 'alternate_part_type' })
  alternate_part_type: string;

  @Field(() => String, { description: 'Alternate part number.' })
  @Column({ name: 'alternate_part_number', type: 'varchar', length: 255, nullable: true })
  alternate_part_number: string;
} 