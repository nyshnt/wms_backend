import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BOMDetail } from './bom_detail.entity';

@ObjectType('BOMDetailInstruction')
@Entity('bom_detail_instruction')
export class BOMDetailInstruction {
  @Field(() => String, { description: 'Primary and Foreign key referencing BOM_Detail.' })
  @PrimaryColumn({ name: 'bom_number' })
  @ManyToOne(() => BOMDetail)
  @JoinColumn({ name: 'bom_number', referencedColumnName: 'bom_number' })
  bom_number: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing BOM_Detail.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => BOMDetail)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing BOM_Detail.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => BOMDetail)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => Number, { description: 'Primary and Foreign key referencing BOM_Detail.' })
  @PrimaryColumn({ name: 'bom_line_number' })
  @ManyToOne(() => BOMDetail)
  @JoinColumn({ name: 'bom_line_number', referencedColumnName: 'bom_line_number' })
  bom_line_number: number;

  @Field(() => String, { description: 'Unique key for the instruction.' })
  @Column({ name: 'instruction_key', type: 'varchar', length: 255, nullable: false })
  instruction_key: string;
} 