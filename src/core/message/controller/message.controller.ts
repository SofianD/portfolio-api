import { Controller, Get, Body, Param, HttpException, HttpStatus, Post, UseGuards, Put, Delete } from '@nestjs/common';
import { MessageService } from '../service/message.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { Message } from 'src/shared/models/message.interface';


@Controller('message')
export class MessageController {
    constructor(
        private readonly msgService: MessageService
    ) {}

    @Get()
    @UseGuards(AuthGuard)
    async getAllMessages() {
        return await this.msgService.allMessages();
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    async getOneSMessage(
        @Param('id') id: string
    ) {
        const result = await this.msgService.oneMessage(id);
        if (result === null) throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        return result;
    }

    @Post()
    async createMessage(
        @Body('messageData') message: Message
    ):Promise<Message> {
        return await this.msgService.create(message);
    }

    // @Put(':id')
    // @UseGuards(AuthGuard)
    // async updateMessage(
    //     @Param('id') id: string,
    //     @Body('messageData') message: Message
    // ) {
    //     return await this.msgService.update(id, message) === 0
    //     ?
    //     {message: 'No Changes made'}
    //     :
    //     await this.msgService.oneMessage(id)
    //     ;
    // }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteMessage(
        @Param('id') id: string
    ) {
        const result = await this.msgService.delete(id);
        if (result.n === 0) throw new HttpException('MESSAGE NOT FOUND', HttpStatus.NOT_FOUND);
        if (result.deletedCount === 0) throw new HttpException('DELETION FAILED', HttpStatus.INTERNAL_SERVER_ERROR);
        return {message:'Deletion was successfull'};
    }
}
