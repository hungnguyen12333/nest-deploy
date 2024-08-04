import { Controller, Get } from '@nestjs/common';
import { ApiProviderService } from './api-provider.service';
import { ApiProvider } from './api-provider.entity';

@Controller('api-providers')
export class ApiProviderController {
  constructor(private readonly apiProviderService: ApiProviderService) {}

  @Get()
  findAll(): Promise<ApiProvider[]> {
    return this.apiProviderService.findAll();
  }
}
