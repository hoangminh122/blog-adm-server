import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { LoggerModule } from './modules/logger/logger.module';
import { LoggerService } from './modules/logger/logger.service';
import { PostArticleModule } from './modules/post-article/post-article.module';

@Module({
  imports: [
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'..','uploads')
    }),
    LoggerModule,
    PostArticleModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    LoggerService
  ],
})
export class AppModule {

}
