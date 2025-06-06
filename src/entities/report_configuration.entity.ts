import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('ReportConfiguration')
@Entity('report_configuration')
export class ReportConfiguration {
  @Field(() => String, { description: 'Unique identifier for the report configuration.' })
  @PrimaryColumn({ name: 'report_id' })
  report_id: string;

  @Field(() => String, { description: 'Product ID.' })
  @Column({ name: 'product_id', type: 'varchar', length: 255 })
  product_id: string;

  @Field(() => String, { description: 'File name for the report layout.' })
  @Column({ name: 'report_layout_file', type: 'varchar', length: 255 })
  report_layout_file: string;

  @Field(() => String, { description: 'Default printer for the report.' })
  @Column({ name: 'default_printer', type: 'varchar', length: 255 })
  default_printer: string;

  @Field(() => String, { description: 'Type of report.' })
  @Column({ name: 'report_type', type: 'varchar', length: 255 })
  report_type: string;

  @Field(() => Number, { description: 'Number of days to keep the report.' })
  @Column({ name: 'keep_days', type: 'int' })
  keep_days: number;

  @Field(() => Boolean, { description: 'Flag to enable EMS.' })
  @Column({ name: 'enable_EMS_flag', type: 'boolean' })
  enable_EMS_flag: boolean;

  @Field(() => String, { description: 'EMS event name.' })
  @Column({ name: 'EMS_event_name', type: 'varchar', length: 255 })
  EMS_event_name: string;

  @Field(() => String, { description: 'Functional area of the report.' })
  @Column({ name: 'functional_area', type: 'varchar', length: 255 })
  functional_area: string;

  @Field(() => Boolean, { description: 'Flag indicating if a digital signature is required.' })
  @Column({ name: 'digital_signature_required_flag', type: 'boolean' })
  digital_signature_required_flag: boolean;
}
