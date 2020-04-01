import * as mongoose from "mongoose";
import { Document } from 'mongoose';
import { SkillSchema } from "./skill.interface";
import { FrameworkSchema } from "./framework.interface";
import { PlatformSchema } from "./platform.interface";

export const ProjectSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    created_date : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    images : [
        {
            title: {
                type: String,
                required: true
            },
            path: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                required: true
            }
        }
    ],
    skills: [
        {
            formType: mongoose.Schema.Types.ObjectId,
            ref: SkillSchema
        }
    ],
    frameworks: [
        {
            formType: mongoose.Schema.Types.ObjectId,
            ref: FrameworkSchema
        }
    ],
    platforms: [
        {
            formType: mongoose.Schema.Types.ObjectId,
            ref: PlatformSchema
        }
    ]
})

export interface Project extends Document {
    name: string;
    created_date: Date;
    description: string;
    images: object[] | null;
    skills: object[] | null;
    framework: object[] | null;
    platform: object[] | null;
}
