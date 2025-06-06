import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { DocumentRule } from './document_rule.entity';

@ObjectType('DocumentRuleField')
@Entity('document_rule_field')
export class DocumentRuleField {
  @Field(() => String, { description: 'Primary and Foreign key referencing Document_Rule.' })
  @PrimaryColumn({ name: 'document_type' })
  document_type: string;

  @Field(() => Number, { description: 'Primary and Foreign key referencing Document_Rule.' })
  @PrimaryColumn({ name: 'sequence_number' })
  sequence_number: number;

  @Field(() => String, { description: 'Name of the column.' })
  @Column({ name: 'column_name', type: 'varchar' })
  column_name: string;

  @Field(() => String, { description: 'Value of the column.' })
  @Column({ name: 'column_value', type: 'varchar' })
  column_value: string;

  @ManyToOne(() => DocumentRule)
  @JoinColumn([{ name: 'document_type', referencedColumnName: 'document_type' }, { name: 'sequence_number', referencedColumnName: 'sequence_number' }])
  documentRule: DocumentRule;
} 