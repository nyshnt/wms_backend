import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BOMHeader } from './bom_header.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('BOMDetail')
@Entity('bom_detail')
export class BOMDetail {
  @Field(() => String, { description: 'Primary and Foreign key referencing BOM_Header.' })
  @PrimaryColumn({ name: 'bom_number' })
  @ManyToOne(() => BOMHeader)
  @JoinColumn({ name: 'bom_number', referencedColumnName: 'bom_number' })
  bom_number: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Client table.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Warehouse table.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Number, { description: 'Line number within the BOM.' })
  @Column({ name: 'bom_line_number', type: 'int', nullable: false })
  bom_line_number: number;

  @Field(() => String, { description: 'Process location.' })
  @Column({ name: 'process_location', type: 'varchar', length: 255, nullable: true })
  process_location: string;
} 