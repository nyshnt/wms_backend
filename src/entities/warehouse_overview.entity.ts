import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('WarehouseOverview')
@Entity('warehouse_overview')
@Index('IDX_warehouse_overview_warehouse_id', ['warehouse_id'], { unique: true })
export class WarehouseOverview extends BaseEntity {
    @Field(() => String, { description: 'Primary and Foreign key referencing the Warehouse table.' })
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;
} 