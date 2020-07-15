import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

const url = require('url')

@Controller('fetch')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNothing(): string {
    return 'nothing'
  }

  @Get(':url')
  getUrl(@Param() params) {
    return this.appService.fetchRRS(params.url)
  }

}