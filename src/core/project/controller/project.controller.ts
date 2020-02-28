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
        return await this.projectService.allProjects();
    }

    @Get(':id')
    async getOneProject(
        @Param('id') id: string
    ) {
        const result = await this.projectService.oneProject(id);
        if (result === null) throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        return result;
    }

    @Post()
    @UseGuards(AuthGuard)
    async createProject(
        @Body('projectData') projectData: Project
    ): Promise<Project> {
        return await this.projectService.create(projectData);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateProject(
        @Param('id') id: string,
        @Body('projectData') project: Project
    ) {
        return this.projectService.update(id, project);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteProject(@Param('id') id: string) {
        return this.projectService.delete(id);
    }
}
