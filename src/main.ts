import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ensureTruthy } from './shared/utils/ensureTruthy.js';
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
    SwaggerModule.setup(
      'api',
      app,
      () => SwaggerModule.createDocument(
        app,
        new DocumentBuilder()
          .setTitle('IT-support AI assistant')
          .build()
      )
    );
  }
}


await bootstrap();
