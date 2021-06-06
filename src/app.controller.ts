import { Controller, Get, LoggerService } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  
    ) {}

  @Get()
  getHello(): string {
    //this.loggerService.error("loi");
    return this.appService.getHello();
  }
}
