import { Module } from '@nestjs/common';
import { RegisterController } from './controller/register.controller';
import { RegisterService } from './service/register.service';
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
        RegisterController
    ],
    providers: [
        RegisterService
    ]
})
export class RegisterModule {}
