import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('BOMHeader')
@Entity('bom_header')
export class BOMHeader {
  @Field(() => String, { description: 'Unique identifier for the Bill of Material (BOM) header.' })
  @PrimaryColumn({ name: 'bom_number' })
  bom_number: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Boolean, { description: 'Exclusion flag.' })
  @Column({ type: 'boolean', nullable: true })
  exclusion_flag: boolean;

  @Field(() => String, { description: 'Production line.' })
  @Column({ type: 'varchar', length: 255, nullable: true })
  production_line: string;
} 