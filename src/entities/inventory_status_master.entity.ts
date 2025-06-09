import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('InventoryStatusMaster')
@Entity('inventory_status_master')
export class InventoryStatusMaster {
  @Field(() => String, { description: 'Unique code for the inventory status.' })
  @PrimaryColumn({ name: 'inventory_status_code' })
  inventory_status_code: string;

  @Field(() => String, { description: 'Description of the inventory status.' })
  @Column({ name: 'inventory_status_description', nullable: true })
  inventory_status_description: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insert_date', type: 'timestamp', nullable: true })
  insert_date: Date;

  @Field(() => Date, { description: 'Date of last update.' })
  @Column({ name: 'last_update_date', type: 'timestamp', nullable: true })
  last_update_date: Date;
}
