import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Admin } from 'src/shared/models/admin.interface';
import { Model } from "mongoose";

@Injectable()
export class LoginService {
    constructor(
        @InjectModel('Admin') private readonly adminModel: Model<Admin>
    ) {}

    async login(
        email: any
    ) {
        return this.adminModel.findOne({email}).exec();
    }
}
