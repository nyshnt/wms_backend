import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('SupplierMaster')
@Entity('supplier_master')
export class SupplierMaster {
  @Field(() => String, { description: 'Unique identifier for the supplier.' })
  @PrimaryColumn({ name: 'supplier_number' })
  supplier_number: string;

  @Field(() => String, { description: 'Type of asset.' })
  @Column({ name: 'asset_type', type: 'varchar', length: 255, nullable: true })
  asset_type: string;

  @Field(() => String, { description: 'Status of receiving.' })
  @Column({ name: 'receiving_status', type: 'varchar', length: 255, nullable: true })
  receiving_status: string;

  @Field(() => Boolean, { description: 'Trust flag.' })
  @Column({ name: 'trust_flag', type: 'boolean', nullable: true })
  trust_flag: boolean;

  @Field(() => String, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;
} 