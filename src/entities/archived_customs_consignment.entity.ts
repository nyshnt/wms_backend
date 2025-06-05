import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { CustomsConsignment } from './customs_consignment.entity';
import { Warehouse } from './warehouse.entity';

@ObjectType('ArchivedCustomsConsignment')
@Entity('archived_customs_consignment')
@Index('IDX_archived_customs_consignment_id', ['customs_consignment_id'], { unique: true })
@Index('IDX_archived_customs_consignment_warehouse_id', ['warehouse_id'], { unique: true })
export class ArchivedCustomsConsignment extends BaseEntity {
    @Field(() => CustomsConsignment, { description: 'Primary and Foreign key referencing Customs_Consignment.' })
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(() => CustomsConsignment)
    @JoinColumn({ name: 'customs_consignment_id', referencedColumnName: 'customs_consignment_id' })
    customs_consignment_id: CustomsConsignment;

    @Field(() => Warehouse, { description: 'Primary and Foreign key referencing the Warehouse table.' })
    @PrimaryGeneratedColumn('uuid')
    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: 'warehouse_id', referencedColumnName: 'warehouse_id' })
    warehouse_id: Warehouse;
} 