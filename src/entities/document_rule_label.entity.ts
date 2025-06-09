import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { DocumentTypeLabel } from './document_type_label.entity';
import { LocaleMaster } from './locale_master.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('DocumentRuleLabel')
@Entity('document_rule_label')
export class DocumentRuleLabel {
  @Field(() => String, { description: 'Document type code.' })
  @PrimaryColumn({ name: 'document_type_code' })
  @ManyToOne(() => DocumentTypeLabel)
  @JoinColumn({ name: 'document_type_code', referencedColumnName: 'document_type_code' })
  document_type_code: string;

  @Field(() => String, { description: 'Sequence number for the document rule.' })
  @PrimaryColumn({ name: 'sequence_number' })
  sequence_number: string;

  @Field(() => String, { description: 'Format of the document.' })
  @Column({ name: 'document_format', nullable: true })
  document_format: string;

  @Field(() => Number, { description: 'Quantity of the document.' })
  @Column({ name: 'document_quantity', type: 'int', nullable: true })
  document_quantity: number;

  @Field(() => String, { description: 'Exit point for the document rule.' })
  @Column({ name: 'exit_point', nullable: true })
  exit_point: string;

  @Field(() => String, { description: 'Source device for the document.' })
  @Column({ name: 'device_source', nullable: true })
  device_source: string;

  @Field(() => String, { description: 'Group for the document.' })
  @Column({ name: 'document_group', nullable: true })
  document_group: string;

  @Field(() => String, { description: 'Type of locale.' })
  @Column({ name: 'locale_type', nullable: true })
  locale_type: string;

  @Field(() => String, { description: 'Locale ID.' })
  @Column({ name: 'locale_id', nullable: true })
  @ManyToOne(() => LocaleMaster)
  @JoinColumn({ name: 'locale_id', referencedColumnName: 'locale_id' })
  locale_id: string;

  @Field(() => Date, { description: 'Date of last modification.' })
  @Column({ name: 'modification_date', type: 'timestamp', nullable: true })
  modification_date: Date;

  @Field(() => String, { description: 'User who last modified the record.' })
  @Column({ name: 'modification_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'modification_user_id', referencedColumnName: 'user_id' })
  modification_user_id: string;
} 