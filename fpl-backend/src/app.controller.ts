import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('details')
export class DetailsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getDetails() {
    return this.appService.getDetails();
  }
}
@Controller('standings')
export class StandingsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getStandings() {
    return this.appService.getStandings();
  }
}

@Controller('fixtures')
export class FixturesController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getFixtures() {
    return this.appService.getFixtures();
  }
}