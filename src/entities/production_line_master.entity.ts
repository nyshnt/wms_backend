import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('ProductionLineMaster')
@Entity('production_line_master')
export class ProductionLineMaster {
  @Field(() => String, { description: 'Unique identifier for the production line.' })
  @PrimaryColumn({ name: 'production_line' })
  production_line: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Warehouse table.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Boolean, { description: 'Exclusion flag.' })
  @Column({ name: 'exclusion_flag', type: 'boolean', nullable: true })
  exclusion_flag: boolean;

  @Field(() => String, { description: 'Production care details.' })
  @Column({ name: 'production_care', type: 'varchar', length: 255, nullable: true })
  production_care: string;
} 