import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('CustomsConsignmentDefault')
@Entity('customs_consignment_default')
@Index('IDX_customs_consignment_default_client_id', ['client_id'], { unique: true })
@Index('IDX_customs_consignment_default_supplier_number', ['supplier_number'], { unique: true })
@Index('IDX_customs_consignment_default_default_type', ['default_type'], { unique: true })
@Index('IDX_customs_consignment_default_warehouse_id', ['warehouse_id'], { unique: true })
export class CustomsConsignmentDefault extends BaseEntity {
    @Field(() => String, { description: 'Client ID.' })
    @PrimaryGeneratedColumn('uuid')
    client_id: string;

    @Field(() => String, { description: 'Supplier number.' })
    @PrimaryGeneratedColumn('uuid')
    supplier_number: string;

    @Field(() => String, { description: 'Default type.' })
    @PrimaryGeneratedColumn('uuid')
    default_type: string;

    @Field(() => String, { description: 'Warehouse ID.' })
    @PrimaryGeneratedColumn('uuid')
    warehouse_id: string;
} 