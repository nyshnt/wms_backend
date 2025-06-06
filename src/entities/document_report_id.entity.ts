import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { DocumentType } from './document_type.entity';
import { ReportConfiguration } from './report_configuration.entity';

@ObjectType('DocumentReportID')
@Entity('document_report_id')
export class DocumentReportID {
  @Field(() => String, { description: 'Primary and Foreign key referencing Document_Type.' })
  @PrimaryColumn({ name: 'document_type' })
  document_type: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Report_Configuration.' })
  @PrimaryColumn({ name: 'report_id' })
  report_id: string;

  @ManyToOne(() => DocumentType)
  @JoinColumn({ name: 'document_type', referencedColumnName: 'document_type' })
  documentType: DocumentType;

  @ManyToOne(() => ReportConfiguration)
  @JoinColumn({ name: 'report_id', referencedColumnName: 'report_id' })
  reportConfiguration: ReportConfiguration;
} 