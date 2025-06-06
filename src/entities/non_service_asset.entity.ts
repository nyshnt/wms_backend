import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('NonServiceAsset')
@Entity('non_service_asset')
export class NonServiceAsset {
  @Field(() => String, { description: 'Non-service asset ID.' })
  @PrimaryColumn({ name: 'non_service_asset_id' })
  non_service_asset_id: string;

  @Field(() => String, { description: 'Client ID.' })
  @PrimaryColumn({ name: 'client_id' })
  client_id: string;

  @Field(() => String, { description: 'Warehouse ID.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Part number.' })
  @Column({ name: 'part_number', type: 'varchar' })
  part_number: string;

  @Field(() => String, { description: 'Part client ID.' })
  @Column({ name: 'part_client_id', type: 'varchar' })
  part_client_id: string;

  @Field(() => String, { description: 'Lot number.' })
  @Column({ name: 'lot_number', type: 'varchar' })
  lot_number: string;

  @Field(() => String, { description: 'Supplier number.' })
  @Column({ name: 'supplier_number', type: 'varchar' })
  supplier_number: string;

  @Field(() => String, { description: 'Asset status.' })
  @PrimaryColumn({ name: 'asset_status' })
  asset_status: string;
} 