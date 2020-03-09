import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Platform } from 'src/shared/models/platform.interface';
import { Model } from "mongoose";

@Injectable()
export class PlatformService {
    constructor(
        @InjectModel('Platform') private readonly platformModel: Model<Platform>
    ) {}

    async getAllPlatforms() {
        return await this.platformModel.find().exec();
    }

    async getOnePlatform(id: string) {
        try {
            
            const {__v, ...platform} = (await this.platformModel.findOne({_id: id}))._doc;
            return platform;
        } catch (error) {
            return null;
        }
    }

    async create(platform: Platform) {
        const {__v, ...createdPlatform} = (await new this.platformModel(platform).save())._doc;
        return createdPlatform;
    }

    async delete(id :string) {
        return await this.platformModel.deleteOne({_id: id});
    } 
}
