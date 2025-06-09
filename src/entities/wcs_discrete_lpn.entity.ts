import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { LoadMaster } from './load_master.entity';
import { WCSDiscreteHeader } from './wcs_discrete_header.entity';

@ObjectType('WCSDiscreteLPN')
@Entity('wcs_discrete_lpn')
export class WCSDiscreteLPN {
  @Field(() => String, { description: 'Unique identifier for the LPN.' })
  @PrimaryColumn({ name: 'lpn_id' })
  lpn_id: string;

  @Field(() => String, { description: 'Load number.' })
  @Column({ name: 'load_number', nullable: true })
  @ManyToOne(() => LoadMaster)
  @JoinColumn({ name: 'load_number', referencedColumnName: 'load_number' })
  load_number: string;

  @Field(() => String, { description: 'Type of discrete WCS information.' })
  @Column({ name: 'discrete_type', nullable: true })
  discrete_type: string;

  @Field(() => String, { description: 'Header ID.' })
  @Column({ name: 'header_id', nullable: true })
  @ManyToOne(() => WCSDiscreteHeader)
  @JoinColumn({ name: 'header_id', referencedColumnName: 'header_id' })
  header_id: string;
}
