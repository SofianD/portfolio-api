import { Module } from '@nestjs/common';
import { RegisterController } from './controller/register.controller';
import { RegisterService } from './service/register.service';

@Module({
    controllers: [
        RegisterController
    ],
    providers: [
        RegisterService
    ]
})
export class RegisterModule {}
