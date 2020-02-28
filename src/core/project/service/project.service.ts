import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from 'src/shared/models/project.interface';
import { Model } from "mongoose";

@Injectable()
export class ProjectService {

    constructor(
        @InjectModel('Project') private readonly projectModel: Model<Project>
    ) {}

    async allProjects() {
        return await this.projectModel.find().exec();
    }

    async oneProject(id: string) {
        try {
            const result = await this.projectModel.findOne({_id: id});
            const {__v, ...project} = result._doc;
            return project;
        } catch (error) {
            return null;
        }
    }

    async create(project: Project) {
        const result =  await new this.projectModel(project).save();
        const {__v, ...createdProject} = result._doc;
        return createdProject;
    }

    async update(id: string, project: Project) {
        const result = await this.projectModel.findOneAndUpdate(
            {_id: id},
            project
        );
        return result;
    }

    async delete(id: string) {
        const result = await this.projectModel.deleteOne({_id: id});
        return result;
    }
}
