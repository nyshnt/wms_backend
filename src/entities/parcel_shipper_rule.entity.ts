import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';
import { LocationMaster } from './location_master.entity';

@ObjectType('ParcelShipperRule')
@Entity('parcel_shipper_rule')
export class ParcelShipperRule {
  @Field(() => String, { description: 'Unique identifier for the parcel shipper rule.' })
  @PrimaryColumn({ name: 'rule_id' })
  rule_id: string;

  @Field(() => Warehouse, { description: 'Warehouse ID.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;

  @Field(() => LocationMaster, { description: 'Location ID.' })
  @ManyToOne(() => LocationMaster)
  @JoinColumn({ name: 'location_id', referencedColumnName: 'storage_location' })
  location_id: LocationMaster;

  @Field(() => Number, { description: 'Sequence number.' })
  @Column({ name: 'sequence_number', type: 'int' })
  sequence_number: number;
} 