import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('Warehouse')
@Entity('warehouses')
@Index('IDX_warehouses_warehouse_id', ['warehouse_id'], { unique: true })
export class Warehouse extends BaseEntity {
    @Field(() => String)
    @PrimaryGeneratedColumn('uuid')
    warehouse_id: string;
}
