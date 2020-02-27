import { Module } from '@nestjs/common';
import { LoginController } from './controller/login.controller';
import { LoginService } from './service/login.service';

@Module({
    imports: [],
    controllers: [
        LoginController
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule {}
