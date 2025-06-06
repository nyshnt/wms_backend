import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { DocumentType } from './document_type.entity';
import { LabelFormat } from './label_format.entity';

@ObjectType('DocumentLabelFormat')
@Entity('doc_lblfmt')
export class DocumentLabelFormat {
  @Field(() => String, { description: 'Primary and Foreign key referencing Document_Type.' })
  @PrimaryColumn({ name: 'document_type' })
  document_type: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Label_Format.' })
  @PrimaryColumn({ name: 'label_format' })
  label_format: string;

  @ManyToOne(() => DocumentType)
  @JoinColumn({ name: 'document_type', referencedColumnName: 'document_type' })
  documentType: DocumentType;

  @ManyToOne(() => LabelFormat)
  @JoinColumn({ name: 'label_format', referencedColumnName: 'label_format' })
  labelFormat: LabelFormat;
} 