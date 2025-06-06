import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('SupplierPartConsignmentOverride')
@Entity('supplier_part_consignment_override')
export class SupplierPartConsignmentOverride {
  @Field(() => String, { description: 'Supplier number.' })
  @PrimaryColumn({ name: 'supplier_number' })
  supplier_number: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Part number.' })
  @PrimaryColumn({ name: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Client ID for the part.' })
  @PrimaryColumn({ name: 'part_client_id' })
  part_client_id: string;
} 