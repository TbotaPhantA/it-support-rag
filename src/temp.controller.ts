import { Controller, Get } from '@nestjs/common';

@Controller()
export class TempController {
  constructor() {}

  @Get('test')
  test() {
    return 'Hello, world!'
  }
}
