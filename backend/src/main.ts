import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { setupSwagger } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: ['error', 'warn', 'debug'],
    snapshot: true,
    cors: {
      origin:
        process.env.NODE_ENV === 'production'
          ? process.env.ALLOWED_ORIGINS.split(',')
          : '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    },
  });

  // MICROSERVICE
  await app.startAllMicroservices();

  // V1 PREFIX FOR ALL ROUTES
  const globalPrefix = 'v1';
  app.setGlobalPrefix(globalPrefix);

  app.useStaticAssets(join(__dirname, '..', 'www/assets'));
  app.setBaseViewsDir(join(__dirname, '..', 'www'));
  app.setViewEngine('ejs');
  // SWAGGER
  setupSwagger(app);

  // PORT
  const port = process.env.NODE_PORT || 3021;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/v1/docs`);
}
void bootstrap();
