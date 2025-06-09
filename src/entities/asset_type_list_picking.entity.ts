import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('asset_type_list_picking')
export class AssetTypeListPicking {
  @Field(() => String, { description: 'Unique asset type identifier.' })
  @PrimaryGeneratedColumn({ name: 'asset_type_id' })
  asset_type_id: string;

  @Field(() => String, { description: 'Category of the asset.' })
  @Column({ name: 'asset_category' })
  asset_category: string;

  @Field(() => Boolean, { description: 'Serialized flag.' })
  @Column({ name: 'serialized_flag' })
  serialized_flag: boolean;

  @Field(() => Boolean, { description: 'Temporary flag.' })
  @Column({ name: 'temporary_flag' })
  temporary_flag: boolean;

  @Field(() => Boolean, { description: 'Container flag.' })
  @Column({ name: 'container_flag' })
  container_flag: boolean;

  @Field(() => Boolean, { description: 'Flag for list pick asset.' })
  @Column({ name: 'list_pick_asset_flag' })
  list_pick_asset_flag: boolean;
} 