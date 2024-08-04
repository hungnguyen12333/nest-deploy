import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiProvider } from './ApiProviderModule/api-provider.entity';
import { ApiProviderModule } from './ApiProviderModule/api-provider.module';
@Module({
   imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'web-api',
      entities: [ApiProvider],
      synchronize: false,
    }),
    ApiProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
