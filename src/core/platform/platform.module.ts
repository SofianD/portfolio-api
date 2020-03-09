import { Module } from '@nestjs/common';
import { FrameworkController } from '../framework/controller/framework.controller';
import { FrameworkService } from '../framework/service/framework.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FrameworkSchema } from 'src/shared/models/framework.interface';
import { SkillSchema } from 'src/shared/models/skill.interface';

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
export class PlatformModule {}
