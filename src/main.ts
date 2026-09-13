import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ensureTruthy } from './infra/shared/utils/ensureTruthy.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  setupSwagger();
  await app.listen(ensureTruthy(process.env.PORT));

  // -----------------sub functions------------------------
  function setupSwagger() {
    const config = new DocumentBuilder()
      .setTitle('IT-support AI assistant')
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);
  }
}


await bootstrap();
