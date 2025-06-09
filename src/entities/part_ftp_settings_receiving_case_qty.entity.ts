import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PartMasterReceivingCaseQty } from './part_master_receiving_case_qty.entity';
import { Warehouse } from './warehouse.entity';

@Entity('Part_FTP_Settings_Receiving_Case_Qty')
export class PartFTPSettingsReceivingCaseQty {
  @PrimaryColumn({ name: 'part_number' })
  part_number: string;

  @PrimaryColumn({ name: 'part_client_id' })
  part_client_id: string;

  @PrimaryColumn({ name: 'warehouse_id' })
  warehouse_id: string;

  @ManyToOne(() => PartMasterReceivingCaseQty)
  @JoinColumn([
    { name: 'part_number', referencedColumnName: 'part_number' },
    { name: 'part_client_id', referencedColumnName: 'part_client_id' }
  ])
  partMasterReceivingCaseQty: PartMasterReceivingCaseQty;

  @ManyToOne(() => Warehouse)
  @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
  warehouse: Warehouse;

  @Column({ name: 'receive_ftp_flag', nullable: true })
  receive_ftp_flag: boolean;
} 