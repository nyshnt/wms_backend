import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('CodeMaster')
@Entity('code_master')
export class CodeMaster {
  @Field(() => String, { description: 'Name of the column.' })
  @PrimaryColumn({ name: 'column_name' })
  column_name: string;

  @Field(() => String, { description: 'Value of the code.' })
  @PrimaryColumn({ name: 'code_value' })
  code_value: string;
} 