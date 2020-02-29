import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Framework } from 'src/shared/models/framework.interface';
import { Model } from "mongoose";

@Injectable()
export class FrameworkService {
    constructor(
        @InjectModel('Framework') private readonly fwModel: Model<Framework>
    ) {}

    async allFrameworks() {
        return await this.fwModel.find().exec();
    }

    async oneFramework(id: string) {
        try {
            const result = await this.fwModel.findOne({_id: id});
            const {__v, ...framework} = result._doc;
            return framework;
        } catch (error) {
            return null;
        }
    }
    async create(fwData: Framework) {
        const result = await new this.fwModel(fwData).save();
        const {__v, ...createdFramework} = result._doc;
        return createdFramework;
    }

    async update(
        id: string,
        framework: Framework
    ) {
        const result = await this.fwModel.updateOne(
            {_id: id},
            framework
        );
        return result.nModified;
    }

    async delete(id: string) {
        return this.fwModel.deleteOne({_id: id});
    }
}
