import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ClientMaster } from './client_master.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('PartMasterReceivingTemplate')
@Entity('part_master_receiving_template')
export class PartMasterReceivingTemplate {
  @Field(() => String, { description: 'Part number.' })
  @PrimaryColumn({ name: 'part_number' })
  part_number: string;

  @Field(() => String, { description: 'Client identifier for the part.' })
  @PrimaryColumn({ name: 'part_client_id' })
  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'client_id' })
  part_client_id: string;

  @Field(() => String, { description: 'Warehouse identifier for the template.' })
  @PrimaryColumn({ name: 'warehouse_id_template' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id_template', referencedColumnName: 'warehouse_id' })
  warehouse_id_template: string;
} 