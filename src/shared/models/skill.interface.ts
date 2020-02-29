import * as mongoose from "mongoose";
import { Document } from 'mongoose';

export const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path_logo: {
        type: String
    }
})

export interface Skill extends Document {
    name: string;
    path_logo? : string;
}