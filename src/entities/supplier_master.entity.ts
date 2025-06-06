import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('SupplierMaster')
@Entity('supplier_master')
export class SupplierMaster {
  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Supplier number.' })
  @PrimaryColumn({ name: 'supplier_number' })
  supplier_number: string;

  @Field(() => String, { description: 'Address ID.' })
  @Column({ name: 'address_id', type: 'varchar' })
  address_id: string;

  @Field(() => String, { description: 'Tracking consignment code.' })
  @Column({ name: 'tracking_consignment_code', type: 'varchar' })
  tracking_consignment_code: string;
} 