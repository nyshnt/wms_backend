import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ClientMaster } from './client_master.entity';
import { SupplierMaster } from './supplier_master.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('RMAHeader')
@Entity('rma_header')
export class RMAHeader {
  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Supplier number.' })
  @PrimaryColumn({ name: 'supplier_number' })
  @ManyToOne(() => SupplierMaster)
  @JoinColumn({ name: 'supplier_number', referencedColumnName: 'supplier_number' })
  supplier_number: string;

  @Field(() => String, { description: 'RMA number.' })
  @PrimaryColumn({ name: 'rma_number' })
  rma_number: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;
} 