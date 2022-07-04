import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class BrandDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  brandName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  brandPhotoUrl: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  brandIsActive: boolean;
}
