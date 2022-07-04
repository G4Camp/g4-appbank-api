import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Brand } from './models/brand.model';
import { BrandController } from './controllers/brand/brand.controller';
import { BrandService } from './controllers/brand/brand.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Brand],
    }),
    TypeOrmModule.forFeature([Brand]),
  ],
  controllers: [BrandController],
  providers: [BrandService],
})
export class AppModule {}
