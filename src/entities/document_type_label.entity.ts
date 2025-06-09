import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserMaster } from './user_master.entity';

@ObjectType('DocumentTypeLabel')
@Entity('document_type_label')
export class DocumentTypeLabel {
  @Field(() => String, { description: 'Unique code for the document type.' })
  @PrimaryColumn({ name: 'document_type_code' })
  document_type_code: string;

  @Field(() => String, { description: 'Alternative document type code.' })
  @Column({ name: 'document_type_code_alt', nullable: true })
  document_type_code_alt: string;

  @Field(() => String, { description: 'Name of the level column.' })
  @Column({ name: 'level_column_name', nullable: true })
  level_column_name: string;

  @Field(() => String, { description: 'Data command for the document type.' })
  @Column({ name: 'data_command', nullable: true })
  data_command: string;

  @Field(() => String, { description: 'Break level for the document.' })
  @Column({ name: 'break_level', nullable: true })
  break_level: string;

  @Field(() => Boolean, { description: 'Flag indicating if billing is applicable.' })
  @Column({ name: 'billing_flag', type: 'boolean', nullable: true })
  billing_flag: boolean;

  @Field(() => Date, { description: 'Date of last modification.' })
  @Column({ name: 'modification_date', type: 'timestamp', nullable: true })
  modification_date: Date;

  @Field(() => String, { description: 'User who last modified the record.' })
  @Column({ name: 'modification_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'modification_user_id', referencedColumnName: 'user_id' })
  modification_user_id: string;
} 