import { Injectable } from '@nestjs/common';
import { LoggerService } from './modules/logger/logger.service';

@Injectable()
export class AppService {
  constructor(  private readonly loggerService :LoggerService)
  {

  }
  getHello(): string {
    this.loggerService.error("loi");
    return 'Hello World!';
  }
}
