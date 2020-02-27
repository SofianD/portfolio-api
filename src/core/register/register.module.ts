import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RegisterController } from './controller/register.controller';
import { RegisterService } from './service/register.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from 'src/shared/models/admin.interface';
import { CheckFormMiddleware } from './middleware/check-form.middleware';
import { CryptPwMiddleware } from './middleware/crypt-pw.middleware';

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
export class RegisterModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                CheckFormMiddleware,
                CryptPwMiddleware
            )
            .forRoutes('register');
    }
}
