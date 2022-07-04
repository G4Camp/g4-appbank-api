import { Brand } from '@models/brand.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

import { plainToClass } from 'class-transformer';

import { BrandResponse } from '@api-doc/brand.response';
import { BrandDto } from '@dtos/brand.dto';
import { BrandService } from './brand.service';

@Controller('brands')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Get()
  index() {
    return this.brandService.find();
  }

  @ApiOkResponse({
    type: BrandResponse,
  })
  @Get(':brandId')
  show(@Param('brandId') brandId: string) {
    return this.brandService.findOneOrFail(brandId);
  }

  @ApiCreatedResponse({
    type: BrandResponse,
  })
  @Post()
  store(
    @Body(
      new ValidationPipe({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    brandDto: BrandDto,
  ) {
    const newBrand = plainToClass(Brand, brandDto);
    return this.brandService.create(newBrand);
  }

  @Put(':brandId')
  async update(@Param('brandId') brandId: string, @Body() brandDto: BrandDto) {
    const brandToUpdate = plainToClass(Brand, brandDto);
    return this.brandService.update(brandId, brandToUpdate);
  }

  @Delete(':brandId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('brandId') brandId: string) {
    return this.brandService.delete(brandId);
  }
}
