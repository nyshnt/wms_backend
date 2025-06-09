import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('carton_selection_criteria')
export class CartonSelectionCriteria {
  @Field(() => String, { description: 'Unique ID for carton selection criteria.' })
  @PrimaryGeneratedColumn({ name: 'carton_selection_criteria_id' })
  carton_selection_criteria_id: string;

  @Field(() => Number, { description: 'Sequence number for the criteria.' })
  @Column({ name: 'sequence_number' })
  sequence_number: number;

  @Field(() => String, { description: 'Identifier for override (context needed).' })
  @Column({ name: 'warehouse_override_id' })
  warehouse_override_id: string;

  @Field(() => String, { description: 'Logical operator (AND, OR).' })
  @Column({ name: 'logical_operator' })
  logical_operator: string;

  @Field(() => String, { description: 'Table name for criteria evaluation.' })
  @Column({ name: 'table_name' })
  table_name: string;

  @Field(() => String, { description: 'Field name for criteria evaluation.' })
  @Column({ name: 'field_name' })
  field_name: string;

  @Field(() => String, { description: 'Comparison operator.' })
  @Column({ name: 'operator' })
  operator: string;

  @Field(() => String, { description: 'Value to compare against.' })
  @Column({ name: 'value' })
  value: string;
} 