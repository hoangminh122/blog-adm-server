import { Logger, Injectable, Scope } from '@nestjs/common';


@Injectable({scope:Scope.TRANSIENT})
export class LoggerService extends Logger {
  error(message: string) {
    // add your tailored logic here
    super.error(message);
  }
}