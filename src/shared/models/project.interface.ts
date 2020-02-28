import * as mongoose from "mongoose";
import { Document } from 'mongoose';

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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        }
    ],
    framework: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Framework'
        }
    ],
    platform: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Platform'
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
