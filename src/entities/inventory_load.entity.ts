import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';
import { PalletDetail } from './pallet_detail.entity';

@ObjectType('InventoryLoad')
@Entity('inventory_load')
@Index('IDX_inventory_load_load_number', ['load_number'], { unique: true })
export class InventoryLoad extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the inventory load.' })
    @PrimaryGeneratedColumn('uuid')
    load_number: string;

    @Field(() => PalletDetail, { description: 'Foreign key referencing the Pallet_Detail table.' })
    @ManyToOne(() => PalletDetail)
    @JoinColumn({ name: 'pallet_id', referencedColumnName: 'pallet_id' })
    pallet_id: PalletDetail;

    @Field(() => String, { description: 'Dynamic name associated with the load.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    dynamic_name: string;

    @Field(() => String, { description: 'Device code.' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    device_code: string;
}
