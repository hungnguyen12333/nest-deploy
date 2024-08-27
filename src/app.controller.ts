import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: any): string {
    console.log(query);  // Log toàn bộ query parameters

    return this.appService.getHello();
  }
  @Post()
  test(@Body() data): string {
    console.log(data);
    
    return this.appService.getHello();
  }
}
