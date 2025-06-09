import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PartMaster } from './part_master.entity';
import { ClientMaster } from './client_master.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('PartMasterInventoryStatusTemplate')
@Entity('part_master_inventory_status_template')
export class PartMasterInventoryStatusTemplate {
  @Field(() => PartMaster, { description: 'Part number.' })
  @PrimaryColumn({ name: 'part_number' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: string;

  @Field(() => ClientMaster, { description: 'Client identifier for the part.' })
  @PrimaryColumn({ name: 'part_client_id' })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'client_id' })
  part_client_id: string;

  @Field(() => Warehouse, { description: 'Warehouse identifier for the template.' })
  @PrimaryColumn({ name: 'warehouse_id_template' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id_template', referencedColumnName: 'warehouse_id' })
  warehouse_id_template: string;

  @Field(() => Number, { description: 'Shelf life of the part.' })
  @Column({ name: 'shelf_life', type: 'int', nullable: true })
  shelf_life: number;

  @Field(() => String, { description: 'Time code for shelf life (e.g., days, months).' })
  @Column({ name: 'shelf_life_time_code', nullable: true })
  shelf_life_time_code: string;
} 