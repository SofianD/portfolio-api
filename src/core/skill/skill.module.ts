import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FrameworkSchema } from 'src/shared/models/framework.interface';
import { SkillSchema } from 'src/shared/models/skill.interface';
import { SkillController } from './controller/skill.controller';
import { SkillService } from './service/skill.service';
import { CheckFormMiddleware } from "./middleware/check-form.middleware";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Framework',
                schema: FrameworkSchema
            },
            {
                name: 'Skill',
                schema: SkillSchema
            }
        ])
    ],
    controllers: [
        SkillController
    ],
    providers: [
        SkillService
    ]
})
export class SkillModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                CheckFormMiddleware
            )
            .exclude(
                {
                    path: 'skill',
                    method: RequestMethod.GET
                }
            )
            .forRoutes('skill');
    }
}
