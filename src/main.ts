import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useLogger(app.get(LoggerService));
  
   //swagger config
   const config = new DocumentBuilder()
   .setTitle("trello")
   .setDescription("The trello API description")
   .setVersion("1.0")
   .addTag("adm")
   .build();
 
   const document = SwaggerModule.createDocument(app,config);
   SwaggerModule.setup('api',app,document);
   app.enableCors(); //protection
   //server
   await app.listen(process.env.PORT || 3000);
}
bootstrap();
