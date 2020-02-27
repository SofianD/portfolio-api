import { Module } from '@nestjs/common';
import { LoginController } from './controller/login.controller';
import { LoginService } from './service/login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from 'src/shared/models/admin.interface';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Admin',
            schema: AdminSchema
        }])
    ],
    controllers: [
        LoginController
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule {}
