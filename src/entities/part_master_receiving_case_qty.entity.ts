import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PartMaster } from './part_master.entity';
import { ClientMaster } from './client_master.entity';

@Entity('Part_Master_Receiving_Case_Qty')
export class PartMasterReceivingCaseQty {
  @PrimaryColumn()
  part_number: string;

  @PrimaryColumn()
  part_client_id: string;

  @ManyToOne(() => PartMaster)
  @JoinColumn({ name: 'part_number' })
  partMaster: PartMaster;

  @ManyToOne(() => ClientMaster)
  @JoinColumn({ name: 'part_client_id' })
  clientMaster: ClientMaster;

  @Column({ nullable: true })
  attribute_string_1: string;

  @Column({ nullable: true })
  attribute_string_2: string;

  @Column({ nullable: true })
  attribute_string_3: string;

  @Column({ nullable: true })
  attribute_string_4: string;

  @Column({ nullable: true })
  attribute_string_5: string;

  @Column({ nullable: true })
  attribute_string_6: string;

  @Column({ nullable: true })
  attribute_string_7: string;

  @Column({ nullable: true })
  attribute_string_8: string;

  @Column({ nullable: true })
  attribute_string_9: string;

  @Column({ nullable: true })
  attribute_string_10: string;

  @Column({ nullable: true })
  attribute_integer_1: number;

  @Column({ nullable: true })
  attribute_integer_2: number;

  @Column({ nullable: true })
  attribute_integer_3: number;

  @Column({ nullable: true })
  attribute_integer_4: number;

  @Column({ nullable: true })
  attribute_integer_5: number;

  @Column({ nullable: true })
  attribute_float_1: number;

  @Column({ nullable: true })
  attribute_float_2: number;

  @Column({ nullable: true })
  attribute_float_3: number;

  @Column({ nullable: true })
  attribute_date_1: Date;

  @Column({ nullable: true })
  attribute_date_2: Date;

  @Column({ nullable: true })
  display_part_number: string;

  @Column({ nullable: true })
  alternate_part_type: string;
} 