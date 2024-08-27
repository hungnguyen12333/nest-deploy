import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(123123);
    
    return this.appService.getHello();
  }
  @Post()
  test(@Body() data): string {
    console.log(data);
    
    return this.appService.getHello();
  }
}
