import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from 'src/shared/models/message.interface';
import { MessageController } from './controller/message.controller';
import { MessageService } from './service/message.service';
import { CheckFormMiddleware } from "./middleware/check-form.middleware";


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Message',
                schema: MessageSchema
            }
        ])
    ],
    controllers: [
        MessageController
    ],
    providers: [
        MessageService
    ]
})
export class MessageModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                CheckFormMiddleware
            )
            .forRoutes(
                {
                    path: 'message',
                    method: RequestMethod.POST
                }
            );
    }
}
