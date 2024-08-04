import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiProvider } from './ApiProviderModule/api-provider.entity';
import { ApiProviderModule } from './ApiProviderModule/api-provider.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: "private-db-mysql-test-do-user-13502920-0.d.db.ondigitalocean.com",
        port: 25060,
        username: 'doadmin',
        password: 'AVNS_k2RuVcj7gq-qisJ9ZDr',
        database: 'defaultdb',
        entities: [ApiProvider],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([ApiProvider]), // Khai báo ApiProvider repository
    ApiProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
