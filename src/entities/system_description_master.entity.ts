import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DescriptionMaster } from './description_master.entity';

@Entity('System_Description_Master')
export class SystemDescriptionMaster {
  @PrimaryColumn()
  column_name: string;

  @PrimaryColumn()
  column_value: string;

  @PrimaryColumn()
  locale_id: string;

  @ManyToOne(() => DescriptionMaster)
  @JoinColumn([
    { name: 'column_name', referencedColumnName: 'column_name' },
    { name: 'column_value', referencedColumnName: 'column_value' },
    { name: 'locale_id', referencedColumnName: 'locale_id' }
  ])
  descriptionMaster: DescriptionMaster;

  @Column({ nullable: true })
  customer_level: string;

  @Column({ nullable: true })
  mls_text: string;

  @Column({ nullable: true })
  short_description: string;

  @Column({ nullable: true })
  group_name: string;
} 