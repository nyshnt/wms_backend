import { Entity, PrimaryColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('pick_work_detail_asset_list_picking')
export class PickWorkDetailAssetListPicking {
  @Field(() => String, { description: 'Unique work reference detail ID.' })
  @PrimaryColumn({ name: 'work_reference_detail_id' })
  work_reference_detail_id: string;
} 