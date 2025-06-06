import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PartMaster } from './part_master.entity';
import { SupplierPart } from './supplier_part.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('SupplierPartFTP')
@Entity('supplier_part_ftp')
export class SupplierPartFTP {
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

  @Field(() => String, { description: 'Primary and Foreign key referencing Supplier_Part.' })
  @PrimaryColumn({ name: 'supplier_number' })
  @ManyToOne(() => SupplierPart)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplier_number: string;

  @Field(() => String, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'FTP code.' })
  @Column({ name: 'FTP_code', type: 'varchar', length: 255, nullable: true })
  FTP_code: string;

  @Field(() => String, { description: 'Type of asset.' })
  @Column({ name: 'asset_type', type: 'varchar', length: 255, nullable: true })
  asset_type: string;

  @Field(() => String, { description: 'Foreign key referencing the Client table.' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;
} 