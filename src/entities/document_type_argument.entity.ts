import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { DocumentType } from './document_type.entity';

@ObjectType('DocumentTypeArgument')
@Entity('doc_typ_arg')
export class DocumentTypeArgument {
  @Field(() => String, { description: 'Primary and Foreign key referencing Document_Type.' })
  @PrimaryColumn({ name: 'document_type' })
  document_type: string;

  @Field(() => String, { description: 'Argument for the document type.' })
  @Column({ name: 'document_type_argument', type: 'varchar' })
  document_type_argument: string;

  @Field(() => Boolean, { description: 'Flag indicating if the argument is required.' })
  @Column({ name: 'required_flag', type: 'boolean' })
  required_flag: boolean;

  @ManyToOne(() => DocumentType)
  @JoinColumn({ name: 'document_type', referencedColumnName: 'document_type' })
  documentType: DocumentType;
} 