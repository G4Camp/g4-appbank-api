import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Brand } from '@models/brand.model';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand) private brandRepository: Repository<Brand>,
  ) {}

  create(newBrand: Brand): Promise<Brand> {
    const brand = this.brandRepository.create(newBrand);
    return this.brandRepository.save(brand);
  }

  find(): Promise<Brand[]> {
    return this.brandRepository.find();
  }

  findOneOrFail(brandId: string): Promise<Brand> {
    return this.brandRepository.findOneOrFail(brandId);
  }

  async update(brandId: string, brand: Brand): Promise<Brand> {
    await this.brandRepository.findOneOrFail(brandId);
    this.brandRepository.update({ brandId: +brandId }, brand);
    return this.brandRepository.findOne(brandId);
  }

  async delete(brandId: string) {
    await this.brandRepository.findOneOrFail(brandId);
    this.brandRepository.delete(brandId);
  }
}
