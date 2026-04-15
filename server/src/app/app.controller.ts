import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    @Get()
    public getHello(): string {
        return this._appService.getHello();
    }

    constructor(private readonly _appService: AppService) {}
}
