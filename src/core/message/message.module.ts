import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from 'src/shared/models/message.interface';
import { MessageController } from './controller/message.controller';
import { MessageService } from './service/message.service';

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
export class MessageModule {}
