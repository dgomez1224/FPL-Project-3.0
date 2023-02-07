import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController, DetailsController, FixturesController, StandingsController } from './app.controller';
import { AppService } from './app.service';
import { FixturesModule } from './fixtures/fixtures.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fixture } from './fixtures/entities/fixture.entity';

@Module({
  imports: [TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: +configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USER'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      entities: [Fixture],
      synchronize: true,
      }),
      inject: [ConfigService]
  }), ConfigModule, ConfigModule.forRoot({ envFilePath: ['.env']}), FixturesModule],
  controllers: [AppController, StandingsController, FixturesController, DetailsController],
  providers: [AppService],
})
export class AppModule {}
