import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { SupplierMaster } from './supplier_master.entity';
import { Warehouse } from './warehouse.entity';
import { Client } from './client.entity';

@ObjectType('PartMaster')
@Entity('part_master')
export class PartMaster {
  @Field(() => String, { description: 'Unique identifier for the part.' })
  @PrimaryColumn({ name: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Client ID associated with the part.' })
  @PrimaryColumn({ name: 'part_client_id' })
  part_client_id: string;

  @Field(() => String, { description: 'Description of the part.' })
  @Column({ name: 'description', type: 'varchar', length: 255, nullable: true })
  description: string;

  @Field(() => SupplierMaster, { description: 'Foreign key referencing the SupplierMaster table.' })
  @ManyToOne(() => SupplierMaster)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplier_number: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => Client, { description: 'Foreign key referencing the Client table.' })
  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;
}
