import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiProvider } from './api-provider.entity';

@Injectable()
export class ApiProviderService {
  constructor(
    @InjectRepository(ApiProvider)
    private apiProviderRepository: Repository<ApiProvider>,
  ) {}

  findAll(): Promise<ApiProvider[]> {
    return this.apiProviderRepository.find();
  }
}
