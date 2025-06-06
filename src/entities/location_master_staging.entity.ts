import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('LocationMasterStaging')
@Entity('location_master_staging')
export class LocationMasterStaging {
  @Field(() => String, { description: 'Storage location.' })
  @PrimaryColumn({ name: 'storage_location' })
  storage_location: string;

  @Field(() => String, { description: 'Staging location.' })
  @PrimaryColumn({ name: 'staging_location' })
  staging_location: string;

  @Field(() => String, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Type of plan.' })
  @Column({ name: 'plan_type', type: 'varchar', length: 255, nullable: true })
  plan_type: string;
} 