import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from '../service/register.service';

@Controller('register')
export class RegisterController {

    constructor(
        private readonly registerService: RegisterService
    ) {}

    @Post()
    async register(
        @Body('userData') userData: any,
    ) {
        const result = await this.registerService.createAdmin(userData);
        console.log(result);
        return 'ok'
    }
}
