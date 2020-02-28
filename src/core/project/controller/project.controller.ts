import { Controller, Get, Param, Post, UseGuards, Body, Delete, Put } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';

@Controller('project')
export class ProjectController {

    @Get()
    async getAllProjects() {

    }

    @Get(':id')
    async getOneProject(@Param('id') id: string) {

    }

    @Post()
    @UseGuards(AuthGuard)
    async createProject(@Body('projectData') projectData: object) {

    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateProject(@Param('id') id: string) {

    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteProject(@Param('id') id: string) {

    }
}
