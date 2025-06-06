import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { DocumentType } from './document_type.entity';

@ObjectType('DocumentRule')
@Entity('document_rule')
export class DocumentRule {
  @Field(() => String, { description: 'Primary and Foreign key referencing Document_Type.' })
  @PrimaryColumn({ name: 'document_type' })
  document_type: string;

  @Field(() => Number, { description: 'Sequence number for the rule.' })
  @PrimaryColumn({ name: 'sequence_number' })
  sequence_number: number;

  @Field(() => String, { description: 'Format of the document.' })
  @Column({ name: 'document_format', type: 'varchar' })
  document_format: string;

  @Field(() => Number, { description: 'Quantity of documents.' })
  @Column({ name: 'document_quantity', type: 'int' })
  document_quantity: number;

  @Field(() => String, { description: 'Load level.' })
  @Column({ name: 'load_level', type: 'varchar' })
  load_level: string;

  @Field(() => String, { description: 'Exitpoint.' })
  @Column({ name: 'exitpoint', type: 'varchar' })
  exitpoint: string;

  @Field(() => String, { description: 'Source device.' })
  @Column({ name: 'device_source', type: 'varchar' })
  device_source: string;

  @Field(() => String, { description: 'Group for the document.' })
  @Column({ name: 'document_group', type: 'varchar' })
  document_group: string;

  @ManyToOne(() => DocumentType)
  @JoinColumn({ name: 'document_type', referencedColumnName: 'document_type' })
  documentType: DocumentType;
} 