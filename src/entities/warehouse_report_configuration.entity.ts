import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ReportConfiguration } from './report_configuration.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('WarehouseReportConfiguration')
@Entity('warehouse_report_configuration')
export class WarehouseReportConfiguration {
  @Field(() => ReportConfiguration, { description: 'Report ID.' })
  @PrimaryColumn({ name: 'report_id' })
  @ManyToOne(() => ReportConfiguration)
  @JoinColumn({ name: 'report_id', referencedColumnName: 'report_id' })
  report_id: ReportConfiguration;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => Boolean, { description: 'Flag indicating if a digital signature is required.' })
  @Column({ name: 'digital_signature_required_flag', type: 'boolean' })
  digital_signature_required_flag: boolean;
} 