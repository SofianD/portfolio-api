import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Message } from 'src/shared/models/message.interface';

@Injectable()
export class MessageService {
    constructor(
        @InjectModel('Message') private readonly msgModel: Model<Message>
    ) {}

    async allMessages() {
        return await this.msgModel.find().exec();
    }

    async oneMessage(id: string) {
        try {
            const result = await this.msgModel.findOne({_id: id});
            const {__v, ...message} = result._doc;
            return message;
        } catch (error) {
            return null
        }
    }

    async create(message: Message) {
        const result = await new this.msgModel.save();
        const { __v, ...createdMessage} = result._doc;
        return createdMessage;
    }

    // async update(
    //     id: string,
    //     message: Message
    // ) {
    //     const result = await this.msgModel.updateOne(
    //         {_id: id},
    //         message
    //     );
    //     return result.nModified;
    // }

    async delete(id: string) {
        const result = await this.msgModel.deleteOne({_id: id});
        return result;
    }
}
