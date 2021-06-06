import { Controller, Get, Post,Body, Delete, Param, Put, UseGuards, UseFilters } from "@nestjs/common";
import { ApiTags,ApiBody, ApiBearerAuth, ApiOperation } from "@nestjs/swagger";

@ApiTags('post-article')
@Controller('post-article')
// @UseFilters(new DispatchError())
export class PostArticleController {
    constructor(
    ) { }

   

}