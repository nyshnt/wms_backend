import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { PartFTP } from './part_ftp.entity';

@ObjectType('PartFTPDetail')
@Entity('part_ftp_detail')
export class PartFTPDetail {
  @Field(() => PartFTP, { description: 'Primary and Foreign key referencing Part_FTP.' })
  @PrimaryColumn({ name: 'part_number' })
  @ManyToOne(() => PartFTP)
  @JoinColumn({ name: 'part_number', referencedColumnName: 'part_number' })
  part_number: PartFTP;

  @Field(() => PartFTP, { description: 'Primary and Foreign key referencing Part_FTP.' })
  @PrimaryColumn({ name: 'part_client_id' })
  @ManyToOne(() => PartFTP)
  @JoinColumn({ name: 'part_client_id', referencedColumnName: 'part_client_id' })
  part_client_id: PartFTP;

  @Field(() => PartFTP, { description: 'Primary and Foreign key referencing Part_FTP.' })
  @PrimaryColumn({ name: 'warehouse_id' })
  @ManyToOne(() => PartFTP)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: PartFTP;

  @Field(() => PartFTP, { description: 'Primary and Foreign key referencing Part_FTP.' })
  @PrimaryColumn({ name: 'FTP_code' })
  @ManyToOne(() => PartFTP)
  @JoinColumn({ name: 'FTP_code', referencedColumnName: 'FTP_code' })
  FTP_code: PartFTP;

  @Field(() => String, { description: 'Unit of measure code.' })
  @Column({ name: 'unit_of_measure_code', type: 'varchar', length: 255, nullable: true })
  unit_of_measure_code: string;

  @Field(() => Number, { description: 'Quantity of the unit.' })
  @Column({ name: 'unit_quantity', type: 'float', nullable: true })
  unit_quantity: number;

  @Field(() => Number, { description: 'Length.' })
  @Column({ name: 'length', type: 'float', nullable: true })
  length: number;
} 