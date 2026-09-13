import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ensureTruthy } from './infra/shared/utils/ensureTruthy.js';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.listen(ensureTruthy(process.env.PORT));
}
await bootstrap();
