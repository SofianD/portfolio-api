import * as mongoose from "mongoose";
import { Document } from 'mongoose';

export const FrameworkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skill_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
        required: true
    },
    path_logo: {
        type: String
    }
})

export interface Framework extends Document {
    name: string;
    skill_id: string;
    path_logo? : string;
}
