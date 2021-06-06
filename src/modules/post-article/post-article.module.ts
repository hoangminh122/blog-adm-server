import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { PostArticleController } from "./post-article.controller";
import { PostArticleService } from "./post-article.service";

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [
        PostArticleController,
    ],
    providers: [
            PostArticleService,
    ]
})
export class PostArticleModule {

}