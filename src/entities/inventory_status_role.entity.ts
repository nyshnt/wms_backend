import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ApplicationAuthorizationRole } from './application_authorization_role.entity';
import { InventoryStatusMaster } from './inventory_status_master.entity';
import { UserMaster } from './user_master.entity';

@ObjectType('InventoryStatusRole')
@Entity('inventory_status_role')
export class InventoryStatusRole {
  @Field(() => String, { description: 'Unique ID for inventory status role mapping.' })
  @PrimaryColumn({ name: 'inventory_status_role_id' })
  inventory_status_role_id: string;

  @Field(() => ApplicationAuthorizationRole, { description: 'Foreign key referencing Application_Authorization_Role.' })
  @ManyToOne(() => ApplicationAuthorizationRole)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'role_id' })
  role_id: string;

  @Field(() => InventoryStatusMaster, { description: 'Original inventory status.' })
  @ManyToOne(() => InventoryStatusMaster)
  @JoinColumn({ name: 'from_inventory_status', referencedColumnName: 'inventory_status_code' })
  from_inventory_status: string;

  @Field(() => InventoryStatusMaster, { description: 'Target inventory status.' })
  @ManyToOne(() => InventoryStatusMaster)
  @JoinColumn({ name: 'to_inventory_status', referencedColumnName: 'inventory_status_code' })
  to_inventory_status: string;

  @Field(() => Date, { description: 'Date of insertion.' })
  @Column({ name: 'insert_date', type: 'timestamp', nullable: true })
  insert_date: Date;

  @Field(() => UserMaster, { description: 'User who inserted the record.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'insert_user_id', referencedColumnName: 'user_id' })
  insert_user_id: string;

  @Field(() => Date, { description: 'Date of last modification.' })
  @Column({ name: 'modification_date', type: 'timestamp', nullable: true })
  modification_date: Date;

  @Field(() => UserMaster, { description: 'User who last modified the record.' })
  @ManyToOne(() => UserMaster)
  @JoinColumn({ name: 'modification_user_id', referencedColumnName: 'user_id' })
  modification_user_id: string;
} 