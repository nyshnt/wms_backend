import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { WCSDiscreteLPN } from './wcs_discrete_lpn.entity';

@ObjectType('WCSDiscreteAttribute')
@Entity('wcs_discrete_attribute')
export class WCSDiscreteAttribute {
  @Field(() => String, { description: 'Unique identifier for the attribute.' })
  @PrimaryColumn({ name: 'attribute_id' })
  attribute_id: string;

  @Field(() => String, { description: 'Name of the attribute.' })
  @Column({ name: 'attribute_name', nullable: true })
  attribute_name: string;

  @Field(() => String, { description: 'Value from WCS.' })
  @Column({ name: 'wcs_value', nullable: true })
  wcs_value: string;

  @Field(() => String, { description: 'Value from WMS.' })
  @Column({ name: 'wms_value', nullable: true })
  wms_value: string;

  @Field(() => WCSDiscreteLPN, { description: 'Foreign key referencing WCS_Discrete_LPN.' })
  @ManyToOne(() => WCSDiscreteLPN)
  @JoinColumn({ name: 'lpn_id', referencedColumnName: 'lpn_id' })
  lpn_id: string;
} 