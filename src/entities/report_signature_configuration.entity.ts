import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ReportConfiguration } from './report_configuration.entity';

@ObjectType('ReportSignatureConfiguration')
@Entity('report_signature_configuration')
export class ReportSignatureConfiguration {
  @Field(() => ReportConfiguration, { description: 'Report ID.' })
  @PrimaryColumn({ name: 'report_id' })
  @ManyToOne(() => ReportConfiguration)
  @JoinColumn({ name: 'report_id', referencedColumnName: 'report_id' })
  report_id: ReportConfiguration;

  @Field(() => String, { description: 'Unique identifier for the signature.' })
  @PrimaryColumn({ name: 'signature_id' })
  signature_id: string;

  @Field(() => Number, { description: 'Page number within the report.' })
  @Column({ name: 'report_page', type: 'int' })
  report_page: number;

  @Field(() => Number, { description: 'Top coordinate for the signature.' })
  @Column({ name: 'signature_top_coordinate', type: 'int' })
  signature_top_coordinate: number;

  @Field(() => Number, { description: 'Left coordinate for the signature.' })
  @Column({ name: 'signature_left_coordinate', type: 'int' })
  signature_left_coordinate: number;

  @Field(() => Number, { description: 'Length of the signature.' })
  @Column({ name: 'signature_length', type: 'int' })
  signature_length: number;

  @Field(() => Number, { description: 'Width of the signature.' })
  @Column({ name: 'signature_width', type: 'int' })
  signature_width: number;
} 