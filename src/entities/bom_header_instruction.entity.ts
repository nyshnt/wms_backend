import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BOMHeader } from './bom_header.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('BOMHeaderInstruction')
@Entity('bom_header_instruction')
export class BOMHeaderInstruction {
  @Field(() => String, { description: 'Primary and Foreign key referencing BOM_Header.' })
  @PrimaryColumn({ name: 'bom_number' })
  @ManyToOne(() => BOMHeader)
  @JoinColumn({ name: 'bom_number', referencedColumnName: 'bom_number' })
  bom_number: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Warehouse table.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Client table.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Unique key for the instruction.' })
  @Column({ name: 'instruction_key', type: 'varchar', length: 255, nullable: false })
  instruction_key: string;
} 