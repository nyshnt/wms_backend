import { Entity, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('AssetMapDetail')
@Entity('asset_map_detail')
export class AssetMapDetail {
  @Field(() => String, { description: 'Unique identifier for the asset map detail.' })
  @PrimaryColumn({ name: 'map_detail_id' })
  map_detail_id: string;
} 