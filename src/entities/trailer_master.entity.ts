import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Warehouse } from './warehouse.entity';

@ObjectType('TrailerMaster')
@Entity('trailer_master')
export class TrailerMaster {
  @Field(() => String, { description: 'Unique identifier for the trailer.' })
  @PrimaryColumn({ name: 'trailer_id' })
  trailer_id: string;

  @Field(() => String, { description: 'Trailer number.' })
  @Column({ name: 'trailer_number', type: 'varchar', length: 255, nullable: true })
  trailer_number: string;

  @Field(() => Warehouse, { description: 'Foreign key referencing the Warehouse table.' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  @Field(() => String, { description: 'Description of the trailer.' })
  @Column({ name: 'description', type: 'varchar', length: 255, nullable: true })
  description: string;
}
