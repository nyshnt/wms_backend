import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PartMaster } from './part_master.entity';
import { FTPMaster } from './ftp_master.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('PartFTP')
@Entity('part_ftp')
export class PartFTP {
  @Field(() => PartMaster, { description: 'Primary and Foreign key referencing Part_Master.' })
  @PrimaryColumn({ name: 'part_number' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: PartMaster;

  @Field(() => PartMaster, { description: 'Primary and Foreign key referencing Part_Master.' })
  @PrimaryColumn({ name: 'part_client_id' })
  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'part_client_id' })
  part_client_id: PartMaster;

  @Field(() => FTPMaster, { description: 'Primary and Foreign key referencing FTP_Master.' })
  @PrimaryColumn({ name: 'FTP_code' })
  @ManyToOne(() => FTPMaster)
  @JoinColumn({ name: 'FTP_code', referencedColumnName: 'FTP_code' })
  FTP_code: FTPMaster;

  @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse_id: Warehouse;
} 