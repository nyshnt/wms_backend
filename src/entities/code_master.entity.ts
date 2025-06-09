import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('CodeMaster')
@Entity('Code_Master')
export class CodeMaster {
  @Field(() => String, { description: 'Name of the column.' })
  @PrimaryColumn()
  column_name: string;

  @Field(() => String, { description: 'Value of the code.' })
  @PrimaryColumn()
  code_value: string;

  @Column({ nullable: true })
  sort_sequence: number;

  @Column({ nullable: true })
  radio_figure: string;

  @Column({ nullable: true })
  image_id: string;

  @Column({ nullable: true })
  group_name: string;
} 