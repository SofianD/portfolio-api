import { Controller, Get, Param, Post, UseGuards, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { FrameworkService } from '../service/framework.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { Framework } from 'src/shared/models/framework.interface';

@Controller('framework')
export class FrameworkController {

    constructor(
        private readonly fwService: FrameworkService
    ) {}

    @Get()
    async getAllFrameworks() {
        return await this.fwService.allFrameworks();
    }

    @Get(':id')
    async getOneFramework(
        @Param('id') id: string
    ) {
        const result = await this.fwService.oneFramework(id);
        if (result === null) throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        return result;
    }

    @Post()
    @UseGuards(AuthGuard)
    async createFramework(
        @Body('framework') fw: Framework
    ): Promise<Framework> {
        return await this.fwService.create(fw);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateFramework(
        @Param('id') id: string,
        @Body('framework') fw: Framework
    ) {
        return await this.fwService.update(id, fw) === 0
        ?
        {message: 'No Changes made'}
        :
        await this.fwService.oneFramework(id)
        ;
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteFramework(
        @Param('id') id: string
    ) {
        const result = await this.fwService.delete(id);
        if (result.n === 0) throw new HttpException('PROJECT NOT FOUND', HttpStatus.NOT_FOUND);
        if (result.deletedCount === 0) return { message:'Deletion failed' };
        return {message:'Deletion was successfull'};
    }
}
