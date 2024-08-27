import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppController } from './app.controller';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppController.name);

  getHello(): string {
    return 'Hello World!';
  }

}
