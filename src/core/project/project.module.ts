import { Module } from '@nestjs/common';
import { ProjectController } from './controller/project.controller';
import { ProjectService } from './service/project.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectSchema } from 'src/shared/models/project.interface';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Project',
                schema: ProjectSchema
            }
            // {                                            <-  imports skill model
            //     name: '',                                <-
            //     schema:                                  <-
            // },
            // {                                            <-  imports framework model
            //     name: '',                                <-
            //     schema:                                  <-
            // }
        ])
    ],
    controllers: [
        ProjectController
    ],
    providers:[
        ProjectService
    ]
})
export class ProjectModule {}
