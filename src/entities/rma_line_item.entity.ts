import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { RMAHeader } from './rma_header.entity';

@ObjectType('RMALineItem')
@Entity('rma_line_item')
export class RMALineItem {
  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => RMAHeader)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Supplier number.' })
  @PrimaryColumn({ name: 'supplier_number' })
  @ManyToOne(() => RMAHeader)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplier_number: string;

  @Field(() => String, { description: 'RMA number.' })
  @PrimaryColumn({ name: 'rma_number' })
  @ManyToOne(() => RMAHeader)
  @JoinColumn({ name: 'rma_number', referencedColumnName: 'rma_number' })
  rma_number: string;

  @Field(() => String, { description: 'RMA line number.' })
  @PrimaryColumn({ name: 'rma_line_number' })
  rma_line_number: string;

  @Field(() => String, { description: 'RMA sub-line number.' })
  @Column({ name: 'rma_sub_line_number', nullable: true })
  rma_sub_line_number: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => RMAHeader)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;
} 