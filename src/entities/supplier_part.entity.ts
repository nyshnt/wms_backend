import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PartMaster } from './part_master.entity';
import { SupplierMaster } from './supplier_master.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('SupplierPart')
@Entity('supplier_part')
export class SupplierPart {
  @Field(() => String, { description: 'Primary and Foreign key referencing Supplier_Master.' })
  @PrimaryColumn({ name: 'supplier_number' })
  @ManyToOne(() => SupplierMaster)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplier_number: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Part_Master.' })
  @PrimaryColumn({ name: 'part_number' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing Part_Master.' })
  @PrimaryColumn({ name: 'part_client_id' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'part_client_id' })
  part_client_id: string;

  @Field(() => String, { description: 'Primary and Foreign key referencing the Client table.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Lot format ID.' })
  @Column({ name: 'lot_format_id', type: 'varchar', length: 255, nullable: true })
  lot_format_id: string;

  @Field(() => String, { description: 'Reorder point.' })
  @Column({ name: 'reorder_point', type: 'varchar', length: 255, nullable: true })
  reorder_point: string;

  @Field(() => String, { description: 'Type of asset.' })
  @Column({ name: 'asset_type', type: 'varchar', length: 255, nullable: true })
  asset_type: string;
}
