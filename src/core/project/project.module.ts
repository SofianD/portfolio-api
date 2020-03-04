import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProjectController } from './controller/project.controller';
import { ProjectService } from './service/project.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from 'src/shared/models/project.interface';
import { FrameworkSchema } from 'src/shared/models/framework.interface';
import { SkillSchema } from 'src/shared/models/skill.interface';
import { CheckFormMiddleware } from "./middleware/check-form.middleware";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Project',
                schema: ProjectSchema
            },
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
        ProjectController
    ],
    providers:[
        ProjectService
    ]
})
export class ProjectModule implements NestModule {
    configure (consumer: MiddlewareConsumer) {
        consumer
            .apply(
                CheckFormMiddleware
            )
            .forRoutes(
                {
                    path: 'project',
                    method: RequestMethod.POST
                },
                {
                    path: 'project',
                    method: RequestMethod.PUT
                }
            );
    }
}
