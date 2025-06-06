import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('DocumentType')
@Entity('document_type')
export class DocumentType {
  @Field(() => String, { description: 'Unique identifier for the document type.' })
  @PrimaryColumn({ name: 'document_type' })
  document_type: string;

  @Field(() => String, { description: 'Code for the document type.' })
  @Column({ name: 'document_type_code', type: 'varchar' })
  document_type_code: string;

  @Field(() => String, { description: 'Default load level.' })
  @Column({ name: 'default_load_level', type: 'varchar' })
  default_load_level: string;

  @Field(() => String, { description: 'Command for data retrieval.' })
  @Column({ name: 'data_command', type: 'varchar' })
  data_command: string;

  @Field(() => String, { description: 'Break level.' })
  @Column({ name: 'break_level', type: 'varchar' })
  break_level: string;

  @Field(() => Boolean, { description: 'Flag for billing.' })
  @Column({ name: 'billing_flag', type: 'boolean' })
  billing_flag: boolean;
} 