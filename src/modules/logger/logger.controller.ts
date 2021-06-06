import { Controller, Get, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { get } from 'http';

@Controller('logger')
export class LoggerController {

    @Get(':id')
    async findOne(@Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.BAD_REQUEST})) id:number) {
        return id;
    }

    @Get()
    async findOne1() {
        return 'OK';
    }


}
