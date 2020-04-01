import { Controller, Get, Param, Post, UseGuards, Body, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { ProjectService } from '../service/project.service';
import { Project } from 'src/shared/models/project.interface';

@Controller('project')
export class ProjectController {

    constructor(
        private readonly projectService: ProjectService
    ) {}

    @Get()
    async getAllProjects() {
        return {
            message: 'Fetched successfully',
            projects: await this.projectService.allProjects()
        };
    }

    @Get(':id')
    async getOneProject(
        @Param('id') id: string
    ) {
        const result = await this.projectService.oneProject(id);
        if (result === null) throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        return {
            message: 'Project found',
            project: result
        };
    }

    @Post()
    @UseGuards(AuthGuard)
    async createProject(
        @Body('project') project: Project
    ): Promise<Project> {
        return await this.projectService.create(project);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateProject(
        @Param('id') id: string,
        @Body('project') project: Project
    ) {
        return await this.projectService.update(id, project) === 0
        ?
        {message:'No changes made'}
        :
        await this.projectService.oneProject(id);
        ;
        
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteProject(
        @Param('id') id: string
    ) {
        const result = await this.projectService.delete(id);
        if (result.n === 0) throw new HttpException('PROJECT NOT FOUND', HttpStatus.NOT_FOUND);
        if (result.deletedCount === 0) return {message:'Deletion failed'};
        return {
            message:'Deletion was successfull'
        };
    }
}
