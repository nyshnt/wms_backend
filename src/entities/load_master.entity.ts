import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('LoadMaster')
@Entity('load_master')
export class LoadMaster {
  @Field(() => String, { description: 'Unique identifier for the load.' })
  @PrimaryColumn({ name: 'load_number' })
  load_number: string;

  @Field(() => String, { description: 'Description of the load.' })
  @Column({ name: 'load_description', nullable: true })
  load_description: string;

  @Field(() => Date, { description: 'Date when the load was created.' })
  @Column({ name: 'creation_date', type: 'timestamp', nullable: true })
  creation_date: Date;

  @Field(() => String, { description: 'Status of the load.' })
  @Column({ name: 'load_status', nullable: true })
  load_status: string;
}
