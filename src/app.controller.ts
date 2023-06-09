import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: any) {
    this.appService.getHello(body);
    return { message: { ack: { status: 'ACK' } } };
  }
}
