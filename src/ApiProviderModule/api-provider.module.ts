import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiProvider } from './api-provider.entity';
import { ApiProviderService } from './api-provider.service';
import { ApiProviderController } from './api-provider.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ApiProvider])],
  providers: [ApiProviderService],
  controllers: [ApiProviderController],
})
export class ApiProviderModule {}
