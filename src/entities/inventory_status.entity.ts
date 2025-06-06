import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PartMaster } from './part_master.entity';
import { InventorySubLocation } from './inventory_sub_location.entity';

@ObjectType('InventoryStatus')
@Entity('inventory_status')
export class InventoryStatus {
  @Field(() => String, { description: 'Unique identifier for the inventory status.' })
  @PrimaryColumn({ name: 'inventory_status' })
  inventory_status: string;

  @Field(() => PartMaster, { description: 'Foreign key referencing PartMaster.' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: PartMaster;

  @Field(() => PartMaster, { description: 'Foreign key referencing PartMaster.' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'part_client_id' })
  part_client_id: PartMaster;

  @Field(() => InventorySubLocation, { description: 'Foreign key referencing InventorySubLocation.' })
  @ManyToOne(() => InventorySubLocation)
  @JoinColumn({ name: 'sub_number', referencedColumnName: 'sub_number' })
  sub_number: InventorySubLocation;

  @Field(() => String, { description: 'Status description.' })
  @Column({ name: 'status_description', type: 'varchar', length: 255, nullable: true })
  status_description: string;
}
