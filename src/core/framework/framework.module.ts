import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { FrameworkService } from './service/framework.service';
import { FrameworkController } from './controller/framework.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FrameworkSchema } from 'src/shared/models/framework.interface';
import { CheckFormMiddleware } from "./middleware/check-form.middleware";
@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Framework',
                schema: FrameworkSchema
            }
        ])
    ],
    controllers: [
        FrameworkController
    ],
    providers: [
        FrameworkService
    ]
})
export class FrameworkModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                CheckFormMiddleware
            )
            .forRoutes(
                { path: 'framework', method: RequestMethod.POST },
                { path: 'framework', method: RequestMethod.PUT }
            );
    }
}
