import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { AssetMapDetail } from './asset_map_detail.entity';

@ObjectType('AssetMapMedia')
@Entity('asset_map_media')
export class AssetMapMedia {
  @Field(() => String, { description: 'Unique identifier for the asset media.' })
  @PrimaryColumn({ name: 'asset_media_id' })
  asset_media_id: string;

  @Field(() => AssetMapDetail, { description: 'Map detail ID.' })
  @PrimaryColumn({ name: 'map_detail_id' })
  @ManyToOne(() => AssetMapDetail)
  @JoinColumn({ name: 'map_detail_id', referencedColumnName: 'map_detail_id' })
  map_detail_id: AssetMapDetail;
} 