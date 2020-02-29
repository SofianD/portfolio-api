import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Skill } from 'src/shared/models/skill.interface';
import { Model } from "mongoose";

@Injectable()
export class SkillService {
    constructor(
        @InjectModel('Skill') private readonly skillModel: Model<Skill>
    ) {}

    async allSkills() {
        return await this.skillModel.find().exec();
    }

    async oneSkill(id: string) {
        try {
            const result = await this.skillModel.findOne({_id: id});
            const {__v, ...skill} = result._doc;
            return skill;
        } catch (error) {
            return null
        }
    }

    async create(skill: Skill) {
        const result = await new this.skillModel.save();
        const { __v, ...createdSkill} = result._doc;
        return createdSkill;
    }

    async update(
        id: string,
        skill: Skill
    ) {
        const result = await this.skillModel.updateOne(
            {_id: id},
            skill
        );
        return result.nModified;
    }

    async delete(id: string) {
        const result = await this.skillModel.deleteOne({_id: id});
        return result;
    }
}
