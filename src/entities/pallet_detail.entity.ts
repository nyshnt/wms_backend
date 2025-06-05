import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Index } from 'typeorm';
import { BaseEntity } from '../common/entities/base.entity';

@ObjectType('PalletDetail')
@Entity('pallet_detail')
@Index('IDX_pallet_detail_pallet_id', ['pallet_id'], { unique: true })
export class PalletDetail extends BaseEntity {
    @Field(() => String, { description: 'Unique identifier for the pallet.' })
    @PrimaryGeneratedColumn('uuid')
    pallet_id: string;
}
