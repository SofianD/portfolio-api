import { Controller, Get, Param, HttpException, HttpStatus, Post, UseGuards, Body, Delete } from '@nestjs/common';
import { PlatformService } from '../service/platform.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { Platform } from 'src/shared/models/platform.interface';

@Controller('platform')
export class PlatformController {
    constructor(
        private readonly platformService: PlatformService
    ) {}

    @Get()
    async getAllPlatforms() {
        return await this.platformService.getAllPlatforms();
    }

    @Get(':id')
    async getOnePlatform(
        @Param('id') id: string
    ) {
        const result = await this.platformService.getOnePlatform(id);
        if (result === null) throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        return result;
    }

    @Post()
    @UseGuards(AuthGuard)
    async createPlatform(
        @Body('platform') platform: Platform
    ): Promise<Platform> {
        return await this.platformService.create(platform);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deletePlatform(
        @Param('id') id: string
    ) {
        const result = await this.platformService.delete(id);
        if(result.n === 0) throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        if (result.deleteCount === 0) throw new HttpException('Delation failed', HttpStatus.NOT_MODIFIED);
        return {message: 'Deletion was successfully'};
    }
}
