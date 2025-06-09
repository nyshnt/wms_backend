import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ReturnHeader } from './return_header.entity';
import { PartMaster } from './part_master.entity';
import { ClientMaster } from './client_master.entity';

@ObjectType('ReturnDetail')
@Entity('return_detail')
export class ReturnDetail {
  @Field(() => String, { description: 'RMA number.' })
  @PrimaryColumn({ name: 'rma_number' })
  @ManyToOne(() => ReturnHeader)
  @JoinColumn({ name: 'rma_number', referencedColumnName: 'rma_number' })
  rma_number: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => ReturnHeader)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Sequence number of the return detail.' })
  @PrimaryColumn({ name: 'sequence_number' })
  sequence_number: string;

  @Field(() => String, { description: 'Line number of the return detail.' })
  @PrimaryColumn({ name: 'line_number' })
  line_number: string;

  @Field(() => String, { description: 'Part number.' })
  @Column({ name: 'part_number', nullable: true })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Client ID for the part.' })
  @Column({ name: 'part_client_id', nullable: true })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'client_id' })
  part_client_id: string;

  @Field(() => Number, { description: 'Expected quantity for return.' })
  @Column({ name: 'expected_quantity', type: 'int', nullable: true })
  expected_quantity: number;

  @Field(() => Number, { description: 'Identified quantity for return.' })
  @Column({ name: 'identified_quantity', type: 'int', nullable: true })
  identified_quantity: number;

  @Field(() => String, { description: 'Key related to receiving process.' })
  @Column({ name: 'receiving_key', nullable: true })
  receiving_key: string;
} 