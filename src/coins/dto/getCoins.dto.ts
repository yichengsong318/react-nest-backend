import { IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
import { allowedAssetType } from 'src/helper/model/asset.model';
import { Expose } from 'class-transformer';
export class GetCoinsDto {
  @Expose()
  @IsNotEmpty()
  @IsEnum(allowedAssetType)
  readonly asset: allowedAssetType;
}
