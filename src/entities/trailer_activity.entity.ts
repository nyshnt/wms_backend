import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { TrailerMaster } from './trailer_master.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('TrailerActivity')
@Entity('trailer_activity')
export class TrailerActivity {
  @Field(() => String, { description: 'Unique identifier for the row.' })
  @PrimaryColumn({ name: 'row_id' })
  row_id: string;

  @Field(() => String, { description: 'Asset tag.' })
  @Column({ name: 'asset_tag', type: 'varchar', length: 255, nullable: true })
  asset_tag: string;

  @Field(() => String, { description: 'Trailer activity ID.' })
  @Column({ name: 'trailer_activity_id', type: 'varchar', length: 255, nullable: true })
  trailer_activity_id: string;

  @Field(() => TrailerMaster, { description: 'Foreign key referencing Trailer_Master.' })
  @ManyToOne(() => TrailerMaster)
  @JoinColumn({ name: 'trailer_id', referencedColumnName: 'trailer_id' })
  trailer_id: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: string;

  @Field(() => String, { description: 'Trailer number.' })
  @Column({ name: 'trailer_number', type: 'varchar', length: 255, nullable: true })
  trailer_number: string;
} 