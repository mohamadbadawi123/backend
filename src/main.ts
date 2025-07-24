import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // إضافة CORS
  app.enableCors({
    origin: true,
    credentials: true,
  });
  
  // إضافة body parser
  app.use(require('express').json({ limit: '10mb' }));
  app.use(require('express').urlencoded({ extended: true, limit: '10mb' }));
  
  // إضافة static files
  app.useStaticAssets(join(__dirname, '..', 'uploads'), { prefix: '/uploads/' });
  
 await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
