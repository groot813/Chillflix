import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'https';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/numbers')
  getNumbers(): number[] {
    return [1, 2, 3, 4, 5, 6];
  }


}
