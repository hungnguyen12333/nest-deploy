import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiProvider } from './ApiProviderModule/api-provider.entity';
import { Repository } from 'typeorm';
import { AppController } from './app.controller';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppController.name);

  getHello(): string {
    return 'Hello World!';
  }


  constructor(
    @InjectRepository(ApiProvider)
    private readonly apiProviderRepository: Repository<ApiProvider>,
  ) {}

  async onModuleInit() {
    this.logger.log('Checking database connection...');
    try {
      // Lấy dữ liệu từ bảng ApiProvider
      const data = await this.apiProviderRepository.find();
      this.logger.log('Data from ApiProvider table:');
      this.logger.log(JSON.stringify(data, null, 2));  // Hiển thị dữ liệu dưới dạng JSON

      // Số lượng dòng dữ liệu
      const count = await this.apiProviderRepository.count();
      this.logger.log(`Number of rows in ApiProvider: ${count}`);
    } catch (error) {
      this.logger.error('Database connection failed', error.stack);
    }
  }
}
