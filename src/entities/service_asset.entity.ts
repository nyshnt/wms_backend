import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('ServiceAsset')
@Entity('service_asset')
export class ServiceAsset {
  @Field(() => String, { description: 'Unique identifier for the service asset.' })
  @PrimaryColumn({ name: 'asset_id' })
  asset_id: string;

  @Field(() => String, { description: 'Name of the service asset.' })
  @Column({ name: 'asset_name', type: 'varchar', length: 255, nullable: true })
  asset_name: string;

  @Field(() => String, { description: 'Description of the service asset.' })
  @Column({ name: 'description', type: 'varchar', length: 255, nullable: true })
  description: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  @Field(() => Boolean, { description: 'Roll call flag.' })
  @Column({ name: 'roll_call_flag', type: 'boolean', nullable: true })
  roll_call_flag: boolean;

  @Field(() => String, { description: 'Asset tag.' })
  @Column({ name: 'asset_tag', type: 'varchar', length: 255, nullable: true })
  asset_tag: string;
}
