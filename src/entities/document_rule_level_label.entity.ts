import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { DocumentRuleLabel } from './document_rule_label.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('DocumentRuleLevelLabel')
@Entity('document_rule_level_label')
export class DocumentRuleLevelLabel {
  @Field(() => String, { description: 'Document type code.' })
  @PrimaryColumn({ name: 'document_type_code' })
  @ManyToOne(() => DocumentRuleLabel)
  @JoinColumn({ name: 'document_type_code', referencedColumnName: 'document_type_code' })
  document_type_code: string;

  @Field(() => String, { description: 'Sequence number.' })
  @PrimaryColumn({ name: 'sequence_number' })
  @ManyToOne(() => DocumentRuleLabel)
  @JoinColumn({ name: 'sequence_number', referencedColumnName: 'sequence_number' })
  sequence_number: string;

  @Field(() => String, { description: 'Value of the column for the rule level.' })
  @PrimaryColumn({ name: 'column_value' })
  column_value: string;

  @Field(() => Boolean, { description: 'Parent Unit of Measure flag.' })
  @Column({ name: 'parent_uom_flag', type: 'boolean', nullable: true })
  parent_uom_flag: boolean;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insert_date', type: 'timestamp', nullable: true })
  insert_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp', nullable: true })
  last_update_date: Date;

  @Field(() => String, { description: 'User who inserted the record.' })
  @Column({ name: 'insert_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'insert_user_id', referencedColumnName: 'user_id' })
  insert_user_id: string;

  @Field(() => String, { description: 'User who last updated the record.' })
  @Column({ name: 'last_update_user_id', nullable: true })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'last_update_user_id', referencedColumnName: 'user_id' })
  last_update_user_id: string;
} 