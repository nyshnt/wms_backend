import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ReportConfiguration')
@Entity('report_configuration')
export class ReportConfiguration {
  @Field(() => String, { description: 'Unique identifier for the report configuration.' })
  @PrimaryGeneratedColumn('uuid', { name: 'report_id' })
  report_id: string;

  @Field(() => String, { description: 'Name of the report.' })
  @Column({ name: 'report_name', type: 'varchar', length: 255 })
  report_name: string;

  @Field(() => String, { description: 'Description of the report.' })
  @Column({ name: 'report_description', type: 'text' })
  report_description: string;

  @Field(() => Date, { description: 'Date of report configuration creation.' })
  @Column({ name: 'creation_date', type: 'timestamp' })
  creation_date: Date;

  @Field(() => String, { description: 'User ID who created the report configuration.' })
  @Column({ name: 'created_user_id', type: 'varchar', length: 255 })
  created_user_id: string;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp' })
  last_update_date: Date;

  @Field(() => String, { description: 'User ID who last updated the report configuration.' })
  @Column({ name: 'last_update_user_id', type: 'varchar', length: 255 })
  last_update_user_id: string;
}
