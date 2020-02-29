import { Controller, Get, Body, Param, HttpException, HttpStatus, Post, UseGuards, Put, Delete } from '@nestjs/common';
import { SkillService } from '../service/skill.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { Skill } from 'src/shared/models/skill.interface';

@Controller('skill')
export class SkillController {
    constructor(
        private readonly skillService: SkillService
    ) {}

    @Get()
    async getAllSkills() {
        return await this.skillService.allSkills();
    }

    @Get(':id')
    async getOneSkill(
        @Param('id') id: string
    ) {
        const result = await this.skillService.oneSkill(id);
        if (result === null) throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        return result;
    }

    @Post()
    @UseGuards(AuthGuard)
    async createSkill(
        @Body('skill') skill: Skill
    ):Promise<Skill> {
        return await this.skillService.create(skill);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateSkill(
        @Param('id') id: string,
        @Body('skill') skill: Skill
    ) {
        return await this.skillService.update(id, skill) === 0
        ?
        {message: 'No Changes made'}
        :
        await this.skillService.oneSkill(id)
        ;
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteSkill(
        @Param('id') id: string
    ) {
        const result = await this.skillService.delete(id);
        if (result.n === 0) throw new HttpException('PROJECT NOT FOUND', HttpStatus.NOT_FOUND);
        if (result.deletedCount === 0) return { message:'Deletion failed' };
        return {message:'Deletion was successfull'};
    }
}
