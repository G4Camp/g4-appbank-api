import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { EntityNotFoundExceptionFilter } from './exception-filters/entity-not-found.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('appbank API')
    .setDescription('API para aplicação appbank')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger-ui', app, document);

  app.useGlobalFilters(new EntityNotFoundExceptionFilter());

  await app.listen(port);
}
bootstrap();
