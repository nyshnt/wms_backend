import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../common/entities/base.entity';
import { CustomerWarehousePutawayLocation } from './customer_warehouse_putaway_location.entity';

@ObjectType('CustomerWarehousePutawayLocationField')
@Entity('customer_warehouse_putaway_location_field')
@Index(['customerNumber', 'warehouseId', 'clientId', 'sortSequence', 'areaCode'], { unique: true })
export class CustomerWarehousePutawayLocationField extends BaseEntity {
    @Field(() => String, { description: 'Primary and Foreign key referencing Customer_Warehouse_Putaway_Location.' })
    @PrimaryColumn({ name: 'customer_number' })
    customerNumber: string;

    @Field(() => String, { description: 'Primary and Foreign key referencing Customer_Warehouse_Putaway_Location.' })
    @PrimaryColumn({ name: 'warehouse_id' })
    warehouseId: string;

    @Field(() => String, { description: 'Primary and Foreign key referencing Customer_Warehouse_Putaway_Location.' })
    @PrimaryColumn({ name: 'client_id' })
    clientId: string;

    @Field(() => Number, { description: 'Primary and Foreign key referencing Customer_Warehouse_Putaway_Location.' })
    @PrimaryColumn({ name: 'sort_sequence' })
    sortSequence: number;

    @Field(() => String, { description: 'Primary and Foreign key referencing Customer_Warehouse_Putaway_Location.' })
    @PrimaryColumn({ name: 'area_code' })
    areaCode: string;

    @Field(() => String, { description: 'Name of the column.' })
    @Column({ name: 'column_name' })
    columnName: string;

    @ManyToOne(() => CustomerWarehousePutawayLocation)
    @JoinColumn([
        { name: 'customer_number', referencedColumnName: 'customer_number' },
        { name: 'warehouse_id', referencedColumnName: 'warehouse_id' },
        { name: 'client_id', referencedColumnName: 'client_id' },
        { name: 'sort_sequence', referencedColumnName: 'sort_sequence' },
        { name: 'area_code', referencedColumnName: 'area_code' }
    ])
    customerWarehousePutawayLocation: CustomerWarehousePutawayLocation;
}