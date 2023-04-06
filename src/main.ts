import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserModule } from './user/user.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger';
import { SwaggerDocumentOptions } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('NestJS-Swagger')
    .setDescription('Always Learning')
    .setVersion('1.0')
    .build();

  const options: SwaggerDocumentOptions = {
    include: [
      AppModule,
      UserModule
    ]
  }

  const setupOptions = {
    customSiteTitle: 'NestJS-Swagger'
  }

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document, setupOptions);

  await app.listen(3000);
}
bootstrap();
