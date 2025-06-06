import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('BuildToOrderAudit')
@Entity('build_to_order_audit')
export class BuildToOrderAudit {
  @Field(() => String, { description: 'Unique identifier for the build-to-order audit.' })
  @PrimaryColumn({ name: 'build_to_order_audit_id' })
  build_to_order_audit_id: string;

  @Field(() => String, { description: 'Load number.' })
  @Column({ name: 'load_number', type: 'varchar' })
  load_number: string;

  @Field(() => String, { description: 'Type of build-to-order audit.' })
  @Column({ name: 'build_to_order_audit_type', type: 'varchar' })
  build_to_order_audit_type: string;

  @Field(() => String, { description: 'Status of the build-to-order audit.' })
  @Column({ name: 'build_to_order_audit_status', type: 'varchar' })
  build_to_order_audit_status: string;

  @Field(() => Date, { description: 'Begin time.' })
  @Column({ name: 'begin_time', type: 'timestamp' })
  begin_time: Date;

  @Field(() => Date, { description: 'End time.' })
  @Column({ name: 'end_time', type: 'timestamp' })
  end_time: Date;

  @Field(() => String, { description: 'Asset type.' })
  @Column({ name: 'asset_type', type: 'varchar' })
  asset_type: string;

  @Field(() => String, { description: 'Shipment ID.' })
  @Column({ name: 'shipment_id', type: 'varchar' })
  shipment_id: string;
} 