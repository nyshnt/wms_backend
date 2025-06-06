import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('DataAccessGroupSupplier')
@Entity('data_access_group_supplier')
export class DataAccessGroupSupplier {
  @Field(() => String, { description: 'Data access group ID.' })
  @PrimaryColumn({ name: 'data_access_group_id' })
  data_access_group_id: string;

  @Field(() => String, { description: 'Supplier number.' })
  @PrimaryColumn({ name: 'supplier_number' })
  supplier_number: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;
} 