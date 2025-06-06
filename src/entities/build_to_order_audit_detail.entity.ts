import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BuildToOrderAudit } from './build_to_order_audit.entity';
import { AssetSlot } from './asset_slot.entity';

@ObjectType('BuildToOrderAuditDetail')
@Entity('build_to_order_audit_detail')
export class BuildToOrderAuditDetail {
  @Field(() => BuildToOrderAudit, { description: 'Build to order audit ID.' })
  @PrimaryColumn({ name: 'build_to_order_audit_id' })
  @ManyToOne(() => BuildToOrderAudit)
  @JoinColumn({ name: 'build_to_order_audit_id', referencedColumnName: 'build_to_order_audit_id' })
  build_to_order_audit_id: BuildToOrderAudit;

  @Field(() => AssetSlot, { description: 'Slot.' })
  @PrimaryColumn({ name: 'slot' })
  @ManyToOne(() => AssetSlot)
  @JoinColumn({ name: 'slot', referencedColumnName: 'slot' })
  slot: AssetSlot;

  @Field(() => String, { description: 'Unique identifier for the build-to-order audit detail.' })
  @PrimaryColumn({ name: 'build_to_order_audit_detail_id' })
  build_to_order_audit_detail_id: string;

  @Field(() => Number, { description: 'Expected build-to-order sequence number.' })
  @Column({ name: 'expected_build_to_order_sequence_number', type: 'int' })
  expected_build_to_order_sequence_number: number;

  @Field(() => Number, { description: 'Scanned build-to-order sequence number.' })
  @Column({ name: 'scanned_build_to_order_sequence_number', type: 'int' })
  scanned_build_to_order_sequence_number: number;

  @Field(() => String, { description: 'Status of the build-to-order audit detail.' })
  @Column({ name: 'build_to_order_audit_detail_status', type: 'varchar' })
  build_to_order_audit_detail_status: string;

  @Field(() => String, { description: 'Order number.' })
  @Column({ name: 'order_number', type: 'varchar' })
  order_number: string;
} 