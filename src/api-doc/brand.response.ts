import { ApiProperty } from '@nestjs/swagger';

export class BrandResponse {
  @ApiProperty()
  brandId: number;

  @ApiProperty()
  brandName: string;

  @ApiProperty()
  brandPhotoUrl: string;

  @ApiProperty()
  brandCreatedAt: Date;

  @ApiProperty()
  brandIsActive: boolean;
}
