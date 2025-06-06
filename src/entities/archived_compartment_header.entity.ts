import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ArchivedCompartmentHeader')
@Entity('archived_compartment_header')
export class ArchivedCompartmentHeader {
  @Field(() => String, { description: 'Unique identifier for the archived compartment header.' })
  @PrimaryColumn({ name: 'compartment_key' })
  compartment_key: string;

  @Field(() => Date, { description: 'Date added to archive.' })
  @Column({ name: 'added_date', type: 'date' })
  added_date: Date;
} 