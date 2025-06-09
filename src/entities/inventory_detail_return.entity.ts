import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PartMaster } from './part_master.entity';
import { ClientMaster } from './client_master.entity';
import { ReturnDetail } from './return_detail.entity';
import { InventoryStatusMaster } from './inventory_status_master.entity';

@ObjectType('InventoryDetailReturn')
@Entity('inventory_detail_return')
export class InventoryDetailReturn {
  @Field(() => String, { description: 'Unique ID for inventory detail.' })
  @PrimaryColumn({ name: 'inventory_detail_number' })
  inventory_detail_number: string;

  @Field(() => String, { description: 'Sub-number for inventory detail.' })
  @Column({ name: 'sub_number', nullable: true })
  sub_number: string;

  @Field(() => String, { description: 'Part number.' })
  @Column({ name: 'part_number', nullable: true })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Client ID for the part.' })
  @Column({ name: 'part_client_id', nullable: true })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'client_id' })
  part_client_id: string;

  @Field(() => String, { description: 'Receiving key.' })
  @Column({ name: 'receiving_key', nullable: true })
  @ManyToOne(() => ReturnDetail)
  @JoinColumn({ name: 'receiving_key' })
  receiving_key: string;

  @Field(() => String, { description: 'Inventory status.' })
  @Column({ name: 'inventory_status', nullable: true })
  @ManyToOne(() => InventoryStatusMaster)
  @JoinColumn({ name: 'inventory_status', referencedColumnName: 'inventory_status_code' })
  inventory_status: string;
} 