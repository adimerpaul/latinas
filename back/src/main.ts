import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as process from "process";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
      .setTitle('Api latinas')
      .setDescription('Api de latinas editores')
      .setVersion('1.0')
      .addTag('latinas')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  console.error("PORT_SERVER", process.env.PORT_SERVER)
  await app.listen(process.env.PORT_SERVER);
}
bootstrap();
