import { Module } from '@nestjs/common';
import { FrameworkController } from '../framework/controller/framework.controller';
import { FrameworkService } from '../framework/service/framework.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillSchema } from 'src/shared/models/skill.interface';
import { PlatformSchema } from 'src/shared/models/platform.interface';
import { PlatformController } from './controller/platform.controller';
import { PlatformService } from './service/platform.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Platform',
                schema: PlatformSchema
            },
            {
                name: 'Skill',
                schema: SkillSchema
            }
        ])
    ],
    controllers: [
        PlatformController
    ],
    providers: [
        PlatformService
    ]
})
export class PlatformModule {}
